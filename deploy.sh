#!/bin/bash

rm -rf ./dist
mkdir dist

NODE_ENV=production webpack -p

cp index.html ./dist/index.html
cp CNAME ./dist/CNAME

git add -f dist && git commit -m 'new build'
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages