# Echoes Player ~(EMC)
Echoes is a great youtube player developed by [Oren Farhi](http://orizens.com).
It's fun & easy to listen or watch videos from youtube with Echoes.
What if youtube was designed to be used as music player?

This a repo for an angular workshop.

## Developer Notes

to run and build the project, please install:
* nodejs
* gruntjs
* bower.io

on shell, run:
```shell
npm install
bower install
```
### Development mode
To run the project, please use:
```shell
grunt serve
```

### Grunt Build
to create a build for production, run
```shell
grunt build
```
to create a build for production and publish on gh-pages branch, run:
```shell
grunt buildgit
```
this will create a build on a .tmp directory, checkout gh-pages and copy the build to it.
next steps to publish to gh-pages are:
* add & commit changes and new additions
* push the branch to remote (github currently)