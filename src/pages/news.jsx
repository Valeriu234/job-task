import styled from "styled-components";
import ArticleList from '../components/article-list'

const News  = styled.div`
width: 80%;
height: 100%;  
`
const NewsPage = () => {
    return (
        <News>
            <ArticleList/>
        </News>
    );
};

export default News;