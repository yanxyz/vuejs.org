# vuejs.org

Transform the links in the pages of site [vuejs.org](https://vuejs.org)
to make it could be placed under subdirectory.

```bash
# get the site, here is https://cn.vuejs.org
git clone -b gh-pages --depth=1 git@github.com:vuejs/cn.vuejs.org.git public

# transform
rm -rf ./public2
node build.js

# push to gh-pages branch
sh ./release.sh
```

## License

MIT (c) Ivan Yan
