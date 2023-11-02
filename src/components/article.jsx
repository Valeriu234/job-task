import { useContext } from 'react';

import styled from 'styled-components';
import he from 'he';
import ArticleContext from '../contexts/ArticleContext/ArticleContext';

import { useNavigate } from 'react-router-dom';
import { getTimeDifference } from '../utils/getTimeDiference';

const ArticleCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  gap: 16px;
`;
const ArticleImage = styled.img`
  width: 240px;
  border-radius: 4px;
  max-height: 126px;
  @media (max-width: 600px) {
    max-width: 140px;
  }
`;
const ArticleDescription = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 24px;
  color: rgb(15, 23, 42);
  letter-spacing: 0;
  font-weight: 500;
  &:hover {
    color: red;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const DescriptionInfo = styled.p`
  font-size: 1rem;
  line-height: 20px;
  font-weight: 400;
  color: rgb(15, 23, 42);
  @media (max-width: 850px) {
    display: none;
  }
`;

const DescriptionPostTime = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const PostTimeIcon = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 8px;
`;
const PostTimeText = styled.time`
  font-size: 0.8rem;
  color: rgb(128, 128, 128);
  line-height: 0;
  width: max-content;
`;

const Article = ({ image, brandIcon, title, description, postCreated, id }) => {
  const { setId } = useContext(ArticleContext);
  const bannerURL = `https://i.simpalsmedia.com/point.md/news/370x194/${image}`;
  const logoUrl = `https://i.simpalsmedia.com/point.md/logo/${brandIcon}`;
  const decodedTitle = he.decode(title);
  const decodedDescription = he.decode(description);
  const navigate = useNavigate();
  const getArticleId = () => {
    setId(id);
    navigate(`/articles/${id}`);
  };

  const timeDifferenceString = getTimeDifference(postCreated);

  return (
    <ArticleCard>
      <ArticleImage onClick={getArticleId} src={bannerURL} />
      <ArticleDescription>
        <DescriptionTitle onClick={getArticleId}>
          {decodedTitle}
        </DescriptionTitle>
        <DescriptionInfo>{decodedDescription}</DescriptionInfo>
        <DescriptionPostTime>
          <PostTimeIcon src={logoUrl} />
          <PostTimeText>{timeDifferenceString}</PostTimeText>
        </DescriptionPostTime>
      </ArticleDescription>
    </ArticleCard>
  );
};

export default Article;
