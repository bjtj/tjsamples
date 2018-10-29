#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <locale.h>
#include <string.h>
#include <sys/time.h>

int main(int argc, char *argv[])
{

    char buffer[1024] = {0,};
    time_t ltime;
    struct tm * timeptr;
    char * old_locale;
    char * saved_locale;
    const char * date_fmt = "%Y-%m-%d %H:%M:%S %Z [%x %X (%p)]";

    /* time() */
    ltime = time(NULL);

	printf("Time: %lu\n", ltime);

    /*
     * ctime()
     * * https://www.ibm.com/support/knowledgecenter/ko/ssw_ibm_i_73/rtref/ctime.htm
     *
     * ctime always returns date in English
     * * https://stackoverflow.com/a/33118886
     * */
    printf("Time: %s", ctime(&ltime));


    /*
     * strftime()
     * * https://www.ibm.com/support/knowledgecenter/ko/ssw_ibm_i_73/rtref/strfti.htm
     * */
    timeptr = localtime(&ltime);
    strftime(buffer, sizeof(buffer), date_fmt, timeptr);
    printf("Time: %s\n", buffer);


    /*
     * setlocale()
     * * https://www.gnu.org/software/libc/manual/html_node/Setting-the-Locale.html
     * */
    old_locale = setlocale(LC_ALL, NULL);
    saved_locale = strdup(old_locale);
    if (setlocale(LC_ALL, "ko_KR.UTF8") == NULL) {
	fprintf(stderr, "Unable to set locale\n");
    }

    strftime(buffer, sizeof(buffer), date_fmt, timeptr);
    printf("Time: %s\n", buffer);

    setlocale(LC_ALL, saved_locale);
    free(saved_locale);


    {
	char buffer[50] = {0,};
	struct timeval tv;
	time_t curtime;

	gettimeofday(&tv, NULL);
	curtime = tv.tv_sec;
	strftime(buffer, sizeof(buffer), "%Y-%m-%d %T", localtime(&curtime));
	printf("%s %ld\n", buffer, tv.tv_usec);
    }
    
    return 0;
}
