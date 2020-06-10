import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"


class NewsEditForm extends Component {
    //set the initial state
    state = {
      title: "",
      url: "",
      synopsis: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingNewsArticle = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedNewsArticle = {
        id: this.props.match.params.newsId,
        title: this.state.title,
        url: this.state.url,
        synopsis: this.state.synopsis,
      };

      NewsManager.update(editedNewsArticle)
      .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
      NewsManager.get(this.props.match.params.newsId)
      .then(news => {
          this.setState({
            title: news.title,
            url: news.url,
            synopsis: news.synopsis,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
              
            <label htmlFor="title">Title</label>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="title"
                value={this.state.title}
              />
              
<label htmlFor="url">URL</label> 
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
              
              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />
              
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingNewsArticle}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default NewsEditForm