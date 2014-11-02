amazoptions
===========

[![Travis build status](https://travis-ci.org/nathanleiby/amazoptions.svg?branch=master)](https://travis-ci.org/nathanleiby/amazoptions)

Has Amazon ever told you that pants cost somewhere between $0.70 and $47.32? And you've had to click through all the options to figure out what the hell is going on? (And then realize it's only the orange colored skorts version sold by a 3rd party seller without Prime shipping?). This extension is for you.

Amazoptions lets you price compare without clicking through all the options by hand.

## Installation

You can't get this in the Chrome app store... yet.

## Development

Let's get started building...

### Overview

There are two components:

1. a node app that does fetching and parsing of Amazon pages. (`src/getpage.js`)
2. a Chrome extension which wraps the above, executes it on Amazon pages, and provides UI. (`src/inject.js`)

The intent is for most development can be done in (1) without need to care about it being a Chrome extension.

### Install Dependencies

```
npm install
```

### Run Tests

```
npm test
```

### Add the Chrome Extension (in "Developer mode")

1. To add this as a Chrome extension, type `chrome://extensions` in Chrome search bar.
2. Enable "Developer mode".
3. Click "Load unpacked extension" and select the base directory of this repo (`amazoptions`).

You should now see the icon for Amazoptions in the menu bar.

### Todos

Node app

- [ ] given a product code, fetch a real product page from Amazon. jquery... `$.get`
- [ ] paginate through real pages to find all options. use `isLastPage` and then increment page index in URL until last page
- [ ] test cases against live Amazon product pages, to verify when their HTML changes and Amazoptions breaks

Chrome extension

- [ ] using chrome extension get current URL, parse out the amazon product code. Read chrome app documentation.
- [ ] make sure chrome extension only active on Amazon product pages. This is via app's `manifest.json`
- [ ] include node code - approx: browserify it and copy-paste into `src/inject.js`
- [ ] come up with automated build system; how to easily join node app + Chrome ext via scripts
  - make the build happen in Travis, so i know it's werkin
  - ideas: http://viget.com/extend/gulp-browserify-starter-faq ,  https://github.com/substack/browserify-handbook ,

Other

- [ ] Autoformat and lint files. http://wonko.com/post/simple-makefile-to-minify-css-and-js


## Acknowledgements

Created with the awesome [extensionizr](http://extensionizr.com).
