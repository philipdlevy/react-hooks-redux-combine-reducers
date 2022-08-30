import React from "react";
import AuthorInput from "./features/books/authors/AuthorInput";
import Authors from "./features/books/authors/Authors";
import authorSlice from "./features/books/authors/authorSlice";
import BookInput from "./features/books/BookInput";
import Books from "./features/books/Books";
import booksSlice from "./features/books/booksSlice"
import Reducers from "/Reducers";

function App() {
  return (
    <div>
      <div>
        <h2>Authors</h2>
        <AuthorInput />
        <Authors />
      </div>
      <div>
        <h2>Book</h2>
        <BookInput />
        <Books />
      </div>
    </div>
  );
}

export default App;
