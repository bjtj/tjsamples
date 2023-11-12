# libxml2
$url="http://xmlsoft.org/sources/win32/libxml2-2.7.8.win32.zip"
$filename=[System.IO.Path]::GetFileName("$url")
Invoke-WebRequest -Uri $url -OutFile $filename
Expand-Archive $filename -DestinationPath .
copy libxml2-2.7.8.win32/bin/libxml2.dll .

# iconv
$iconv_url="https://github.com/bjtj/libiconv-for-Windows/releases/download/1.17/libiconv-1.17-Release-win32.zip"
$iconv_filename=[System.IO.Path]::GetFileName("$iconv_url")
Invoke-WebRequest -Uri $iconv_url -OutFile $iconv_filename
Expand-Archive $iconv_filename -DestinationPath iconv
copy iconv/Release-win32/lib/libiconv.dll iconv.dll


# zlib
$zlib_url="https://jaist.dl.sourceforge.net/project/gnuwin32/zlib/1.2.3/zlib-1.2.3-bin.zip"
$zlib_filename=[System.IO.Path]::GetFileName("$zlib_url")
Invoke-WebRequest -Uri $zlib_url -OutFile $zlib_filename
Expand-Archive $zlib_filename -DestinationPath zlib
copy zlib/bin/zlib1.dll .
