# Introduction

You think all those "First Angular component" examples are oversimplified? You are looking for a real-ish Angular2 demo with components everywhere? Check this Angular2 Shop POC developed using RC1 version.

It's actually a rewrite of the already refactored [jQuery to AngularJS Shop Kata](https://github.com/ngMorocco/meetup-1-kata-Comment-manger-des-spaghetti-jQuery-avec-les-baguettes-magiques-Angular) exercised during the 1st [ngMorocco](http://ngmorocco.org/) Meetup. 

# Installation

```bash
cd Angular2ShopApp
npm install
npm start
```

# Project Structure

    .
    ├── ...
    ├── app                    
    │   ├── main.ts          
    │   ├── app.ts        
    │   ├── pages
    │   │    ├── HomePage.ts
    │   │    ├── ProductDetailPage.ts
    │   │    └── ComingSoonPage.ts
    │   ├── containers               
    │   │    ├── NavBarContainer.ts
    │   │    ├── SideBarContainer.ts
    │   │    ├── ProductsContainer.ts
    │   │    └── ...
    │   ├── components               
    │   │    ├── logo
    │   │    ├── navbar-menu
    │   │    │      ├── navbar-menu.html
    │   │    │      └── NavbarMenu.ts
    │   │    ├── sidebar-menu
    │   │    ├── product-carousel
    │   │    ├── product-search
    │   │    ├── product-grid
    │   │    └── ...
    │   ├── services 
    │   │    └── ...
    │   └─── models 
    │        └── ...
    └── index.html
    
* `main` - Bootstrap Root App Component into browser
* `app` - Provide global services, configure the router, define the global grid layout with the `<router-outlet>`...
* `pages` - Route Sub-Components, helps organize stuff inside a single page
* `containers` - Related Components holders, deals with shared data and child components interaction
* `components` - Only Presentational components, mainly renders the HTML and Listens/Emit Events

# Testing

npm test related scripts:

* `npm test` - compiles, runs and watches the karma unit tests
* `npm run webdriver:update` - ONE TIME update for protractor end-to-end (e2e) tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)



![](http://i.imgur.com/vGZFMJr.png)



![](http://i.imgur.com/k6tft8O.png)