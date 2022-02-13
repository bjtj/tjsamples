package kr.tjapp.httpauthtest;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import kr.tjapp.httpauthtest.HttpAuth.AuthenticationException;
import kr.tjapp.httpauthtest.databinding.FragmentFirstBinding;

public class FirstFragment extends Fragment {

  private static final String TAG = "FirstFragment";
  private FragmentFirstBinding binding;

  @Override
  public View onCreateView(
      LayoutInflater inflater, ViewGroup container,
      Bundle savedInstanceState
  ) {

    startTest();

    binding = FragmentFirstBinding.inflate(inflater, container, false);
    return binding.getRoot();

  }

  void startTest() {
    new Thread(new Runnable() {
      @Override
      public void run() {
        try {
          testSimpleRequest("http://example.com", null, null, null);
          Map<String, String> fields = new HashMap<>();
          fields.put("accept", "application/json");
          testSimpleRequest("http://httpbin.org/basic-auth/user/pass", "user", "pass", fields);
          testSimpleRequest("http://httpbin.org/digest-auth/digest/user/pass", "user", "pass",
              fields);
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }).start();
  }

  public void testSimpleRequest(String url, String username, String password,
      Map<String, String> fields) throws IOException {

    HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();

    if (fields != null) {
      for (String key : fields.keySet()) {
        conn.addRequestProperty(key, fields.get(key));
      }
    }

    Log.d(TAG, "response code: " + conn.getResponseCode());

    if (conn.getResponseCode() == HttpURLConnection.HTTP_UNAUTHORIZED) {
      if (username == null || password == null) {
        throw new AuthenticationException();
      }
      conn = new HttpAuth().tryAuth(conn, username, password);
      Log.d(TAG, "auth response code: " + conn.getResponseCode());
    }

    InputStream in = conn.getInputStream();
    BufferedInputStream stream = new BufferedInputStream(in);
    StringBuffer sb = new StringBuffer();
    int c = 0;
    while ((c = stream.read()) > 0) {
      sb.append((char) c);
    }

    Log.d(TAG, "body: " + sb.toString());
  }


  public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);

    binding.buttonFirst.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View view) {
        NavHostFragment.findNavController(FirstFragment.this)
            .navigate(R.id.action_FirstFragment_to_SecondFragment);
      }
    });
  }

  @Override
  public void onDestroyView() {
    super.onDestroyView();
    binding = null;
  }

}
