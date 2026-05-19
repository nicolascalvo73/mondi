#!/bin/bash
set -e

echo "[build] Node version: $(node --version)"
echo "[build] npm version: $(npm --version)"

# Build mondilabs and embed at /labs
MONDILABS_REPO="https://github.com/nicolascalvo73/mondilabs.git"
if [ -n "$GITHUB_TOKEN" ]; then
  MONDILABS_REPO="https://$GITHUB_TOKEN@github.com/nicolascalvo73/mondilabs.git"
fi

echo "[build] Cloning mondilabs..."
git clone --depth 1 "$MONDILABS_REPO" _mondilabs_temp

echo "[build] Installing mondilabs dependencies..."
cd _mondilabs_temp
npm install --legacy-peer-deps

echo "[build] Building mondilabs..."
npm run build
cd ..

echo "[build] Copying mondilabs dist to public/labs/..."
rm -rf public/labs
mkdir -p public/labs
cp -r _mondilabs_temp/dist/. public/labs/
rm -rf _mondilabs_temp

echo "[build] Building Next.js..."
npm run build

echo "[build] Done."
