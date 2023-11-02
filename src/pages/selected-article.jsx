import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import styled from 'styled-components';
import he from 'he';

import { GET_CONTENT } from '../queries/articleQueries';
import ArticleContext from '../contexts/ArticleContext/ArticleContext';

const SelectedArticle = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PostTime = styled.time`
  color: rgb(128, 128, 128);
  font-size: 16px;
`;

const SelectedArticleTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SelectedArticleDescription = styled.p`
  font-size: 20px;
  color: rgb(15, 23, 42);
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const SelectedArticleImage = styled.img`
  width: 100%;
  height: auto;
`;
const FigCaption = styled.figcaption`
  color: rgb(128, 128, 128);
  font-size: 14px;
  word-break: break-word;
  image-rendering: pixelated;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const SelectedArticlePage = () => {
  const { id } = useContext(ArticleContext);

  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: {
      project_id: '5107de83-f208-4ca4-87ed-9b69d58d16e1',
      id: id,
      full_url:
        'business/simpals-novye-rabochie-mesta-dlia-vsekh-zhelaiushchikh',
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const shortTitle = data?.content?.title.short;
  const shortDescription = data?.content?.description.intro;
  const bannerURL = `https://i.simpalsmedia.com/point.md/news/370x194/${data?.content?.thumbnail}`;
  const timestamp = data?.content?.dates.posted;
  const date = new Date(timestamp * 1000);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const postedTime = formattedDate;

  return (
    <SelectedArticle>
      <PostTime>{postedTime}</PostTime>
      <SelectedArticleTitle>{he.decode(shortTitle)}</SelectedArticleTitle>
      <SelectedArticleDescription>
        {he.decode(shortDescription)}
      </SelectedArticleDescription>
      <SelectedArticleImage src={bannerURL} />
      <FigCaption>{he.decode(shortTitle)}</FigCaption>
    </SelectedArticle>
  );
};

export default SelectedArticlePage;
