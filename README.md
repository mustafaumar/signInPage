# React Sign-In Project
# Overview
This is a simple React project that demonstrates how to validate email and password inputs for sign-in functionality. The project has a simple login form where users can input their email and password, and the form will validate the input before submission.
# Prerequisites
#### Before starting, you should have the following software installed on your machine:
- Node.js
- npm 
# Getting Started
#### To get started, clone this repository to your local machine and install the dependencies using the following commands:
- `git clone https://github.com/mustafaumar/signInPage.git` (Using HTTPS)
-  `git clone git@github.com:mustafaumar/signInPage.git` (Using SSH)
- `cd signInPage`
- `npm install` (Install node modules)
# Validation
#### How it works
The validation for the email and password inputs is done using array methods. The regular expression for email validation checks if the input has the '@' in the email format. The  password validation checks if the input is at least 6 characters long.

# Using the "Sign in with Google"
### Using Google OAuth to Authenticate Users

This application uses the Google Sign-In API and a client ID to allow users to sign in with their Google accounts. To enable this functionality, we created a Google API Console project and generated a client ID that we use to authenticate users and retrieve their information.

To sign in with their Google accounts, users are prompted to click the "Sign in with Google" button on our login page. Once they do so, the Google Sign-In API is initialized and the user is prompted to grant permission for our application to access their Google account information.

If the user grants permission,the name of the user is outputted throught an alert.

To use the Google Sign-In API and client ID in your own application, see the [Google Sign-In documentation](https://developers.google.com/identity/sign-in/web/sign-in).```

# Running the Application
#### To run the application, use the following command:
- `npm start`
#### This will start the development server and open the application in your default browser. You can now enter an email and password in the login form, and the form will validate the inputs before submission.
