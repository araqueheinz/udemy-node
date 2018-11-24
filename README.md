# The Complete Node.js Developer Course

## Section 2

### Setup
Node is a JavaScript runtime built on Chrome's V8 JavaScript engine. V8 JavaScript engine is an open source JavaScript engine written in c++ that takes in the JavaScript code and compiles it to machine language.

## Section 3 

### Node fundamentals

1. All the modules that come built into node.
    * https://nodejs.org/api/

2. Read and Write from the file system module.
    * https://nodejs.org/api/fs.html
    * https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback

3. OS Module.
    * https://nodejs.org/api/os.html
    * https://nodejs.org/api/os.html#os_os_userinfo_options

4. Third parties nmp modules examples.
    * https://www.npmjs.com/package/lodash
    * https://lodash.com
    * https://www.npmjs.com/package/nodemon
    * https://github.com/yargs/yargs

5. Debugging broken apps.

    * node inspect app.js
    * Command: debug> list(NUMBER of lines above and below)
    * Command: debug> n --> next statement 
    * Command: debug> c --> continues until your program completes
    * Command: debug> repl --> read evaluate print loop  
    * Inside the anyFile.js: debugger;
    * Can use nodemon inspect app.js 
    * Using Chrome dev tools: node --inspect-brk app.js
    * In Chrome: chrome//inspect --> open dedicated DevTools for Node
    * Can also run using: nodemon --inspect-brk app.js
    
6. ES6 features.
    * Arrow Functions

7. "Require" explained
    * Require is a function available to you inside of any of your nodejs file. 

## Section 3 

### Asynchronous Node.js
This are the four terms used repeatedly when learning and describing Node.js: **Asynchronous**, **NonBlocking**, **Event Based**, and **Single Threaded**. Async means that the app will continue to run while it waits for something else to happen. We use asynchronous code to fetch data from different sources. Terms to learn and memorize: **Call stack**, **Node APIs**, **Callback Queue** and **Event loop**.

1. Using request module
    * https://www.npmjs.com/package/request

2. Latitude and Longitude APIs
    * https://developers.google.com/maps/documentation/geocoding/start
    * https://developer.mapquest.com/documentation/geocoding-api/address/get/

3. Weather API using Lat and Lng
    * https://darksky.net/dev

4. Intro to ES6 Promises
    Promises are available in JavaScript since ES6, although they have been around in third party libraries.
    Promises aim to solve most of the problems you might get when having a lot o asynchronous code in your 
    program. 