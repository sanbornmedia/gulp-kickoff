# Gulp Kickoff

### About
Gulp kickoff is a minimal gulpfile and set of packages to get you started using gulp to manage your Sass and JS assets. The kickoff uses [Common JS](http://requirejs.org/docs/commonjs.html) instead of [Webpack](https://webpack.github.io/) but should be easy to modify if you'd preffer Webpack.

### System setup
Assuming you're on Mac, you should only need to install Node. To test if you already have it installed, go to the command line and enter `node -v`. If you get "command not found" or simmilar error, you need to install it. Go to the [Node download page](https://nodejs.org/en/download/) and download the Mac installer, run it and you should be set.

### Project setup
Download this repo, put it someplace that can server the `index.html` file, run `npm install` then run `gulp`. All you Sass and JS assets should now be continuously watched and recompiled whenever you make changes. Look at the example files in `/js` and `/sass`. Everything should be pretty straightforward. Assets get compiled to `/script.js` and `/style.css`.

If you load the `index.html` file, you should see this:

![Example](https://monosnap.com/file/SGOHf5XzB5HIRQVgbVjDxrs6pDmRCK.png)