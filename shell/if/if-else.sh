#!/usr/bin/env bash

FLAG=1

if [ $FLAG == "1" ]
then echo "flag is 1"
else echo "flag is not 1"
fi

YES=true

if [ $YES == true ]
then echo "YES"
else echo "NO"
fi

if [ $YES == false ]
then echo "NO"
else echo "YES"
fi

if [ $YES = true ]
then echo "YES"
else echo "NO"
fi

if [ $YES = false ]
then echo "NO"
else echo "YES"
fi

NO=true

if [ $NO == true ]
then echo "NO"
else echo "YES"
fi

if [ $NO == false ]
then echo "YES"
else echo "NO"
fi

if [ $NO = true ]
then echo "NO"
else echo "YES"
fi

if [ $NO = false ]
then echo "YES"
else echo "NO"
fi
