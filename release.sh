#/bin/sh

# https://github.com/philipwalton/solved-by-flexbox/blob/master/gulpfile.js#L234

src="public2"
dest="_tmp"

# checkout gh-pages branch in the dest
rm -rf $dest
mkdir $dest
cd $dest
git init
git remote add origin git@github.com:yanxyz/cn.vuejs.org
git pull origin gh-pages

# remove all files and copy new files from the src
rm -rf ./*
cp -r $src $dest
git add -A

# commit and push
git commit -m "Site updated"
git branch -m gh-pages
git push origin gh-pages

# clean up
cd ..
rm -rf $dest
