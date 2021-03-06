## MERN: Book Search Engine
### Description:
This project refactors a Google Books API search engine from a RESTful API to a GraphQL API with Apollo Server. The search engine is built using the MERN stack - MongoDB, Express.js, React, and Node.js. A user can create an account, search for books, and save them to a list. On a separately rendered page, the user can see their saved books and remove books from the list. In short this is a Google Books API search engine built with a RESTful API and refactored to be a GraphQL API built with Apollo Server now. This application was built using the MERN stack, with a REACT frontend, MongoDB database, and Node.js/Express.js server and API.

### Technogies & Tools Used:
Node.js
apollo server
apollo server express
graphQl
JWT (JSON Web Token)
bcrypt
mongoDB and mongoose
express
sequelize
JSX
JavaScript
CSS
REACT bootsrap
REACT
HTML, CSS, React Bootstrap
Google Books API
Apollo Boost
dotenv
Heroku

### Deployed App
https://powerful-journey-42449.herokuapp.com/

## Tasks List

In this project I have done the following changes in the existing code of book-search application:

- [x] Setting up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

- [x] Modifying the existing authentication middleware so that it works in the context of a GraphQL API.

- [x] Creating an Apollo Provider so that requests can communicate with an Apollo Server.

- [x] Deploying the application to Heroku.

### Screenshots

<img width="1189" alt="Screen Shot 2021-07-01 at 7 51 46 PM" src="https://user-images.githubusercontent.com/77028806/124214587-524b6b00-daa7-11eb-8906-61a0691f9b95.png">

<img width="1190" alt="Screen Shot 2021-07-01 at 7 53 02 PM" src="https://user-images.githubusercontent.com/77028806/124214660-6e4f0c80-daa7-11eb-824f-69f0a440d85e.png">

<img width="1681" alt="Screen Shot 2021-07-01 at 7 50 46 PM" src="https://user-images.githubusercontent.com/77028806/124214613-5b3c3c80-daa7-11eb-835f-73c29d3b2fdc.png">

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Original README.MD below


# 21 MERN: Book Search Engine

Your Challenge this week is emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

This week, you???ll take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It's already set up to allow users to save book searches to the back end. 

To fulfill the Challenge, you???ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Use Apollo Client to create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy the application to Heroku using a MongoDB database hosted at MongoDB Atlas.

Before you start, [clone the starter code](https://github.com/coding-boot-camp/solid-broccoli).

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book???s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account???s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book???s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book???s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book???s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Getting Started

In order for this application to use a GraphQL API, you???ll need to refactor the API to use GraphQL on the back end and add some functionality to the front end. The following sections contain details about the files you???ll need to modify on the back end and the front end.

> **Important:** Make sure to study the application before building upon it. Better yet, start by making a copy of it. It's already a working application&mdash;you're converting it from RESTful API practices to a GraphQL API.

### Back-End Specifications

You???ll need to complete the following tasks in each of these back-end files:

* `server.js`: Implement the Apollo Server and apply it to the Express server as middleware.

* `auth.js`: Update the auth middleware function to work with the GraphQL API.

	> **Hint:** Refer to the module project as a refresher on how to do this.

* `Schemas` directory:

	* `index.js`: Export your typeDefs and resolvers.

	* `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.

		> **Hint:** Use the functionality in the `user-controller.js` as a guide.

	* `typeDefs.js`: Define the necessary `Query` and `Mutation` types:

		* `Query` type:

			* `me`: Which returns a `User` type.
		
		* `Mutation` type:

			* `login`: Accepts an email and password as parameters; returns an `Auth` type.

			* `addUser`: Accepts a username, email, and password as parameters; returns an `Auth` type.

			* `saveBook`: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters!)

			* `removeBook`: Accepts a book's `bookId` as a parameter; returns a `User` type.
			
		* `User` type:

			* `_id`

			* `username`

			* `email`

			* `bookCount`

			* `savedBooks` (This will be an array of the `Book` type.)

		* `Book` type:

			* `bookId` (Not the `_id`, but the book's `id` value returned from Google's Book API.)

			* `authors` (An array of strings, as there may be more than one author.)

			* `description`

			* `title`

			* `image`

			* `link`

		* `Auth` type:

			* `token`

			* `user` (References the `User` type.)


### Front-End Specifications

You'll need to create the following front-end files:

* `queries.js`: This will hold the query `GET_ME`, which will execute the `me` query set up using Apollo Server.

* `mutations.js`:

	* `LOGIN_USER` will execute the `loginUser` mutation set up using Apollo Server.

	* `ADD_USER` will execute the `addUser` mutation.

	* `SAVE_BOOK` will execute the `saveBook` mutation.

	* `REMOVE_BOOK` will execute the `removeBook` mutation.

Additionally, you???ll need to complete the following tasks in each of these front-end files:

* `App.js`: Using `ApolloClient`, `InMemoryCache`, `createHttpLink`, and `setContext` from the Apollo Client library, create an Apollo Provider to make every request work with the Apollo server.
	
* `SearchBooks.js`:

	* Use the Apollo `useMutation()` Hook to execute the `SAVE_BOOK` mutation in the `handleSaveBook()` function instead of the `saveBook()` function imported from the `API` file. Define and export the `SAVE_BOOK` mutation in a new file at `/client/src/utils/mutations.js`.

	* Make sure you keep the logic for saving the book's ID to state in the `try...catch` block! 

* `SavedBooks.js`:

	* Remove the `useEffect()` Hook that sets the state for `UserData`.

	* Instead, use the `useQuery()` Hook to execute the `GET_ME` query on load and save it to a variable named `userData`. Define and export the `GET_ME` query in a new file at `/client/src/utils/queries.js`.

	* Use the `useMutation()` Hook to execute the `REMOVE_BOOK` mutation in the `handleDeleteBook()` function instead of the `deleteBook()` function that's imported from `API` file. Define and export the `REMOVE_BOOK` mutation in a new file at `/client/src/utils/mutations.js`. (Make sure you keep the `removeBookId()` function in place!)

* `SignupForm.js`: Replace the `addUser()` functionality imported from the `API` file with the `ADD_USER` mutation functionality. Define and export the `ADD_USER` mutation in a new file at `/client/src/utils/mutations.js`.

* `LoginForm.js`: Replace the `loginUser()` functionality imported from the `API` file with the `LOGIN_USER` mutation functionality. Define and export the `LOGIN_USER` mutation in a new file at `/client/src/utils/mutations.js`.






