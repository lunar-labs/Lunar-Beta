module.exports = (app) => {
    // '/'
    app.use('/', require('./routes/index'));
    app.use('/me', require('./routes/me'));

    // '/authorize'
    app.use('/authorize', require('./routes/discord'));
}