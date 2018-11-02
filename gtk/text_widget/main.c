#include <unistd.h>
#include <gtk/gtk.h>

void close_application(GtkWidget * widget, gpointer data)
{
    gtk_main_quit();
}

int main(int argc, char *argv[])
{
    GtkWidget * window;
    GtkWidget * view;
    GtkTextBuffer * buffer;

    gtk_init(&argc, &argv);
    window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_widget_set_usize(window, 600, 500);
    gtk_window_set_policy(GTK_WINDOW(window), TRUE, TRUE, FALSE);
    gtk_signal_connect(GTK_OBJECT(window), "destroy",
		       GTK_SIGNAL_FUNC(close_application), NULL);
    gtk_window_set_title(GTK_WINDOW(window), "Text widget example");

    view = gtk_text_view_new();
    buffer = gtk_text_view_get_buffer(GTK_TEXT_VIEW(view));
    gtk_text_buffer_set_text(buffer, "hello, this is some text", -1);
    gtk_container_add(GTK_CONTAINER(window), view);
    gtk_widget_show(view);

    gtk_widget_show(window);

    gtk_main();
    return 0;
}
