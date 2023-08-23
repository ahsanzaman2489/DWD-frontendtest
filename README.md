# Stack
1) React
2) React Router
3) Redux
4) Redux presist (to presist the state in localstorage)
5) HTML
6) SCSS
7) Toastify

# Overview of the project
```javascript
src 
    -- Components (Reusable components)
    -- Hooks (Custom hooks for sorting , filtering and form validation)
    -- Pages (Routes)
    -- Services (Endpoints)
    -- Axios (Axions client with interceptor)
    -- Layout (Layout to reuse on different screens)
    -- Styles (sass styles)
    -- Store (redux store with Reducers, Actions , Redux presistor)
```

# Key Features of project
1) Built with React 18 and Create react App
2) Typescript for static type checkings
3) Custom hooks created from sractch for sorting , filtering tables and form validation with limited funcationality
4) Redux presistor used to presist user state in local storage on any change and will hydrate the app on reload
5) Search box for table
6) Add new TODO button to add new one
8) Tokenization , All URL requires Access token after login
10) Component/Module Based SCSS.
11) Role base rendering
12) All Exeptions Handled
13) Loadings added where needed
14) When you login as editor and try to hover on certain row , it will show your edit and delete button. after clicking edit you will go into edit mode.

# What I did out the scope which is good for UX
1) Pagination , it was not mentioned in the description but i added it to make UX more robust.
2) Axios interceptor added specialy for response to check if token is expired redirect to login after showing the message.
3) Creating custom hooks like a new plugin
4) Added Loading ad expections
5) Toast added on success and errors where needed to let user know
6) .env created for Base URL's
7) Project structure managed
8) Protected Routed mechanism added so user cant not visit without having valid token

# Limitaions
1) Endpoint was not provided in the description , so i decide to use dummyjason.com server to get the data, but data is not real but it will mimic every action (CRUD)
2) Refresh token was not provided by dummyjason.com so i decide to redirect user to login instead getting the new token with Refresh token.
3) Desing was not provided by i try to come up with simple one with good UX and try to cover most of the cases.
4) In description its mentioned that password validation needs to apply and without signup page it was not possibe, So i created the page and added the Sign up Api.
5) You can not create user but can check the validation and mock response from the server
6) No Clear guidlines on caching
7) Every CRUD operation is throuhg API integration but limitation is if you referesh you will get old data because sever is not saving state. but you will see the changes going through and coming from server

# Things i wish , i could have implemented
1) Code splitting
2) Referesh Token
3) System design
4) Test cases
5) caching

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
