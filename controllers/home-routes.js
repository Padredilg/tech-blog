const router = require('express').Router();
const sequelize = require('../config/connection');

res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn
});