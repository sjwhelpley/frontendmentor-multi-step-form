import { Dispatch } from '@reduxjs/toolkit';

import { BookType, setBooks } from './redux/features/booksSlice';

export const fetchBooks = async (
  dispatch: Dispatch,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=''&printType=books&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  );
  const data = await response.json();
  dispatch(setBooks(data.items));
  setLoading(false);
};

export const searchBooks = async (
  searchTerm: string,
  dispatch: Dispatch,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  );
  const data = await response.json();
  dispatch(setBooks(data.items));
  setLoading(false);
};

export const fetchBook = async (
  id: string,
  setBook: React.Dispatch<React.SetStateAction<BookType | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
  );
  const data = await response.json();
  setBook(data);
  setLoading(false);
};
