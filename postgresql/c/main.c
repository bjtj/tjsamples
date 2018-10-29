#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <libpq-fe.h>

int main(int argc, char *argv[])
{

    const char * conninfo;

    if (argc > 1)
    {
	conninfo = argv[1];
    }
    else
    {
	conninfo = "dbname = postgres";
    }

    PGconn * conn = PQconnectdb(conninfo);
    if (PQstatus(conn) != CONNECTION_OK)
    {
	fprintf(stderr, "connection to database failed: %s\n", PQerrorMessage(conn));
	PQfinish(conn);
	return 1;
    }

    printf("connection succeeded -- bye\n");
    PQfinish(conn);
    return 0;
}
