#!/usr/bin/perl -w

# https://www.perlmonks.org/bare/?node_id=227822

use strict;
use threads;
use IO::Socket::INET;


$| ++;

my $port = 5000;

my $listener = IO::Socket::INET->new(LocalPort => $port,
									 Listen => 5,
									 Reuse => 1) ||
	die "Cannot create socket\n";

my $client;
my $client_num = 0;
print "use telnet localhost $port\n";
while (1) {
    $client = $listener->accept;
	threads->create(\&start_thread, $client, ++ $client_num);
}

sub start_thread {
    my ($client, $client_num) = @_;
	print "thread created for client '" . fileno($client) . "'\n";
	while (1) {
		my $req;
		$client->recv($req, 700000);
		last if ($req eq "");
		print $client $req;
	}
	print "bye '" . fileno($client) . "'\n";
	return;
}
