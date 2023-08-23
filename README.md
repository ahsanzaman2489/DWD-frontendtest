# Stack
1) React
2) React Router
3) Redux
4) Redux persist (to persist the state in localstorage)
5) HTML
6) SCSS
7) Toastify

# Overview of the project
```javascript
src 
    -- Components (Reusable components)
    -- Hooks (Custom hooks for sorting, filtering and form validation)
    -- Pages (Routes)
    -- Services (Endpoints)
    -- Axios (Axions client with interceptor)
    -- Layout (Layout to reuse on different screens)
    -- Styles (sass styles)
    -- Store (redux store with Reducers, Actions, Redux persistor)
```

# Key Features of Project
1) Built with React 18 and Create React App.
2) Typescript for static type checking.
3) Custom hooks created from scratch for sorting, filtering tables and form validation with limited functionality.
4) Redux persist is used to persist the user state in local storage on any change and will hydrate the app on reload.
5) Search box for table.
6) Add a new TODO button to add a new one.
8) Tokenization, All URL requires an Access token after login.
10) Component/Module Based SCSS.
11) Role-based rendering.
12) All Exceptions Handled.
13) Loadings added where needed.
14) When you log in as an editor and try to hover on a certain row, it will show your edit and delete button. after clicking edit you will go into edit mode.
15) Context API added to manage table state.
16) The user state is handled by Redux.

# What I did out the scope which is good for UX
1) Pagination, It was not mentioned in the description but I added it to make UX more robust.
2) Axios interceptor added specially for response to check if the token is expired redirect to login after showing the message.
3) Creating custom hooks like a new plugin
4) Added Loading ad exceptions
5) Toast added on success and errors where needed to let the user know
6) .env created for Base URLs
7) Project structure managed
8) A Protected Routed mechanism was added so user cannot visit without having a valid token

# Limitations
1) The endpoint was not provided in the description, so I decided to use dummyjason.com server to get the data, but data is not real but it will mimic every action (CRUD).
2) The Refresh token was not provided by dummyjason.com so I decided to redirect the user to log in instead of getting the new token with the Refresh token.
3) Design was not provided by i tried to come up with a simple one with good UX and tried to cover most of the cases.
4) In the description it's mentioned that password validation needs to apply and without a signup page, it was not possible, So I created the page and added the Signup Api.
5) You can not create a user but can check the validation and mock response from the server.
6) No Clear guidelines on caching.
7) Every CRUD operation is through API integration but the limitation is if you refresh you will get old data because the server is not saving state. but you will see the changes going through and coming from the server.

# Things I wish , I could have implemented because of time
1) Code splitting.
2) Refresh Token.
3) System design.
4) Test cases.
5) caching.
6) Query params in the URL to the current page state of the table.

# Login Credentials
```javascript
1) user : atuny0 , pass : 9uQFF1Lh , role : non editor
2) user : hbingley1 , pass : CQutx25i8r , role : editor
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
