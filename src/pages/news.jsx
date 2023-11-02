import styled from 'styled-components';

import Articles from '../components/article-list';

const News = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 8px;
  padding: 24px;
  background: white;
`;
const PageTitle = styled.div`
  color: rgb(15, 23, 42);
  position: relative;
  font-weight: 700;
  text-align: left;
  font-size: 28px;
  margin-bottom: 24px;
`;

const NewsPage = () => {
  return (
    <News>
      <PageTitle>Сегодня</PageTitle>
      <Articles />
    </News>
  );
};

export default NewsPage;
