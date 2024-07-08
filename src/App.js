import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import PostDisplay from "./components/PostDisplay";
import CreatePost from "./components/CreatePost";
import PostItem from "./components/PostItem";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <PostProvider>
        <Router>
          <div className="app-container">
            <h1 className="heading">Posts App</h1>
            <hr className="line" />
            <p className="description">
              This project is a simple React application that allows users to
              create, view, edit and delete posts. This project demonstrates a
              basic CRUD (Create, Read, Update, Delete) functionality using
              React class components, React Router, and the Context API,
              providing a solid foundation for building more complex
              applications.
            </p>
            <Routes>
              <Route path="/" element={<PostDisplay />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostItem />} />
            </Routes>
          </div>
        </Router>
      </PostProvider>
    );
  }
}

export default App;
