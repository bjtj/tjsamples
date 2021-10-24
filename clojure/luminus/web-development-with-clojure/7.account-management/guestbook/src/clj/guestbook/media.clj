(ns guestbook.media
  (:require
   [guestbook.db.core :as db]
   [clojure.java.io :as io]
   [clojure.tools.logging :as log])
  (:import
   [java.awt.image AffineTransformOp BufferedImage]
   [java.io ByteArrayOutputStream]
   java.awt.geom.AffineTransform
   javax.imageio.ImageIO))

(defn insert-image-returning-name
  ""
  [{:keys [tempfile filename]}
   {:keys [width height
           max-width max-height
           owner]}]
  (let [baos (ByteArrayOutputStream.)
        img (ImageIO/read tempfile)
        img-width (.getWidth img)
        img-height (.getHeight img)
        ratio (cond
                (and (some? height) (some? width))
                (min (/ width img-width) (/ height img-height))
                (some? height)
                (/ height img-height)
                (some? width)
                (/ width img-width)
                (and (some? max-height) (some? max-width))
                (min 1 (/ img-width max-width) (/ img-height max-height))
                (some? max-height)
                (min 1 (/ img-height max-height))
                (some? max-width)
                (min 1 (/ img-width max-width))
                :else
                1)
        img-scaled (if (= 1 ratio)
                     img
                     (let [scale
                           (AffineTransform/getScaleInstance
                            (double ratio) (double ratio))
                           transform-op
                           (AffineTransformOp.
                            scale AffineTransformOp/TYPE_BILINEAR)]
                       (.filter transform-op
                                img
                                (BufferedImage. (* ratio img-width)
                                                (* ratio img-height)
                                                (.getType img)))))]
    (ImageIO/write img-scaled "png" baos)
    (if (= 0
           (db/save-file! {:name filename
                           :data (.toByteArray baos)
                           :owner owner
                           :type "image/png"}))
      (do
        (log/error "Attempted to overwrite an image that you don't own!")
        (throw (ex-info "Attempted to overwrite an image that you don't own!"
                        {:name filename})))
      filename)))
