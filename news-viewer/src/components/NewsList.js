import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise'
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
  const [loading, response, error] = usePromise(()=>{
    const query = (category === 'all' ? '' : `&category=${category}`);
    return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=dabeec94a62a4c2688397e5a0f0f56dc`);
  }, [category])
  if(loading){
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if(!response){
    return null
  }
  if(error){
    return <NewsListBlock>에러</NewsListBlock>;
  }
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article=>(
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;