// Node.js quick file server (static files over HTTP)
// ----
// https://stackoverflow.com/a/29046869/5676460

var http = require("http");
var fs = require("fs");
var path = require("path");

function static(basePath = './') {
  return (req, res) => {

    var filePath = path.join(basePath, req.url);

    if (req.url == "/") {
        filePath = path.join(basePath, "./index.html");
    }

    var extname = path.extname(filePath);
    var contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
      case ".wav":
        contentType = "audio/wav";
        break;
    }

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile(path.join(basePath, "404.html"), function (error, content) {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
          });
        } else {
          res.writeHead(500);
          res.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
          res.end();
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  };
}


module.exports = {
    static
}