#!/bin/bash
set -e

# Build mondilabs and embed at /labs
MONDILABS_REPO="https://github.com/nicolascalvo73/mondilabs.git"
if [ -n "$GITHUB_TOKEN" ]; then
  MONDILABS_REPO="https://$GITHUB_TOKEN@github.com/nicolascalvo73/mondilabs.git"
fi

git clone --depth 1 "$MONDILABS_REPO" _mondilabs_temp
cd _mondilabs_temp
npm install
npm run build
cd ..

rm -rf public/labs
mkdir -p public/labs
cp -r _mondilabs_temp/dist/. public/labs/
rm -rf _mondilabs_temp

npm run build
