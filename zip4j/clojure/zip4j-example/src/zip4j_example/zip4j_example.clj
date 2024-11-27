(ns zip4j-example.zip4j-example
  (:import (net.lingala.zip4j ZipFile)
           (net.lingala.zip4j.model ZipParameters)
           (net.lingala.zip4j.model.enums EncryptionMethod))
  (:gen-class))

;; https://javadoc.io/doc/net.lingala.zip4j/zip4j/latest/net/lingala/zip4j/model/enums/EncryptionMethod.html
;; ====
;; - AES: Encrypted with AES, the strongest choice but currently cannot be expanded in Windows Explorer
;; - NONE: No encryption is performed
;; - ZIP_STANDARD: Encrypted with the weak ZIP standard algorithm
;; - ZIP_STANDARD_VARIANT_STRONG: Encrypted with the stronger ZIP standard algorithm

(defn create-protected-zip
  "Creates a password-protected zip archive."
  [file-to-zip zip-output-file password enc-method]
  (let [zip-file (ZipFile. zip-output-file)
        params (doto (ZipParameters.)
                 (.setEncryptFiles true)
                 (.setEncryptionMethod enc-method))]
    (.setPassword zip-file (char-array password))
    (.addFile zip-file (java.io.File. file-to-zip) params)))

(defn extract-protected-zip
  "Extracts a password-protected ZIP file."
  [zip-file-path output-dir password enc-method]
  (let [zip-file (ZipFile. zip-file-path)]
    (if (.isEncrypted zip-file)
        (do
          (.setPassword zip-file (char-array password))
          (.extractAll zip-file output-dir)
          (prn :zip-file-extracted output-dir))
        (do
          (prn :zip-file-is-not-password-protected)
          (.extractAll zip-file output-dir)))))

(defn -main
  [& args]
  (let [file-to-zip "original.txt"
        zip-output-file "output.zip"
        ;; enc-method EncryptionMethod/AES
        enc-method EncryptionMethod/ZIP_STANDARD
        ;; enc-method EncryptionMethod/ZIP_STANDARD_VARIANT_STRONG
        ;; enc-method EncryptionMethod/NONE
        password "mypassword"
        output-dir "extracted"]
    (prn :enc-method enc-method)
    (create-protected-zip file-to-zip zip-output-file password enc-method)
    (extract-protected-zip zip-output-file output-dir password enc-method)
    (prn :success!)))
