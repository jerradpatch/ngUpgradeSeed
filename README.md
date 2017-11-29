# ngUpgradeSeed
This is a seed repo for upgrading from angular 1 to 2+, It combines angular-cli and angular-seed.

- https://github.com/angular/angular-cli
- https://github.com/angular/angular-seed

## Notes:
- please note the hack that was added for angularJS templateUrl rewriting. 

https://github.com/jerradpatch/ngUpgradeSeed/blob/master/src/angularJSApp/app/providers/rewriteTemplateUrlsHack.js

It's a hack because it has to be placed before any components but after the routing dependency.

In order to use this update the BASEPATH var to 'base/path/to/app.js'. In the default case its 'angularJSApp/app/'.

### Angular cli needs to be installed globally
npm install -g @angular/cli

# README for Angular-cli follows

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Building Docker dev image
1) install docker CE
2) setup docker DNS to gov dns
-- run "sudo nano /etc/docker/daemon.json"
-- add this:
```json
{
"dns": ["148.129.129.22", "148.129.75.22"]
}
```
3) from code directory execute
```bash
sudo docker build -t dev-env .
```
-- if debugging is needed: login to the running container 
  sudo docker exec -it dev-env /bin/bash
