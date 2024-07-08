import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import "./index.css";

class PostDisplay extends Component {
  static contextType = PostContext;

  handleDelete = (id) => {
    const { deletePost } = this.context;
    deletePost(id);
  };

  render() {
    const { posts } = this.context;

    return (
      <div className="post-display-container">
        <h1 className="post-display-heading">All Posts</h1>
        <ul className="posts-list">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="post-item">
                <h2 className="post-item-heading">{post.title}</h2>
                <p className="post-item-description">{post.content}</p>
                <div className="buttons-container">
                  <Link to={`/post/${post.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <button
                    onClick={() => this.handleDelete(post.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="error-message">No posts available</p>
          )}
        </ul>
        <div>
          <Link to="/create">
            <button className="create-post-btn">Create Post</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PostDisplay;
