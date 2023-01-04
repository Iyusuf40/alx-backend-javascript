#!/bin/bash
cdir=$(pwd)
cd ..
wdir=/root/alx-backend-javascript/0x04-TypeScript
if [ ! "$2" ]
then
	echo "too short"
	exit 0
fi

cp -r "$1" "$wdir"
cd "$wdir"
git add *
git commit -m "$2"
git push
cd "$cdir"
