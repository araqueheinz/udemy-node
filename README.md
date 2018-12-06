# The Complete Node.js Developer Course

## NOTES
 - nodemon server.js -e js,hbs --> -e stands for extensions. By doing this nodemon will keep an eye to all the files with the extension js and hbs.
 - fs.appendFile('file name', data to store + '\n') --> \n means next line.
 - npm install example --save-dev --> dev means it will only be required on the dev environment not production.
 - * nodemon --exec 'npm test' --> --exec 'npm test' this flag tells nodemon that we are going to specify a command to run. 

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

## Section 4 

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
    * Promises are available in JavaScript since ES6, although they have been around in third party libraries.
    Promises aim to solve most of the problems you might get when having a lot o asynchronous code in your 
    program. 
    * https://www.npmjs.com/package/axios

## Section 5

### Web Servers and Application Deployment
We are going to make our own NodeJs server. We will be able to create our own API, we will also be able to set up a static website. We are going to use a library called **Express**.

1. Setting up Express
    * https://expressjs.com

2. Template Engines with Data --> handlebarsjs
    * https://handlebarsjs.com/
    * https://www.npmjs.com/package/hbs

3. Using express 
    * https://expressjs.com/en/4x/api.html#req
    * https://expressjs.com/en/4x/api.html#res

4. Working with git
    * https://git-scm.com/
    * https://git-scm.com/book/en/v2

5. Setting up GitHub & SSH Keys
    * https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac

6. Deploy app
    * https://dashboard.heroku.com/apps
    * https://devcenter.heroku.com/articles/heroku-cli
    * L-47 & L-48

## Section 6

### Testing Your App
Testing your app is an important process in programing. It is fundamental and good practice to test your code and make sure that the program, fetch functions, utils functions and so on, are working the way we expect them to work. For example when we create a simple add function in our program we want to make sure that the function is adding the numbers the way we want them to be added. 

1. Popular testing framework
    * https://mochajs.org/

2. Automatic way to for testing using nodemon
    * nodemon --exec 'npm test' 
    * Custom script in package.json: "test-watch": "nodemon --exec \"npm test\""

3. Using Assertion Library
    * https://github.com/mjackson/expect

4. Testing an Express App
    * npm i express --save
    * https://github.com/visionmedia/supertest
    * npm i supertest --save-dev

5. Test Spies
    * Spies: https://github.com/mjackson/expect
    * npm i rewire --save-dev


## Section 7

### MongoDB Mongoose Robomongo


1. Installing MongoDB and Robomongo
    * https://www.mongodb.com/download-center/community
    * mongo command: is going to let us connect to the server and run some commands.
    * ./mongod --dbpath ~/mongo-data --> ./mongod means run a command located in the current folder. This command is going to start a server in the given path "~/mongo-data". ~ --> means user directory example: user/mongo-data folder.
    * mongod command: is going to start the mongo server. 
    * https://robomongo.org

2. Connecting to Mongo and Writing data
    * https://github.com/mongodb/node-mongodb-native
    * http://mongodb.github.io/node-mongodb-native/

3. CRUD in mongodb, { MongoClient, ObjectID }
    * https://docs.mongodb.com/manual/reference/method/
    * https://docs.mongodb.com/manual/reference/operator/update/

4. CRUD using Mongoose
    * https://mongoosejs.com
    * https://mongoosejs.com/docs/validation.html
    * https://mongoosejs.com/docs/guide.html

5. Installing Postman 
    * https://www.getpostman.com/