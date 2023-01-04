#!/bin/bash
cdir=$(pwd)
cd ..
wdir=/root/alx-backend-javascript/0x04-TypeScript
if [ ! "$1" ]
then
	echo "too short"
	exit 0
fi

cp -r task_2 "$wdir"
cd "$wdir"
git add *
git commit -m "$1"
git push
cd "$cdir"
