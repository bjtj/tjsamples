Write-Output ENVIRONMENTS
Write-Output --------------------------------------------------
Write-Output "AWS ACCESS KEY ID: $AWS_ACCESS_KEY_ID"
Write-Output "AWS SECRET ACCESS KEY: $AWS_SECRET_ACCESS_KEY"
Write-Output "AWS DEFAULT REGION: $AWS_DEFAULT_REGION"

terraform init

terraform fmt

terraform validate

terraform apply

terraform show

terraform destroy
