#!/bin/bash
i=0
while true; do
    printf "#"
    printf $i
    printf ": "
    curl -H "Content-Type: application/json" -X POST -d '{"url":"https://sharppaste.nl/uD0LSAV7qB7aUj6EFf5cdGI_XhytJcKf2yHaUKmcozO4#MTIwYThkMWY1MTNhYWNiYWI2ZDZhZDc5MjMxNDliOGM4YmFhMzdiZjdlMjhkNDY5MDAyMTZjN2FmMzA4YzU4Yg=="}' http://localhost:3000/shorten
    printf "\n"
    let "i++"
done
