/*
 *
 *     add-server.c: server program, receives message,
 *                   adds numbers in message and 
 *                   gives back result to client
 *
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <unistd.h>
#include <ctype.h>
#include <dbus/dbus.h>

const char *const INTERFACE_NAME = "in.softprayog.dbus_example";
const char *const SERVER_BUS_NAME = "in.softprayog.add_server";
const char *const OBJECT_PATH_NAME = "/in/softprayog/adder";
const char *const METHOD_NAME = "add_numbers";

DBusError dbus_error;
void print_dbus_error (char *str);
bool isinteger (char *ptr);

int main (int argc, char **argv)
{
    DBusConnection *conn;
    int ret;

    dbus_error_init (&dbus_error);

    conn = dbus_bus_get (DBUS_BUS_SESSION, &dbus_error);

    if (dbus_error_is_set (&dbus_error))
        print_dbus_error ("dbus_bus_get");

    if (!conn) 
        exit (1);

    // Get a well known name
    ret = dbus_bus_request_name (conn, SERVER_BUS_NAME, DBUS_NAME_FLAG_DO_NOT_QUEUE, &dbus_error);

    if (dbus_error_is_set (&dbus_error))
        print_dbus_error ("dbus_bus_get");

    if (ret != DBUS_REQUEST_NAME_REPLY_PRIMARY_OWNER) {
        fprintf (stderr, "Dbus: not primary owner, ret = %d\n", ret);
        exit (1);
    }

    // Handle request from clients
    while (1) {
        // Block for msg from client
        if (!dbus_connection_read_write_dispatch (conn, -1)) {
            fprintf (stderr, "Not connected now.\n");
            exit (1);
        }
     
        DBusMessage *message;

        if ((message = dbus_connection_pop_message (conn)) == NULL) {
            fprintf (stderr, "Did not get message\n");
            continue;
        } 
        
        if (dbus_message_is_method_call (message, INTERFACE_NAME, METHOD_NAME)) {
            char *s;
            char *str1 = NULL, *str2 = NULL;
            const char space [4] = " \n\t";
            long i, j;
            bool error = false;

            if (dbus_message_get_args (message, &dbus_error, DBUS_TYPE_STRING, &s, DBUS_TYPE_INVALID)) {
                printf ("%s", s);
                // Validate received message
                str1 = strtok (s, space);
                if (str1)
                    str2 = strtok (NULL, space);
 
                if (!str1 || !str2)
                    error = true; 
            
                if (!error) {
                    if (isinteger (str1))
                        i = atol (str1);
                    else
                        error = true;
                }
                if (!error) {
                    if (isinteger (str2))
                        j = atol (str2);
                    else
                        error = true;
                }

                if (!error) {
                    // send reply
                    DBusMessage *reply;
                    char answer [40];

                    sprintf (answer, "Sum is %ld", i + j);
                    if ((reply = dbus_message_new_method_return (message)) == NULL) {
                        fprintf (stderr, "Error in dbus_message_new_method_return\n");
                        exit (1);
                    }
    
                    DBusMessageIter iter;
                    dbus_message_iter_init_append (reply, &iter);
                    char *ptr = answer;
                    if (!dbus_message_iter_append_basic (&iter, DBUS_TYPE_STRING, &ptr)) {
                        fprintf (stderr, "Error in dbus_message_iter_append_basic\n");
                        exit (1);
                    }

                    if (!dbus_connection_send (conn, reply, NULL)) {
                        fprintf (stderr, "Error in dbus_connection_send\n");
                        exit (1);
                    }

                    dbus_connection_flush (conn);
                
                    dbus_message_unref (reply);	
                }
                else // There was an error
                {
                    DBusMessage *dbus_error_msg;
                    char error_msg [] = "Error in input";
                    if ((dbus_error_msg = dbus_message_new_error (message, DBUS_ERROR_FAILED, error_msg)) == NULL) {
			fprintf (stderr, "Error in dbus_message_new_error\n");
			exit (1);
                    }

                    if (!dbus_connection_send (conn, dbus_error_msg, NULL)) {
                        fprintf (stderr, "Error in dbus_connection_send\n");
                        exit (1);
                    }

                    dbus_connection_flush (conn);
                
                    dbus_message_unref (dbus_error_msg);	
                }
            }
            else
            {
                print_dbus_error ("Error getting message");
            }
        }
    }

    return 0;
}


bool isinteger (char *ptr)
{

    if (*ptr == '+' || *ptr == '-')
        ptr++;

    while (*ptr) {
        if (!isdigit ((int) *ptr++))
            return false;
    }
    
    return true;
}

void print_dbus_error (char *str) 
{
    fprintf (stderr, "%s: %s\n", str, dbus_error.message);
    dbus_error_free (&dbus_error);
}
