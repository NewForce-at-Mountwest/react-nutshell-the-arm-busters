import React, { Component } from 'react'
//import the components we will need
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'


class NewsList extends Component {
    //define what this component needs to render
    state = {
        newsArticles: [],
        loadingStatus: true,
    }

    monkies ={
      name: "Albert"
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    NewsManager.getAll()
    .then((newsData) => {
        this.setState({
            newsArticles: newsData
        })
    })
}

deleteNewsArticle = id => {
  NewsManager.delete(id)
  .then(() => {
    NewsManager.getAll()
    .then((newNewsArticle) => {
      this.setState({
          newsArticles: newNewsArticle
      })
    })
  })
}

handleDelete = () => {
  //invoke the delete function in AnimalManger and re-direct to the animal list.
  this.setState({ loadingStatus: true });
  NewsManager.delete(this.props.newsId).then(() =>
    this.props.history.push("/news")
  );
};


render(){

    return(
      <>
      <section className="section-content">
    <button type="button"
        className="btn"
        onClick={() => {this.props.history.push("/news/new")}}>
        New Article
    </button>
  </section>
        <div className="container-cards">
            {/* <h1>I have a monkey named {this.monkies.name}</h1> */}
            {this.state.newsArticles.sort((a,b)=>{return new Date(b.date)- new Date(a.date) }).map(newsInLoop => <NewsCard key={newsInLoop.id} newsProp={newsInLoop} deleteNewsArticle={this.deleteNewsArticle} {...this.props}/>)}
        </div>
        </>
    )
}
}

export default NewsList