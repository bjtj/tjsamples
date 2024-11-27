(ns buddy-sample.buddy-sample
  (:require [buddy.core.codecs :as codecs]
            [buddy.core.codecs.base64 :as base64]
            [buddy.core.crypto :as crypto]
            [buddy.core.keys :as keys]
            [buddy.core.nonce :as nonce]
            [buddy.core.hash :as hash])
  (:gen-class))

;; Key
(def secret-key (hash/sha256 "mysecret1234"))

;; Generate a random initialization vector (IV)
(def iv (nonce/random-bytes 16))

;; Encrypt data
(defn encrypt [plaintext]
  (let [plaintext-bytes (codecs/to-bytes plaintext)]
    (crypto/encrypt plaintext-bytes secret-key iv)))

;; Decrypt data
(defn decrypt [ciphertext]
  (let [decrypted-bytes (crypto/decrypt ciphertext secret-key iv)]
    (codecs/bytes->str decrypted-bytes "UTF-8")))

(defn -main
  [& args]
  (let [plaintext "Hello, world!"
        encrypted (encrypt plaintext)
        decrypted (decrypt encrypted)]
    (prn :secret-key (codecs/bytes->hex secret-key))
    (prn :original plaintext)
    (prn :encrypted (codecs/bytes->hex encrypted))
    (prn :decrypted decrypted)))
