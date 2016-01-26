var express = require('express');

module.exports = {
    
    // This is a controller rendering views as send from the router
    
    "home": function(req, res, next){
        res.render('layout', 
            { 
                title: 'DKD Basic API', 
                content: '../pages/homepage', 
                navBar: true,
                styleSheets: ["/assets/stylesheets/style.css"] 
                
            });
    },
    "dashboard": function(req, res, next){
        res.render('layout', 
            {   title: 'DKD Basic API', 
                content: '../pages/dashboard',
                navBar: true,
                styleSheets: ["/assets/stylesheets/dashboard.css"]
            });
    },
    "about": function(req, res, next){
        res.render('layout', 
            {   title: 'DKD Basic API', 
                content: '../pages/about',
                navBar: true,
                styleSheets: ["/assets/stylesheets/style.css"]
            });
    },
    "docs": function(req, res, next){
        res.render('layout', 
            {   title: 'DKD Basic API', 
                content: '../pages/docs',
                navBar: true,
                styleSheets: ["/assets/stylesheets/style.css"]
            });
    },
    "login": function(req, res, next){
        res.render('layout', 
            {   title: 'DKD Basic API', 
                content: '../views/partials/login',
                navBar: false,
                styleSheets: ["/assets/stylesheets/login.css"]
            });
    },
    "signup": function(req, res, next){
        res.render('layout', 
            {   title: 'DKD Basic API', 
                content: '../views/partials/signup',
                navBar: false,
                styleSheets: ["/assets/stylesheets/signup.css"]
            });
    }
};