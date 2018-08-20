#!/usr/bin/env perl

use strict;

print "@ARGV\n";

for (my $i = 0; $i < @ARGV; $i++) {
    print "$ARGV[$i]\n";
}

foreach my $item (@ARGV) {
	print "$item\n"
}

