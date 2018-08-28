use diagnostics;
use strict;
use warnings;

sub complement {
    my $str = shift;
    $str =~ tr/Tt/Uu/;
    return $str;
}
