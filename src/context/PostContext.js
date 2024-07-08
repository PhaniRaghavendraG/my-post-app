import React, { createContext, Component } from "react";

import { v4 as uuidv4 } from "uuid";

const PostContext = createContext();

class PostProvider extends Component {
  state = {
    posts: [
      {
        id: uuidv4(),
        title: "Introduction to React",
        content:
          "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers. It enables dynamic web applications that efficiently update and render with data changes.",
      },
      {
        id: uuidv4(),
        title: "Understanding JavaScript Promises",
        content:
          "A Promise is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner way to handle asynchronous code compared to traditional callback methods.",
      },
      {
        id: uuidv4(),
        title: "Getting Started with Node.js",
        content:
          "Node.js is a runtime environment that allows you to run Javascript on the server side. It is built on Chrome's V8 Javascript engine and is known for its non-blocking, event-driven architecture.",
      },
      {
        id: uuidv4(),
        title: "Exploring CSS Grid Layout",
        content:
          "CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create complex and responsive layouts with ease. Grid layout is a powerful tool for modern web design.",
      },
    ],
  };

  addPost = (newPost) => {
    this.setState({
      posts: [...this.state.posts, { ...newPost, id: uuidv4() }],
    });
  };

  updatePost = (updatedPost) => {
    const updatedPosts = this.state.posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    this.setState({ posts: updatedPosts });
  };

  deletePost = (id) => {
    this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  };

  render() {
    return (
      <PostContext.Provider
        value={{
          posts: this.state.posts,
          addPost: this.addPost,
          updatePost: this.updatePost,
          deletePost: this.deletePost,
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

export { PostContext, PostProvider };
