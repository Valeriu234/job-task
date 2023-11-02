import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Article from './article';
import { GET_CONTENTS } from '../queries/articleQueries';

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Articles = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_CONTENTS, {
    variables: {
      project_id: '5107de83-f208-4ca4-87ed-9b69d58d16e1',
      lang: 'ru',
      take: 30,
      skip: 0,
    },
  });
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (!loading) {
      setItems(data.contents); // Set the initial data
    }
  }, [data, loading]);

  const loadMoreData = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true);

      fetchMore({
        variables: {
          skip: page * 30,
          project_id: '5107de83-f208-4ca4-87ed-9b69d58d16e1',
          lang: 'ru',
          take: 30,
          // Calculate the new skip value based on the current loaded items
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          setPage(page + 1);
          setItems([...items, ...fetchMoreResult.contents]);
          setHasMore(fetchMoreResult.contents.length > 0);
          setLoadingMore(false);
        },
      });
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop * 1.2 >=
      document.documentElement.scrollHeight
    ) {
      loadMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, hasMore]);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <ArticleList>
      {items.map(({ title, description, dates, thumbnail, parents, id }) => (
        <Article
          key={id}
          id={id}
          title={title.short}
          image={thumbnail}
          description={description.intro}
          brandIcon={parents[1].attachment}
          postCreated={dates.posted}
        />
      ))}
    </ArticleList>
  );
};

export default Articles;
