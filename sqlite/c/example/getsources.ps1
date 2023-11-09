if (Test-Path .\sqlite3\) {
    Write-Host "[ERR] Source folder exists..."
    exit 1
}
$url = "https://www.sqlite.org/2023/sqlite-amalgamation-3440000.zip"
Invoke-WebRequest -Uri "$url" -OutFile "sqlite3.zip"
Expand-Archive sqlite3.zip
$innerdir = (Get-ChildItem .\sqlite3\)[0].Fullname
Move-Item (Get-ChildItem (Get-ChildItem .\sqlite3\)[0]) .\sqlite3\
Remove-Item $innerdir
Remove-Item sqlite3.zip
