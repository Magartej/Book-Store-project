import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchBooksQuery } from '../../redux/features/books/booksApi';
import BookCard from './BookCard';
import Loading from '../../components/Loading';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  
  const { data: books, isLoading, isError, error } = useSearchBooksQuery(query, {
    skip: !query,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Error</h2>
        <p className="text-red-500">{error?.data?.message || 'An error occurred while searching'}</p>
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Search Results for: "{query}"</h2>
        <p>No books found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Search Results for: "{query}"</h2>
      <p className="mb-4">Found {books.length} results</p>
      
      <div className="grid grid-cols-1 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults; 