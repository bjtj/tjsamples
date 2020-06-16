#!/usr/bin/env perl

use strict;
use warnings;
use Gtk3 -init;
use List::Util qw(min); # We'll need this later.

my $file = 'image.png';

my $window = Gtk3::Window->new('toplevel');
$window->set_title('Image scaling');
$window->set_default_size(400, 400);
$window->signal_connect('delete-event' => sub { Gtk3::main_quit });

my $grid = Gtk3::Grid->new();
$window->add($grid);

my $scrolled = Gtk3::ScrolledWindow->new();
$scrolled->set_hexpand(1);
$scrolled->set_vexpand(1);
$grid->attach($scrolled, 1, 1, 1, 1);

my $image = Gtk3::Image->new();
$scrolled->add_with_viewport($image);

my $button = Gtk3::Button->new('Load image');
$button->signal_connect('clicked' => \&on_button_clicked);
$grid->attach($button, 1, 2, 1, 1);

$window->show_all();
Gtk3::main();


sub on_button_clicked {
    $image->set_from_pixbuf(load_image($file, $scrolled));
}

sub load_image {
    my ($file, $parent) = @_;
    my $pixbuf = Gtk3::Gdk::Pixbuf->new_from_file($file);
    my $scaled = scale_pixbuf($pixbuf, $parent);
    return $scaled;
}

sub scale_pixbuf {
    my ($pixbuf, $parent) = @_;
    my $max_w = $parent->get_allocation()->{width};
    my $max_h = $parent->get_allocation()->{height};
    my $pixb_w = $pixbuf->get_width();
    my $pixb_h = $pixbuf->get_height();
    if (($pixb_w > $max_w) || ($pixb_h > $max_h)) {
        my $sc_factor_w = $max_w / $pixb_w;
        my $sc_factor_h = $max_h / $pixb_h;
        my $sc_factor = min $sc_factor_w, $sc_factor_h;
        my $sc_w = int($pixb_w * $sc_factor);
        my $sc_h = int($pixb_h * $sc_factor);
        my $scaled
            = $pixbuf->scale_simple($sc_w, $sc_h, 'GDK_INTERP_HYPER');
        return $scaled;
    }
    return $pixbuf;
}
