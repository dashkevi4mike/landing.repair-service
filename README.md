# repair-landing
This project uses Starter Kit for PSD-to-HTML projects with Webpack and SCSS

## Features
We use Pug and Stylus to create static layout page for our clients who desires qualified "PSD to HTML" work. 
### File structure
```
conf
```
Contains all webpack configs, they are imported in the webpack.config.js from the root directory

#### `src`
```
src
|  entry.js
└─── pages
└─── components
└─── theme
```
`entry.js` is a main file that import every `.js` file in the `src` directory. So when you create new `.js` file it will be automatically added to the bundle.

`pages` is a folder with all possible pages of the project.

`components` is a folder with all possible components shared between all pages.

#### `components`
`components` has the following structure:
```
components
└─── button
| |  button.pug
| |  button.js
| |  button.scss
| └─── img
| | |  img.png
```
* `components` contains only directories per component. 
* Each component contains main `.pug` file with the template, `.js` that is dynamically loaded in the `entry.js` and contains all scripts for the component (and only the component) and `.scss` file.
* `.scss` should be imported in the `.js` and contains **one BEM block** in the root of the files and all possible elements and modificators inside this block's definition.

## How to work

#### Install node 7.10.1
```commandline
n 7.10.1
```

#### Install dependencies
```commandline
npm install
```

#### Start dev server
```commandline
npm run dev
```

Visit http://localhost:3000/ to see all possible pages of the project, click any page and start working.

#### On the production server create the bundle files
```commandline
npm run build
```
