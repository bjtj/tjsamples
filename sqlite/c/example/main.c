#if defined(__APPLE__) || defined(__MACH__) || defined(unix) || defined(__unix__) || defined(__unix)
#  include <unistd.h>
#endif

#include <sqlite3.h>
#include <stdio.h>
#include <stdlib.h>

static int callback(void *, int , char **, char **);

int main(int argc, char *argv[])
{
  sqlite3 * db;
  char * zErrMsg = 0;
  int ret;
  
  if (SQLITE_OK != sqlite3_open(":memory:", &db)) {
    fprintf(stderr, "cannot open database %s\n", sqlite3_errmsg(db));
    sqlite3_close(db);
    exit(1);
  }

  ret = sqlite3_exec(db, "select 1", callback, 0, &zErrMsg);
  if (ret != SQLITE_OK) {
    fprintf(stderr, "SQL error: %s\n", zErrMsg);
    sqlite3_free(zErrMsg);
  }

  sqlite3_close(db);
  
  return 0;
}


static int callback(void * NotUsed, int argc, char ** argv, char ** azColName){
  int i;
  for(i = 0; i < argc; i++){
    printf("%s = %s\n", azColName[i], argv[i] ? argv[i] : "NULL");
  }
  printf("\n");
  return 0;
}
