#!/usr/bin/env perl

# https://stackoverflow.com/a/37548360
# e.g.
# ./getopts.pl --ip=127.0.0.1
# ./getopts.pl -i=127.0.0.1

use strict;

use Getopt::Long;

my $ip;
my $port;
my $foreground = 0;
my $stdout = 1;
my $debug;

GetOptions(
	"ip=s" => \$ip,
	"port=i" => \$port,
	"fg" => \$foreground,
	"stdout" => \$stdout,
	"debug=s" => \$debug,
	);

print "ip = '$ip'\n";
print "port = '$port'\n";
print "foreground = '$foreground'\n";
print "stdout = '$stdout'\n";
print "debug = '$debug'\n";
