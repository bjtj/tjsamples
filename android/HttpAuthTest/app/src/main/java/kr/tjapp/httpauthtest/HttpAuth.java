package kr.tjapp.httpauthtest;

import android.util.Base64;
import android.util.Log;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;

import com.google.common.base.CharMatcher;
import com.google.common.base.Joiner;
import com.google.common.base.Splitter;
import com.google.common.collect.Iterables;
import com.google.common.collect.Maps;

// https://gist.github.com/slightfoot/5624590
public class HttpAuth {

  private static final String TAG = "HttpDigestAuth";

  public HttpURLConnection tryAuth(HttpURLConnection connection, String username, String password)
      throws IOException {
    int responseCode = connection.getResponseCode();
    if (responseCode == HttpURLConnection.HTTP_UNAUTHORIZED) {
      connection = tryAuthentication(connection, username, password);
      if (connection == null) {
        throw new AuthenticationException();
      }
    }
    return connection;
  }

  public static HttpURLConnection tryAuthentication(HttpURLConnection input, String username,
      String password) {
    String auth = input.getHeaderField("WWW-Authenticate");

    if (auth == null) {
      return null;
    }

    if (auth.startsWith("Basic ")) {
      Log.d(TAG, "do basic auth");
      return tryBasicAuth(input, username, password);
    }

    if (!auth.startsWith("Digest ")) {
      return null;
    }

    Log.d(TAG, "do digest");

    final HashMap<String, String> authFields = splitAuthFields(auth.substring(7));

    MessageDigest md5 = null;
    try {
      md5 = MessageDigest.getInstance("MD5");
    } catch (NoSuchAlgorithmException e) {
      return null;
    }

    Joiner colonJoiner = Joiner.on(':');

    String HA1 = null;
    try {
      md5.reset();
      String ha1str = colonJoiner.join(username,
          authFields.get("realm"), password);
      md5.update(ha1str.getBytes("ISO-8859-1"));
      byte[] ha1bytes = md5.digest();
      HA1 = bytesToHexString(ha1bytes);
    } catch (UnsupportedEncodingException e) {
      return null;
    }

    String HA2 = null;
    try {
      md5.reset();
      String ha2str = colonJoiner.join(input.getRequestMethod(),
          input.getURL().getPath());
      md5.update(ha2str.getBytes("ISO-8859-1"));
      HA2 = bytesToHexString(md5.digest());
    } catch (UnsupportedEncodingException e) {
      return null;
    }

    String HA3 = null;
    try {
      md5.reset();
      String ha3str = colonJoiner.join(HA1, authFields.get("nonce"), HA2);
      md5.update(ha3str.getBytes("ISO-8859-1"));
      HA3 = bytesToHexString(md5.digest());
    } catch (UnsupportedEncodingException e) {
      return null;
    }

    StringBuilder sb = new StringBuilder(128);
    sb.append("Digest ");
    sb.append("username").append("=\"").append(username).append("\",");
    sb.append("realm").append("=\"").append(authFields.get("realm")).append("\",");
    sb.append("nonce").append("=\"").append(authFields.get("nonce")).append("\",");
    sb.append("uri").append("=\"").append(input.getURL().getPath()).append("\",");
    //sb.append("qop"     ).append('='  ).append("auth"                  ).append(",");
    sb.append("response").append("=\"").append(HA3).append("\"");

    try {
      final HttpURLConnection result = (HttpURLConnection) input.getURL().openConnection();
      result.addRequestProperty("Authorization", sb.toString());
      return result;
    } catch (IOException e) {
      return null;
    }
  }

  public static HttpURLConnection tryBasicAuth(HttpURLConnection input, String username,
      String password) {
    try {
      final HttpURLConnection result = (HttpURLConnection) input.getURL().openConnection();
      String base64 = Base64.encodeToString(
          String.format("%s:%s", username, password).getBytes(StandardCharsets.UTF_8),
          Base64.DEFAULT);
      String auth = String.format("Basic %s", base64);
      result.addRequestProperty("Authorization", auth);
      return result;
    } catch (IOException e) {
      return null;
    }
  }

  private static HashMap<String, String> splitAuthFields(String authString) {
    final HashMap<String, String> fields = Maps.newHashMap();
    final CharMatcher trimmer = CharMatcher.anyOf("\"\t ");
    final Splitter commas = Splitter.on(',').trimResults().omitEmptyStrings();
    final Splitter equals = Splitter.on('=').trimResults(trimmer).limit(2);
    String[] valuePair;
    for (String keyPair : commas.split(authString)) {
      valuePair = Iterables.toArray(equals.split(keyPair), String.class);
      if (valuePair.length > 1) {
        fields.put(valuePair[0], valuePair[1]);
      } else {
        fields.put(valuePair[0], "");
      }
    }
    return fields;
  }

  private static final String HEX_LOOKUP = "0123456789abcdef";

  private static String bytesToHexString(byte[] bytes) {
    StringBuilder sb = new StringBuilder(bytes.length * 2);
    for (int i = 0; i < bytes.length; i++) {
      sb.append(HEX_LOOKUP.charAt((bytes[i] & 0xF0) >> 4));
      sb.append(HEX_LOOKUP.charAt((bytes[i] & 0x0F) >> 0));
    }
    return sb.toString();
  }

  public static class AuthenticationException extends IOException {

    private static final long serialVersionUID = 1L;

    public AuthenticationException() {
      super("Problems authenticating");
    }
  }
}
