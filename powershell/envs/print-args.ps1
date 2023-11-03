$args.length
$args.count

$args

for ( $i = 0; $i -lt $args.count; $i++) {
    Write-Host "Argument $i is $($args[$i])"
}

