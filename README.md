# Linker

Simple and modern link shortener for PirateNet.

## Dev tips

#### Launch a development server

```
npm run dev
```

This will start a [nodemon](https://github.com/remy/nodemon) server that will watch your working dir for changes and then restart the express application if you make any change in your code.


#### Run style check

```
npm run stylecheck
```

This will call the locally installed [standard](https://github.com/standard/standard)'s cli to check for style errors in your code.


#### Fix style errors

```
npm run stylefix
```

This will call the locally installed [standard](https://github.com/standard/standard)'s cli with a `--fix` flag to automatically fix most of errors.