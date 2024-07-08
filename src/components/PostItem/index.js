import React, { Component } from "react";
import { PostContext } from "../../context/PostContext";
import { withRouter } from "../../withRouter";

class PostItem extends Component {
  static contextType = PostContext;

  state = {
    title: "",
    content: "",
  };

  componentDidMount() {
    const { posts } = this.context;
    const { id } = this.props.router.params;
    const post = posts.find((post) => post.id === id);

    if (post) {
      this.setState({
        title: post.title,
        content: post.content,
      });
    }
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  handleSave = (event) => {
    event.preventDefault();
    const { updatePost } = this.context;
    const { id } = this.props.router.params;
    const { title, content } = this.state;

    const updatedPost = {
      id,
      title: title,
      content: content,
    };

    updatePost(updatedPost);
    this.props.router.navigate("/");
  };

  render() {
    const { title, content } = this.state;

    return (
      <div className="create-post-container">
        <h2 className="create-post-heading">Edit Post</h2>
        <form onSubmit={this.handleSave} className="create-post-form">
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

          <button type="submit" className="submit-btn">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostItem);
