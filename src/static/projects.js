const projects = [
  {
    name: "Pick'em",
    description: "Interactive game and match schedule check application where baseball fans to choose a game winning team for certain matches and check results. Application built using basic html/css with thrid party baseball API linked.",
    image: process.env.PUBLIC_URL + '/images/portfolio/pickem.png',
    url: "https://richardyjkim.github.io/Pick-em/",
    github: "https://github.com/richardyjkim/Pick-em"
  },
  {
    name: "Mind Setter",
    description: "Interactive multi-user social media application where users post, comment, like, delete their thoughts. Application integrated with Mysql as a Database. Deployed with Heroku, using JawsDB to hold Data from Mysql.",
    image: process.env.PUBLIC_URL + '/images/portfolio/mindsetter.png',
    url: "https://enigmatic-bayou-14711.herokuapp.com/",
    github:"https://github.com/richardyjkim/mind-setter"
  },
  {
    name: "Book Search Engine",
    description: "Interactive book search engine where yours can search what kind of book they want to search for and also multi user accessible which they can save their books. React, Apollo-server, GraphQL used. Deployed through Heroku",
    image: process.env.PUBLIC_URL + '/images/portfolio/booksearch.png',
    url: "http://nameless-mesa-79274.herokuapp.com/",
    github:"https://github.com/richardyjkim/book-seach-engine"
  },
  {
    name: "Furever Home",
    description: "Interactive dog-adoption application using React and Apollo-server, and GraphQL, MongoDB for Database, where user see which dogs are available to adopt from the shelter.",
    image: process.env.PUBLIC_URL + '/images/portfolio/furever.png',
    url: "https://shielded-castle-31591.herokuapp.com/",
    github: "https://github.com/richardyjkim/Fur_Ever-Home"
  },
  {
    name: "Weather Dashboard",
    description: "Interactive weather forecasting application using HTML/CSS for front end, Third Party API (openweathermap) used to track current city weather.",
    image: process.env.PUBLIC_URL + '/images/portfolio/weather.png',
    url: "https://richardyjkim.github.io/weather-dashboard/",
    github:"https://github.com/richardyjkim/weather-dashboard"
  },
  {
    name: "Workday Scheduler",
    description: "Interactive Schedule Planning application where user can save, track their schedule on corresponding time. HTML CSS front end, Jquery to function.",
    image: process.env.PUBLIC_URL + '/images/portfolio/workday.png',
    url: "https://richardyjkim.github.io/workday-scheduler/",
    github: "https://github.com/richardyjkim/workday-scheduler"
  },
];

export default projects;
