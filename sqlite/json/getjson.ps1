$url="http://api.worldbank.org/countries?format=json&per_page=100"
Invoke-WebRequest -Uri "$url" -OutFile "countries.json"
