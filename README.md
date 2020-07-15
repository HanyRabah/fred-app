# Table of contents
* [General info](#general-info)
* [Development decisions](#development-decisions)
* [Folder Structure](#folder-structure)
* [Demo](#demo)
* [Used Stack](#used-stack)
* [Task Requirements](#task-requirements)
* [Setup](#setup)
* [Future Enhancement](#future-enhancement)


# General Info 

Visualizing series to 3 charts by getting data from <b>FRED Economic Data</b>

[Chart 1] Line Area chart from <b>T10Y2Y</b> Series
[Chart 2] Bar Chart for the last 20 years from <b>GDPCA</b> Series
[Chart 3] Line chart by subtracting <b>DGS10</b> from <b>T10YIE</b>


# Development decisions

<b>Why next.js</b>
I used next.js as it come with SSR and it is good for SEO, also loaded with all the setup preparation like babel, webpack, etc.
it might be overkill in such small project but it very easy to init a project and start working

<b>Why Highcharts</b>
Highchart one of the most amazing chart libraries it has a lot of options and it is really easy to implement and has a good UX and interactivity to the user.

I decided to manipulate the data in one place which is dataSerivce.js and keep the component clean as possible also dataService chacing the request data for better performance and dereasing the api requests as requesting the api data every time is bad for performance and the user.

I created server api to proxy the hit of Fred api to bypass some issue while changing the page so hit happen from the server not from the client side.


 

# Folder Structure 

```
├── actions                 # it has all the api requests action ( getSeries, getObservations             
├── components              # Shared component
│   ├── Chart.js            # main component which load diff charts depending on the data
│   ├── SideMenu.js         # side menu links and routes
├── pages
│   ├── api                 # creating the api as a proxy to bypass some CORS issues 
│   ├── _app.js             # wrap all the pages here so they can have the same look
│   └── index.js            # Home page
│   └── areaChart.js        # page for area chart to load chart, sideMenu component
│   └── barChart.js         # page for bar chart to load chart, sideMenu component
│   └── lineChart.js        # page for line chart to load chart, sideMenu component
├── public                  # all static content ( images, icons, ...etc )
├── sercvice                # data service which manipulate and structure all the data
├── styles                  # All styling needed for the app
├── utils                   # only one function to convert date to timestamp
└── README.md
```

# Demo
https://fred-charts.vercel.app/


# Used Stack
  - Next.js
  - React.js
  - ES6
  - Sass ( css preprocessor )
  - npm


# Task Requirements

-   [x] Line Area chart for <b>T10Y2Y</b>
-   [x] Bar Chart for <b>GDPCA</b>
-   [x] Line chart <b>DGS10</b> minus <b>T10YIE</b>
-   [x] React

# Setup

install dependencies:

```sh
npm install // yarn 
```

build app

```sh
npm run build // yarn build
```

Run built 

```sh
npm start // yarn start
```

Run localy

to run localy you need to create `.env.local` file first and add two variables 
```
API_KEY=your_api_key 
BASE_URL=http://localhost:3000 // keep in mind the port might change
```

```sh
npm run dev // yarn dev
```


# Future Enhancement

- Prefetch data for better loading while browsing the site 
- Data service algorithm enhancment for faster data processing
- Using Css @import is not the best approach, because it adds to the time that it takes to load css before page can load.
- Using Typescript 
- Writing unit tests and e2e tests

Thanks.
