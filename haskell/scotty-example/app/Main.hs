{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty

main :: IO ()
main = scotty 3000 $
  get "/:word" $ do
    word <- pathParam "word"
    html $ mconcat ["<h1>", word, " World!</h1>"]
