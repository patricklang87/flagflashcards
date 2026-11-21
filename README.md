<h1 align="center">Learn Your Flags</h1>

<p align="center">A full stack app designed to help users learn the flags of the world. Includes user profiles (via JWT and MongoDB) for tracking which flags have been memorized across sessions. The front end is built with React-Redux and React-Router with pages for managing memorized flags, flash cards, and quizzes.
</p>

## Links

- [Front end on GitHub Pages](https://patricklang87.github.io/flagflashcards/#/) (the original Heroku back end is no longer running, so flags and accounts don't load there)
- [Repo](https://github.com/patricklang87/flagflashcards/)

## Features

- Browse every country's flag, filtered by region or search term
- Flip-card practice mode
- Multiple-choice flag quizzes with adjustable length and a difficult mode
- Accounts (bcrypt-hashed passwords, JWT auth) that remember which flags you've memorized

Flag and country data come from the [REST Countries](https://restcountries.com/) API.

## Project structure

```
├── server.js            # Express app: API routes; serves client/build in production
├── routes/
│   ├── restcountries.js # Proxies the REST Countries API
│   └── api/             # users (register), auth (login / current user), memorized (add/remove flags)
├── middleware/auth.js   # Verifies the x-auth-token JWT
├── models/User.js       # Mongoose user model
└── client/              # Create React App front end (React, Redux Toolkit, React Router)
```

## Run the project

1. Create a `.env` file in the root:
   ```
   DB_CONNECT=<MongoDB connection string>
   JWT_SECRET=<any long random string>
   ```
2. Install dependencies and start both servers:
   ```bash
   npm install
   npm run client-install
   npm run dev
   ```
   The API runs on port 5000 and the React dev server on port 3000, which proxies `/api` requests to the API.

   The client uses Create React App 4. On Node 17+, `npm run dev` and `npm run build` need `NODE_OPTIONS=--openssl-legacy-provider` (tests run fine without it).

## Run the tests

```bash
npm test
```

- **API** (Jest + Supertest, with the Mongoose model mocked, so no database needed): JWT middleware, registration, login, the current-user endpoint, and adding and removing memorized flags.
- **Client** (React Scripts / Jest): the quiz and flash card Redux slices, and the auth helpers that store and send the token.

Tests run on every push and pull request via GitHub Actions.


## Built with

- JavaScript
- HTML
- CSS
- React
- Redux
- React-Router
- NodeJS
- NPM
- Axios
- Express
- Mongoose
- JWT
- Jest, Supertest

## Possible Future Updates

- [ ] Add quiz score tracking feature
- [ ] Change Flash Cards feature layout
 
## Author

**Patrick Lang**

- [Profile](https://github.com/patricklang87 "Patrick Lang")
- [Email](mailto:patricklang87@gmail.com?subject=flagflashcards "Learn Your Flags")
