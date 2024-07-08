import React, { Component } from "react";
import { PostContext } from "../../context/PostContext";
import { withRouter } from "../../withRouter";
import "./index.css";

class CreatePost extends Component {
  static contextType = PostContext;

  state = {
    title: "",
    content: "",
    showSubmitError: false,
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    const { addPost } = this.context;

    if (title && content) {
      addPost({ title, content });
      this.setState({
        title: "",
        content: "",
      });
      this.props.router.navigate("/");
    } else {
      this.setState({ showSubmitError: true });
    }
  };

  render() {
    const { title, content, showSubmitError } = this.state;

    return (
      <div className="create-post-container">
        <h2 className="create-post-heading">Create New Post</h2>
        <form onSubmit={this.handleSubmit} className="create-post-form">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter your title here"
            onChange={this.onChangeTitle}
            className="title-input"
          />
          <textarea
            value={content}
            name="content"
            placeholder="Enter your content here"
            onChange={this.onChangeContent}
            className="content-input"
            rows="6"
            cols="50"
          />
          {showSubmitError && (
            <p className="error-msg">Please fill in all the details</p>
          )}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePost);
