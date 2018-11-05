#include <gtk/gtk.h>

void close_application(GtkWidget * widget, gpointer data)
{
    gtk_main_quit();
}

enum
{
    TITLE_COLUMN,
    AUTHOR_COLUMN,
    CHECKED_COLUMN,
    N_COLUMNS,
};

static void tree_selection_changed_cb(GtkTreeSelection * selection, gpointer data)
{
    GtkTreeIter iter;
    GtkTreeModel * model;
    gchar * author;

    if (gtk_tree_selection_get_selected(selection, &model, &iter)) {
	gtk_tree_model_get(model, &iter, AUTHOR_COLUMN, &author, -1);
	g_print("You selected a book by %s\n", author);
	g_free(author);
    }
}


int main(int argc, char *argv[])
{
    GtkWidget * window;
    GtkTreeStore * store;
    GtkWidget * tree;
    GtkTextBuffer * buffer;
    GtkTreeIter iter;
    GtkTreeIter iter1;
    GtkTreeIter iter2;
    GtkCellRenderer * renderer;
    GtkTreeViewColumn * column;
    GtkTreeSelection * select;

    gtk_init(&argc, &argv);
    window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_widget_set_usize(window, 600, 500);
    gtk_window_set_policy(GTK_WINDOW(window), TRUE, TRUE, FALSE);
    gtk_signal_connect(GTK_OBJECT(window), "destroy",
		       GTK_SIGNAL_FUNC(close_application), NULL);
    gtk_window_set_title(GTK_WINDOW(window), "Tree and List widget");

    /* view = gtk_text_view_new(); */
    /* buffer = gtk_text_view_get_buffer(GTK_TEXT_VIEW(view)); */
    /* gtk_text_buffer_set_text(buffer, "hello, this is some text", -1); */
    /* gtk_container_add(GTK_CONTAINER(window), view); */
    /* gtk_widget_show(view); */

    store = gtk_tree_store_new(N_COLUMNS,
			       G_TYPE_STRING,
			       G_TYPE_STRING,
			       G_TYPE_BOOLEAN);
    
    gtk_tree_store_append(store, &iter, NULL);
    gtk_tree_store_set(store, &iter,
		       TITLE_COLUMN, "The Principle of Reason",
		       AUTHOR_COLUMN, "martin Heidegger",
		       CHECKED_COLUMN, FALSE,
		       -1);
    gtk_tree_store_append(store, &iter1, NULL);
    gtk_tree_store_set(store, &iter1,
		       TITLE_COLUMN, "The Art of Computer Programming",
		       AUTHOR_COLUMN, "Donald E. Knuth",
		       CHECKED_COLUMN, FALSE,
		       -1);
    gtk_tree_store_append(store, &iter2, &iter1);
    gtk_tree_store_set(store, &iter2,
		       TITLE_COLUMN, "Volume 1: Fundamental Algorithms",
		       -1);
    gtk_tree_store_append(store, &iter2, &iter1);
    gtk_tree_store_set(store, &iter2,
		       TITLE_COLUMN, "Volume 2: Seminumerical Algorithms",
		       -1);
    gtk_tree_store_append(store, &iter2, &iter1);
    gtk_tree_store_set(store, &iter2,
		       TITLE_COLUMN, "Volume 3: Sorting and Searching",
		       -1);
    
    tree = gtk_tree_view_new_with_model(GTK_TREE_MODEL(store));
    g_object_unref(G_OBJECT(store));
    
    renderer = gtk_cell_renderer_text_new();
    g_object_set(G_OBJECT(renderer), "foreground", "red", NULL);
    column = gtk_tree_view_column_new_with_attributes("Author", renderer,
						      "text", AUTHOR_COLUMN,
						      NULL);
    gtk_tree_view_append_column(GTK_TREE_VIEW(tree), column);
    renderer = gtk_cell_renderer_text_new();
    column = gtk_tree_view_column_new_with_attributes("Title",
						      renderer,
						      "text", TITLE_COLUMN,
						      NULL);
    gtk_tree_view_append_column(GTK_TREE_VIEW(tree), column);
    select = gtk_tree_view_get_selection(GTK_TREE_VIEW(tree));
    gtk_tree_selection_set_mode(select, GTK_SELECTION_SINGLE);
    g_signal_connect(G_OBJECT(select), "changed", G_CALLBACK(tree_selection_changed_cb), NULL);
    
    gtk_container_add(GTK_CONTAINER(window), tree);
    gtk_widget_show(tree);

    gtk_widget_show(window);

    gtk_main();
    return 0;
}
