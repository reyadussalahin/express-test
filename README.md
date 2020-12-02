[![Stars](https://img.shields.io/github/stars/reyadussalahin/express-test?style=flat-square)](https://github.com/reyadussalahin/express-test/stargazers)
[![Forks](https://img.shields.io/github/forks/reyadussalahin/express-test?style=flat-square&color=purple)](https://github.com/reyadussalahin/express-test/network/members)
[![Issues](https://img.shields.io/github/issues/reyadussalahin/express-test?style=flat-square&color=blue)](https://github.com/reyadussalahin/express-test/issues)
[![License](https://img.shields.io/github/license/reyadussalahin/express-test?color=teal&style=flat-square)](https://github.com/reyadussalahin/express-test/blob/master/LICENSE)

# express-test
An awesome web app. This app attempts to show how to create super dumb(but pretty awesome) web application build on top of node.js using express.js web framework with handlebars templating and mysql database. So, grab a coffe and let's begin.


## Getting started

#### Cloning repo
Clone this repo using `git clone`:
```bash
# clone repo using
$ git clone https://github.com/reyadussalahin/express-test.git
# then go to project root directory using
$ cd express-test
```
#### Install dependendies
And then, install dependencies:
```bash
$ npm install
```

#### Configure database
Run mysql server. Create a database `express_test` and a table `person` with columns `name` and `age`. Insert a value where `name = your name` and `age = 23`(`age` value `23` is important, cause it is hardcoded into `app.js`).  
  
Now, copy `config/db.example.json` to `config/db.json` and edit the fields with proper values.

#### Running server
Now, run the server:
```bash
$ node app.js
```

#### Check app
Open your browser and write in the url bar `127.0.0.1:8000`, then hit `Enter`. A web page will show two lines of writings as below:  
```
This is an awesome app
This app is created by <your-name>
```
You just created an awesome web application using nodejs with the help of expressjs.
<!-- ![An awesome web app](screenshots/app.png) -->

## Next steps
To learn more about creating web application read about [nodejs](https://nodejs.org/en/), [expressjs](https://expressjs.com/) and [handlebars templating](https://github.com/express-handlebars/express-handlebars). I am assuming you already have sufficient knowledge about `HTML` and `CSS`. If not, then just visit [mozilla developers network(mdn)](https://developer.mozilla.org/en-US/) to learn them before starting this project.


## LICENSE
This project is published under [MIT LICENSE](LICENSE)


## Contribution
Any type of contribution is welcome.