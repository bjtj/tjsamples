$current_driectory = "$pwd.path"
Write-Output $current_directory
docker run -ti --rm -v "${current_directory}:/opt/project" -w /opt/project node bash
