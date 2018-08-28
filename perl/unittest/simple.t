use diagnostics;		# this gives you more debugging information
use warnings;			# this wans you of bad practices
use strict;			# this prevents silly errors
use Test::More qw(no_plan);	# for the is() and isnt() functions

my $class = 'bioinformatics';
is($class, 'bioinformatics', 'We are in bioinformatics!');
isnt($class, 'microbiology', 'We are not in microbiology!');
is($class, 'microbiology', 'This test case should fail...see why?');
