# Monkees Concerts
 
## Overview
 ### What is this website for?
This website is to try and encourage people to go and see concerts performed by the Monkees
 ### How does it work?
It has details about the band, best singles and albums, and a list of concerts, then you type in your details and book your concert.

## Features
 ### Existing Features
This website has a few songs you can listen to, images of the band.
Biography
List of grratest singles
List of upcoming gigs
Contaact and Booking form
 
## Tech Used
 ### Some the tech used includes:
- [Notepad plus](https://notepad-plus-plus.org)
    - We use **Notepad plus** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
## Contribution
 ### Getting the code up and running
1.Clone this repository by running the ```git clone <Monkees.html>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
