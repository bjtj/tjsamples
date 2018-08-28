use diagnostics;
use warnings;
use strict;
use Test::More qw(no_plan);

do 'complement.pl';

is(complement('ACT'), 'ACU', 'Works for single replacement');
is(complement('ACGTATTA'), 'ACGUAUUA', 'Works for multiple replacement');
is(complement('act'), 'acu', 'Is case-insensitive');
