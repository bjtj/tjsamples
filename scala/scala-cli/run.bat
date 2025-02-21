@echo off

IF "%1"=="" (
  scala-cli hello.sc
) ELSE (
  scala-cli hello.sc -- %*
)
