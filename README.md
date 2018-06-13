# Angular 2 Authentication for Front End Masters Using JWT


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


--------------------------

## Implementing Authentication Challenges

* Complete the `onLoginSubmit` and `onSignupSubmit` methods to make `POST` requests (sending the user's credentials) to the `api/users/authenticate` and `api/users` endpoints respectively
* Provide a method in `auth.service.js` which saves the returned JWT in local storage
* Create a `logout` method which removes the user's JWT from local storage
* Provide buttons for **Log In** and **Log Out** in the home view and the toolbar


Step 1:
+ Create a screen for login and signup
+ Make a POST request with the user’s credentials
+ Store the JWT that comes back in local storage
+ Create a logout method which removes the token from local storage
+ Provide buttons for Log In and Log Out in the home view and the toolbar 

Step 2:
+ Create an `isAuthenticated` method in the `AuthService` which checks whether the user's JWT has expired (Hint: use angular2-jwt for this)
+ Conditionally hide and show the **Log In** and **Log Out** links based on whether the user's JWT is expired


Step 3:
+ Use the payload from the JWT to generate a user profile
+ Display the user's gravatar, username, and email, along with the full JWT payload in the **Profile** view




