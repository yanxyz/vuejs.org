#!/usr/bin/env node

const fs = require('fs')

const src = './public'
const dest = './public2'
const site = 'http://vuejs.org'

mkdirSync(dest)
modify({
  src: `${src}/index.html`,
  relative: './',
  dest: `${dest}/index.html`
})

;['api', 'examples', 'guide'].map(sub)

function modify (page) {
  const content = fs.readFileSync(page.src, 'utf8')
    .replace(/href="\/blog/g, 'href="http://vuejs.org/blog')
    .replace(/="\/(images|css|js)/g, `="${site}/$1`)
    .replace(/href="\//g, `href="${page.relative}`)
    .replace('src="todomvc/index.html"', `src="${site}/examples/todomvc/index.html"`)

  fs.writeFileSync(page.dest, content, 'utf8')
}

function sub (item) {
  const dir = src + '/' + item
  const toDir = dest + '/' + item

  fs.readdirSync(dir)
    .map(x => {
      mkdirSync(toDir)

      return {
        src: dir + '/' + x,
        relative: '../',
        dest: toDir + '/' + x
      }
    })
    .map(modify)
}

function mkdirSync (dir) {
  try {
    fs.mkdirSync(dir)
  } catch (err) {}
}
