const router = require('express').Router();

router.get('/', (req, res) => {    
    res.render('me', { pageTitle: 'Dashboard', user: req.session.user || null, guilds: req.session.guilds });
    let users = req.session.user;
    users.guilds.forEach(function(guilds) { 
        console.log(guilds)
        /* etc etc */ });
});
module.exports = router;