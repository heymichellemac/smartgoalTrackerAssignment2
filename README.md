## Assignment 2 - AngularJS App witn Mongo DB
======
**Name:** Michelle McCausland
**Student Number:** 20046556

------

###Overview
As part of my college assignment I have created a smart goal tracker application to keep track of smart goals. SMART Goals refer to projects or goals which are specific, measurable, achievable, relevant and time sensitive. The application contains the ability to create and track these smart goals by individual users.

This application is connected to a mongodb database in order to manage the application data relating to users and to smart goals.

Users can create, edit or delete smart goals as well as look at their own user information and update it accordingly.

------

###Features
+ Create, update and delete smart goals which are specific to a user
+ Search feature built in to allow you to search for smart goals and for users
+ bootstrap accordion for display of smart goals
+ Mongo DB back end to hold application data
+ Custom directives including navbar directive

------

###Installation Requirements
+ angular
+ mongodb
+ mongoose
+ express

To get this project working simply download the project, ensure you have all of above installed on your machine then run:

```javascript
npm install
```

In order to run the project navigate to the root of the project on the command line and type the following:


```javascript
node app.js
```

In your web browser navigate to localhost:4000 and you can start using the application!

------

###Data Model Design
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/appDesign.PNG "Data Model Design")
------

###App Design
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/dataModelDesign.PNG "App Design")

------

###UI Design

![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/homepage.PNG "Home Screen")
------
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/about.PNG "About Screen")
------
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/users.PNG "Users Screen")
------
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/userdetails.PNG "User Details Screen")
------
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/smartgoals.PNG "Smartgoals Screen")
------
![alt text](https://github.com/mishacreatrix/smartgoalTrackerAssignment2/blob/master/projectfiles/addsmartgoal.PNG "Add Smart Goal Screen")


------

###Routing

+ /home - This is the home page that you will be shown when using this application
+ /users - Displays a list of users and allows the addition of new users
+ /users/id - This displays a list of users where you can update and delete user information
+ /smartgoals - This displays a list of smart goals relating to the selected user where you can search, update and delete smart goal information
+ /addsmartgoal- This page facilitates the addition of new smart goals
+ /about - This page contains information about this web app

------

###API Routing


GET  '/'  shows all users
GET  '/:id'  Shows a specific user
POST  '/'  Creates a new user
POST  '/:id/smartgoals'  Adds a new smartgoal

------

###Extra features
+ Bootstrap grid system built in for responsiveness

###Independant Learning
+ Learning how to utilize mongodb mongoose and express to create a backend api to interact with the front end of the web app - Implementing CRUD methodologies with the web app proved a challenging experience
+ Learning how to utilize the bootstrap responsive grid system in order to create a responsive UI - Having worked with bootstrap and foundation frameworks before this was a good addition to my knowledge
