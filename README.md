# [Test UI kit v1 BETA](https://www.npmjs.com/package/Test_ui_kit)

```
npm install Test_ui_kit --save
```

The UI Kit that powers Test's internal projects built on ReactJS, Sass and Antdesign.

### [Visit the documentation](https://uikit.Testapp.com/)

### Standards and Guidelines
https://github.com/Test/Test_ReactStarterKit/wiki/Css-Style-Guide

# Usage

We are using sass, simply import the `scss` file.

```
// compiled
@import "..path/node_modules/Test_ui_kit/css/main.scss"

//variables
@import "..path/Test_ui_kit/css/utils/variables"

//helpers
@import "..path/Test_ui_kit/css/utils/helpers"
```

or  css

```
import "Test_ui_kit/css/main.css"
```
# Development

To run develop ui kit

```
 npm start / yarn start
```

To run docx

```
npm run build
npm run docx
```

To build script:

```
 npm run build // for deployment in prod
 npm run build:style // build css
 npm run build:lib  // build lib
```

Special thanks to our inspirations:

* [Ant design](https://ant.design/)
* [Rico Sta. Cruz](http://rscss.io/)
* [maintainablecss](https://maintainablecss.com/chapters/)

**_Test_ui_kit_** should never be used outside of officially endorsed Test products or without explicit permission.
