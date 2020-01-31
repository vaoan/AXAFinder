# Basic knowledge about this repository

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Uses [Antd](https://ant.design/) as it's main theme and component library. Edits Webpack configurations using different loaders and libraries but mainly it takes advantage of [Customize-cra](https://github.com/arackaf/customize-cra) to include the theme mentionated before and also load Web Workers [worker-loader](https://github.com/webpack-contrib/worker-loader) optimizing dramatically the browser reaction over the extense process the filters always suggests

## Requirements not met
Image cache was not included in this repository, mostly because time limitations but also because I'm not familiar with the technology. I'm highly willing to learn it.

## Features
This web app has a few features that our heroes might enjoy.
- Login:
Privacy is very important and having credentials would make sure the users can have their information secured. As this App doesn't really have a backend, any credentials work as is just a "mock" system ready to be connected when the endpoints get created. 
** Don't worry about credentials. Anything works. It's just a test ***
- Testing requests
As this App won't have a back end to support it, this web site features faked requests. It's a wrote up number where a 5% of the calls will fail. It's a good way to check the behaviour of failing requests as this is always important to be considered and probably one of the most forgotten funcionalities to test
- Routing
A simple to configure routing system based on hierarchy. End user won't notice much about this but a developer can decide on using different levels of Auth on every path of its router making very easy to read and understand every page
- Country selector and filtering
Using the data provided by the test, the user can use different options to filter their information. Selecting the country/town/zone first and after that, the user is allowed to type names to filter in a -like- type as is also case insensitive. It can also filter by profession. Combining the filtering option it will create an exclusive type of filter where if it's empty is ignored but if it has items, it must pass every filter added.
- Friends system
Filtering is a very useful option. A person who is looking to network in an unknown town might be interested in also meeting friends of people they get to know. By clicking the name of a friend in a member's card, the name of this friend will be instantly added to the user name filter and the App will look for any member with that name (Since more than one person could have that name)
- Web worker
To keep a consistent filter with the user's inputs, it was added a new stack to work over those filters withou any impact over the site.
- Menu
A very simple menu to navigate the site. The user can do Logout from there.

# How to run the site?

It needs:
* [Node](https://nodejs.org/) The version used for it was 12.14.1. 
* This site uses enviroment variables to set some especial features like the site's name. They are not required
    - REACT_APP_SITE_NAME
    - HOST_SITE_ENDPOINTS

## Available Scripts

In the project directory, you can run:

### `npm install`

Download all dependencies and gets the project ready to be run

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Test assessment

Our team here at AXA is playing a fantasy role-playing game and every time the heroes they play arrive at a town, they have the issue they don't know the local population and what they can do to help them on their adventures.

This is one of these times, our heroes just arrived at a Gnome town called Brastlewark. To facilitate trade with the local population they need an easy way to browse all the inhabitants details. We've found a server providing all the census data of Brastlewark at the following address:

https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json

Gnomes in this town are not really social because they have too much work to do. That's the reason they can have more than one job and might have few or even no friends at all. They also appreciate their privacy so they've used some random images from internet, not specifically optimized for mobile devices, for their profile. (They are very modern in some aspects and they have smartphones and access to internet for instance).

Please write an Android / iOS application to help our team browse and be able to see the details of those inhabitants.

Specifications:

- Retrieve data from the URL provided
- Show this data in the most user-friendly way you could think. Keep in mind our heroes will be quite busy dealing with Orcs, so apps have to be really simple and easy to use. At least would be good to quickly browse (and even filter) all the individuals and be able to see the details of each one.
- Document all libraries used and explain the reason you’ve used that library.

Bonus:

- Be creative!
- UI must not blocked by network connections or long operations
- Images coming from network cached to improve performance
- Error handling
- Avoid using third party libraries for basic functionality (we want to see you know the basics!)
- Use third party libraries for extended functionality
- Snappiness & responsiveness over sluggishness & idleness
- Determine gender of gnomes (just joking on this one but feel free to make your guess)
