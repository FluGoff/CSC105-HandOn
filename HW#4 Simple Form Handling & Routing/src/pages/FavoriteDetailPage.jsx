import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const FavoriteDetailPage = () => {
  const { id } = useParams();
  
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const size = searchParams.get('size');

  return (
    <div>
      <h1>Favourite Detail</h1>
      <p>Your favourite post is {query}. Post ID is {id}. Size is {size}.</p>
    </div>
  );
};

export default FavoriteDetailPage;
