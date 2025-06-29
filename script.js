const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// A: DESTRUCTURING
const book = getBook(2);
book;

/* OBJECT DESTRUCTURING EXAMPLE */
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

/* ARRAY DESTRUCTURING EXAMPLE */
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // ... is the rest operator
console.log(primaryGenre, secondaryGenre, otherGenres);

// B: REST/SPREAD OPERATOR
/* REST OPERATOR EXAMPLE SHOWN ABOVE USING ...  */

/* SPREAD OPERATOR EXAMPLE */
const newGenres = [...genres, "epic fantasy"]; // adds "epic fantasy" to the end of genres array instead of a new array like const newGenres = genres, "epic fantasy"] would do
newGenres;

/* SPREAD OPERATOR USED IN OBJECTS EXAMPLE */
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19", // ... adding new property to the end of this object rather than creating a new object like const updatedBook = { book, moviePublicationDate: "2001-12-19" } would do
  pages: 1210, // ... can overwrite existing properties like pages:1210
};
updatedBook;

// C: TEMPLATE LITERALS
/* TEMPLATE LITERAL EXAMPLE */
const summary = `${title} is a ${pages}-page long book written by ${author} published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// D: TERNARIES INSTEAD OF IF/ELSE STATEMENTS
/* TERNARY OPERATOR EXAMPLE */
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The ${title} book has ${pagesRange} pages`);

// E: ARROW FUNCTIONS
/* ARROW FUNCTION EXAMPLE */
function altGetYear(str) {
  return str.split("-")[0];
}

const getYear = (str) => str.split("-")[0]; // same output as function above
console.log(getYear(publicationDate));

// F: SHORT-CIRCUITING AND LOGICAL OPERATORS
/* SHORT-CIRCUITING EXAMPLE */
console.log(hasMovieAdaptation && "This book has a movie");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTranslation =
  book.translations.spanish || "Not translated to Spanish";
spanishTranslation;

const count = book.reviews.librarything.reviewsCount ?? "No data"; // ?? avoids falsy values unlike || operator
count;

// G: OPTIONAL CHAINING OPERATOR
/* OPTIONAL CHAINING EXAMPLE*/
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // chain  continues even if part before ? does not exist as undefined instead of an error; part after ?? sets default value if bit before does not exist
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
