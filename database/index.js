const books = [{
    ISBN: "1234One",
    title: "Getting started with MERN",
    authors: [1, 2],
    language : "en",
    pubDate: "2021-07-07",
    numOfPage: 255,
    category: ["fiction", "programming", "tech", "web dev"],
    publications: 1,
    },
    {
    ISBN: "1234Two",
    title: "Getting started with python",
    authors: [1, 2],
    language : "en",
    pubDate: "2021-07-07",
    numOfPage: 255,
    category: ["fiction", "programming", "tech", "web dev"],
    publications: 1,


},
];

const authors = [
    {
        id: 1,
        name: "laxman",
        books: ["12345ONE"],
    },
    {
        id: 2,
        name: "Ramu",
        books: ["12345ONE"],
  
      },
];

const publications = [
    {
        id: 1,
        name: "Chakra",
        books: ["12345ONE"],
    },
    
];

module.exports = {books, authors, publications };