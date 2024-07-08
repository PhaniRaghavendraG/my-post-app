# Posts App

Welcome to the React Posts Application! This project allows users to manage posts, create new posts, edit existing ones, and delete posts. It's built using React, leveraging React Router for navigation and the Context API for state management.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
- Navigate to `http://localhost:3000` to view the app.
</details>

### Features

<details>
<summary>Click to view</summary>

- **Create Post:** Users can create new posts by filling out a form with a title and content.
- **Edit Post:** Existing posts can be edited with updated title and content.
- **Delete Post:** Users have the option to delete posts they no longer need.
- **Global State Management:** Manages posts using the React Context API for centralized state management.
- **Dynamic Routing:** Uses React Router for navigation between different views (Post Display, Create Post, Edit Post).
- **Initial Data:** Starts with 3-4 preloaded posts to demonstrate functionality.

</details>

### Dependenices

<details>
<summary>Click to view</summary>

- **react:** JavaScript library for building user interfaces.
- **react-router-dom:** DOM bindings for React Router, allowing navigation and routing in React applications.
- **uuid:** A package for generating unique identifiers (UUIDs) in JavaScript.
- Other dependencies specified in `package.json`.

</details>

### Folder Structure

<details>
<summary>Click to view</summary>

- **public/** - Contains the index.html file for demonstration.
- **src/** - Contains the application source code.
  - **components/** - React components used in the application.
  - **context/** - Context API for managing global state
  - **App.js** - Main component rendering the Bar Chart and TimeFrame Selector.
  - **index.js** - Entry point for rendering the React application.

</details>

### Usage

<details>
<summary>Click to view</summary>

- **Creating a Post:** Click on the "Create Post" button on the main page, fill out the form, and submit to create a new post.
- **Editing a Post:** Click on the "Edit" button next to a post, modify the content, and save the changes.
- **Deleting a Post:** Click on the "Delete" button next to a post to remove it from the list.

</details>
