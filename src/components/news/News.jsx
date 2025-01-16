import React, { Component } from 'react'
import Newslist from './Newslist'
import Loading from '../Loading';
import PropTypes from 'prop-types'


export default class News extends Component {
  articles = [];
  static propTypes = {              // defining the proptypes 
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  static defaultProps = {     // defining the static proptypes
    country: "us",
    pageSize: 10,
    category: "general"
  }
  constructor() { //state variable used to display the articles from JSON
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      spin: false
    }
  }

  async componentDidMount() { //Async function which displays the data from the API to web app
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fddefd312ed24b908c5f7256bc56e1ee&pageSize=${this.props.pageSize}&page=${this.state.page}`
    // this.setState({
    //   spin: true
    // })
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   spin: false
    // })
    // console.log(parseData);
    // this.setState({ articles: parseData.articles, articleResult: parseData.totalResults })
    this.updateNews()

  }


  async updateNews() {
    console.log(this.state.page+"firstupdateNews")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fddefd312ed24b908c5f7256bc56e1ee&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({
      spin: true
    })
    let data = await fetch(url);
    console.log(this.state.page+"middleupdateNews")
    let parseData = await data.json();
    this.setState({
      spin: false
    })
    console.log(this.state.page+"updateNews")
    console.log(parseData)

    this.setState({ articles: parseData.articles, articleResult: parseData.totalResults, page: this.state.page })


  }

  handlePrevPage = async () => {
    console.log("Hello");
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fddefd312ed24b908c5f7256bc56e1ee&pageSize=10&page=${this.state.page - 1}`
    // this.setState({
    //   spin: true
    // })
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   spin: false
    // })
    // console.log(parseData);
    // this.setState({ articles: parseData.articles, page: this.state.page - 1 })
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );

  }

  handleNextPage = async () => {
    console.log("Beello");
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fddefd312ed24b908c5f7256bc56e1ee&pageSize=10&page=${this.state.page + 1}`
    // this.setState({
    //   spin: true
    // })
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   spin: false
    // })
    // console.log(parseData)
    // console.log(this.state.page)
    // this.setState({ articles: parseData.articles, page: this.state.page + 1 })
    // this.setState({
    //   page: this.state.page + 1
    // })
    // this.updateNews();
   
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        () => this.updateNews()
      );
    
  }


  render() {
    return (
      <div className='container '>
        {this.state.spin && <Loading />}
        <h1 className='d-flex justify-content-center ms=5' style={{ margin: '50px' }}>Newsapp - {this.props.category}</h1>
        <div className='row my-4' >
          {
            !this.state.spin && this.state.articles.map((element) => { //map element used to iterate through that JSON to display data in the web app
              return (

                <Newslist key={element.url} title={element.title ? element.title : "Updating with New news!!!"} description={element.description ? element.description : "Updating with new news!!!"} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Anonymous"} date={element.publishedAt} />

              );

            })}
        </div>
        <div className='conatiner d-flex justify-content-between mb-4'>
          <button className='btn btn-primary' onClick={this.handlePrevPage} disabled={this.state.page <= 1}>&larr;Prev</button>
          <button className='btn btn-primary ms-3' onClick={this.handleNextPage} disabled={this.state.page + 1 > Math.ceil(this.state.articleResult / 10)}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
