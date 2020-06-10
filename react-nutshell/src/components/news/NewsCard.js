import React, { Component } from "react";
import { Link } from "react-router-dom";



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
            onClick={this.props.handleDelete}
          >
            Delete
          </button>
          <button type="button"
        onClick={() => {this.props.history.push(`/news/${this.props.newsId}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default NewsCard;