#/bin/sh

src="f:/Code/Github/vuejs/cn.vuejs.org/"
dest=`pwd`

cd $src
hexo clean
hexo generate

cd $dest
rm -rf ./public
cp -rf "$src/public" ./
node build.js
