# Monkees Concerts
 
## Overview
 ### What is this website for?
This website is to encourage people to go and see concerts performed by the Monkees
 ### How does it work?
It has details about the band, their best singles and albums, and a list of their upcoming concerts, then you type in your details in the Contact and Booking Form, you can book your concert by clicking Submit.
You can also listen to some of your favourite songs by going to the Discography page, then in the singles chart, you can click play to listen to the song. There is also chat box feature so you can talk to other Monkees fans.

## Features
 ### Existing Features
This website has a some of The Monkees' greatest singles which you can listen to simply by clicking on the play button in the cell next to song name in the Discography page, there are also images of the band, different members and their upcoming concerts.

The Biography page tells you information about the 4 different members of the group and their picture

The Discography page lets you view the bands greatest singles and albums, and listen to their songs by clicking the play button.

The list of upcoming gigs page tells you when their are future concerts available, where they are, the cost and how you can book.

The Contact and Booking Form page is the form to book your tickes after you have chosen your concert by looking at the Monkees_Upcoming_gigs.

There is also a chat box feature in the bottom of the homepage so you can chat to other monkees fans, and maybe arrange to see a concert together.
 
## Tech Used
 ### Some the tech used includes:
- [Sublime Text](https://www.sublimetext.com)
    - We use **Sublime Text** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [davenevins.com](http://davenevins.com/fttp/mp3/misc/monkees) 
    - I have used the website above to copy the link to the address to create the song clips in the Discography page. 
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
 
## Contribution
 ### Getting the code up and running
1.Clone this repository by running the ```git clone <https://github.com/Jonnoramo/website-for-band>``` command
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
