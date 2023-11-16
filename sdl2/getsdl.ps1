$URL = "https://github.com/libsdl-org/SDL/releases/download/release-2.28.5/SDL2-devel-2.28.5-VC.zip"
curl -Uri "$URL" -OutFile "SDL2-devel-2.28.5-VC.zip"
Expand-Archive "SDL2-devel-2.28.5-VC.zip" -DestinationPath .
copy "SDL2-2.28.5/lib/x64/SDl2.dll" .
