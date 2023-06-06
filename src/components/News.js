import React,{useEffect,useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
   const [articles,setArticles]=useState([])
   const [loading,setLoading]=useState(true)
   const [page,setPage]=useState(1)
   const [totalResults,setTotalResults]=useState(0)
   const toUpper=(str) =>{
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
     }
    const updatenews= async()=>{
      props.setProgress(0);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7b580c41416d4603a3f2c07918bfb042&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true); 
      let data=await fetch(url);
      props.setProgress(30);   
      let parsedData =  await data.json()
      props.setProgress(70);  
      setArticles(parsedData.articles) 
      setTotalResults(parsedData.totalResults)
      setLoading(false)
       props.setProgress(100);
    }
    useEffect(()=>{  
      document.title=`${toUpper(props.category)}-NewsMonkey`
      updatenews();
    },[])
 const fetchMoreData = async () => {
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7b580c41416d4603a3f2c07918bfb042&page=${page+1}&pageSize=${props.pageSize}`;    
      setPage(page+1)
      let data=await fetch(url);
      let parsedData =  await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
};
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewMonkey Top {toUpper(props.category)} headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }

News.defaultProps={
  pageSize: 8,
  country:'in',
  category: 'general'
}
News.propTypes={
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string
}
export default News
