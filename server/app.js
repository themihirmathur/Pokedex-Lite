const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path')
var passport = require('passport');
var crypto = require('crypto');
var routes = require('./routes');
const connection = require('./config/database');

// Package documentation - https://www.npmjs.com/package/connect-mongo
const MongoStore = require('connect-mongo');

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config();

// Create the Express application
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


/**
 * -------------- SESSION SETUP ----------------
 */

const sessionStore = new MongoStore({ mongoUrl: process.env.MONGO_URI || "mongodb+srv://themihirmathur:Du0GRjMPXLIJFJnc@cluster0.3i5gs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", collection: 'sessions' });

app.use(session({
    secret: process.env.SECRET || "b08c7507d299a5ce05088883375630cd62a416159f0a10785d5798103849a8b162a536fe51ae882bd46dfed643c9edcb1dd3c46d1801f01e0d6b8c5c78c0ab5b7417baa881736bed746e4d615957ff00296180de0c33e15b04f782f8ea75d892254731cb2fe66ac6feaaf2ce48ee03e1ade39a146af6b415b13f46bd88b9058fbf4610c23ec74bfa85726e07775a3e9f532e4a1603824a595a1408a71c238e11143015db415f6c85cf9d8ba8a88268d47c3ebf22eddf9d182cd7799e3a490a4d393de5129665ea6a9e62a6a534f6042ef3cb0855a33ea3b00a321f539db5a5e4d27fc4c897b70c6784fd74e1f5ad8beb17a06133c6508f90ffa2bb0ddc56a367cb169ddabdcc343264d475dc47a5dd133fb01120d6cd8ef3ac297f29e976520040e585d4c8b8b029c716958a0b6b8d072405b5dda55c1d7bd8a38464d6ac6845",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.user);
    next();
});

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(routes);


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3001
app.listen(process.env.PORT ?? 3001, () => console.log('Started server on port 3001'));