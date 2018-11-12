#!/usr/bin/perl

my $val = $ENV{'PATH'};

print $val . "\n";

$val = $ENV{'PORT'};

print "PORT: " . $val . "\n";

# e.g.)
# $ PORT=100 perl main.pl
# PORT: 100
