
/*
 * https://developer.gnome.org/gnome-devel-demos/stable/image-viewer.c.html.en
 * https://developer.gnome.org/glib/stable/glib-I18N.html
 * */

#include <locale.h>
#include <gtk/gtk.h>
#include <glib/gi18n.h>
#define GETTEXT_PACKAGE "gtk20"
#include <glib/gi18n-lib.h>

#define DATADIR "./"


static void
on_open_image (GtkButton* button, gpointer user_data)
{
    GtkWidget *image = GTK_WIDGET (user_data);
    GtkWidget *toplevel = gtk_widget_get_toplevel (image);
    GtkFileFilter *filter = gtk_file_filter_new ();
    GtkWidget *dialog = gtk_file_chooser_dialog_new (_("Open image"),
						     GTK_WINDOW (toplevel),
						     GTK_FILE_CHOOSER_ACTION_OPEN,
						     GTK_STOCK_OK, GTK_RESPONSE_ACCEPT,
						     GTK_STOCK_CANCEL, GTK_RESPONSE_CANCEL,
						     NULL);

    gtk_file_filter_add_pixbuf_formats (filter);
    gtk_file_chooser_add_filter (GTK_FILE_CHOOSER (dialog),
				 filter);

    switch (gtk_dialog_run (GTK_DIALOG (dialog)))
    {
    case GTK_RESPONSE_ACCEPT:
    {
	gchar *filename =
	    gtk_file_chooser_get_filename (GTK_FILE_CHOOSER (dialog));
	gtk_image_set_from_file (GTK_IMAGE (image), filename);
	break;
    }
    default:
	break;
    }
    gtk_widget_destroy (dialog);
}


static GtkWidget*
create_window (void)
{
    GtkWidget *window;
    GtkWidget *button;
    GtkWidget *image;
    GtkWidget *box;

    /* Set up the UI */
    window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title (GTK_WINDOW (window), "image-viewer-c");

    box = gtk_box_new (GTK_ORIENTATION_VERTICAL, 5);
    button = gtk_button_new_with_label (_("Open image"));
    image = gtk_image_new ();

    gtk_box_pack_start (GTK_BOX (box), image, TRUE, TRUE, 0);
    gtk_box_pack_start (GTK_BOX (box), button, FALSE, FALSE, 0);

    gtk_container_add (GTK_CONTAINER (window), box);

    /* Connect signals */

    /* Show open dialog when opening a file */
    g_signal_connect (button, "clicked", G_CALLBACK (on_open_image), image);

    /* Exit when the window is closed */
    g_signal_connect (window, "destroy", G_CALLBACK (gtk_main_quit), NULL);

    return window;
}



int main(int argc, char *argv[])
{
    GtkWidget * window;

    setlocale (LC_ALL, "");
    bindtextdomain (GETTEXT_PACKAGE, DATADIR "/locale");
    bind_textdomain_codeset (GETTEXT_PACKAGE, "UTF-8");
    textdomain (GETTEXT_PACKAGE);
    
    gtk_init(&argc, &argv);
    window = create_window();
    gtk_widget_show_all(window);
    gtk_main();
    return 0;
}
