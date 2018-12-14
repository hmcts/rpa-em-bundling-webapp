# Evidence Management Viewer Web
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/hmcts/rpa-em-bundling-webapp.svg?branch=master)](https://travis-ci.org/hmcts/rpa-em-bundling-webapp) 
[![codecov](https://codecov.io/gh/hmcts/rpa-em-bundling-webapp/branch/master/graph/badge.svg)](https://codecov.io/gh/hmcts/rpa-em-bundling-webapp) 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8931f0f4be494ecc9ff88d11b367d21e)](https://www.codacy.com/app/HMCTS/rpa-em-bundling-webapp) 
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/8931f0f4be494ecc9ff88d11b367d21e)](https://www.codacy.com/app/HMCTS/rpa-em-bundling-webapp) 
[![Known Vulnerabilities](https://snyk.io/test/github/hmcts/rpa-em-bundling-webapp/badge.svg)](https://snyk.io/test/github/hmcts/rpa-em-bundling-webapp) 
[![npm version](https://badge.fury.io/js/rpa-em-bundling-webapp.svg)](https://www.npmjs.com/package/rpa-em-bundling-webapp)

This project is a viewer front end component for the Document Management service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

To develop locally...

* `./buildrun-docker-dependencies.sh` to spin up dependencies in Docker.
* Run `./bin/idam/idam.sh` to get a service token from
* Add the service token to the `app.js` file.
* `yarn install`
* `ng build --watch`
* `node app.js` 
