# ngUpgradeSeed
This is a seed repo for upgrading from angular 1 to 2+, It combines angular-cli and angular-seed.

- https://github.com/angular/angular-cli
- https://github.com/angular/angular-seed

## Notes:
- please note the hack that was added for angularJS templateUrl rewriting. It's a hack because it has to be placed before any
components but after the routing dependency.

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
