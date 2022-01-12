import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>
{

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);

   document.title = `Newsmon - ${props.category}`;

    const fetchMoreData = async() =>
    {
        let url = `https://dark-gateway.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResult(parsedData.totalResults)
    }

    useEffect( async() => {
        props.setProgress(10);
         let url = `https://dark-gateway.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
         setLoading(true);
         let data = await fetch(url);
         let parseData = await data.json();
         setArticles(parseData.articles);
         setLoading(false);
         setTotalResult(parseData.totalResults);
         props.setProgress(100);
    }, [])
   
        return (
            <>
            <div className="container">
            <h1 className="text-white mt-5 pt-5 text-center" style={{paddingTop:'60px !important'}}>Top Headlines - {props.category}</h1>
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResult}
          loader={<Spinner/>}
        >
            <div className="row mx-auto">
            {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:"No tile Available"} description={element.description?element.description.slice(0,70):"No description Available"} imgUrl={element.urlToImage} url={element.url} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt}/>
            </div>
            })}
            </div>
            </InfiniteScroll>
            </div>
            </>
        )
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category:'general'
};

News.propTypes = {
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category : PropTypes.string,
};

export default News
