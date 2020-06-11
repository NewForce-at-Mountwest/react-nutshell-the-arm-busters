import React, { Component } from "react";




class NewsCard extends Component {



  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Title:{" "}
            <span>{this.props.newsProp.title}</span>
          </h3>
          <p>Synopsis: {this.props.newsProp.synopsis}</p>
          <p>URL: {this.props.newsProp.url}</p>
          <button
            type="button"
            disabled={this.props.loadingStatus}
            onClick={() => this.props.deleteNewsArticle(this.props.newsProp.id)}
          >
            Delete
          </button>
          <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.newsProp.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;