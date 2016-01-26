# Basic API Frontend
## Your everyday frontend set of pages

### What is it
Basic frontpage pages rendered with Bootstrap for use in general APIs; build on ExpressJS however the views, partials, pages, and assets can be used with any backend.

### What this is for
When setting up a site, whether a full-fledged website or a simple REST API, this set of pages represents a quick starting point for building new pages, a CMS, or an API tied to a backend and database.

### How to use it
Maybe, like me, you want a quick set of page templates to throw on top of your backend. Just copy of the views, partials and pages, and plop them into your system. These pages were built on top of ExpressJS and use EJS as a templating engine. EJS is widely compatible with many many backends.

#### About views, partials and pages
The page layout is built similar to popular static site generators such as Jekyll or DocPad. In general, your server should render the layout first, then select the appropriate partials - most importantly the header and footer - and then insert the actual content from the 'pages' folder.

#### About the Controller
This backend is built on ExpressJS and the app is structured using MVC concepts. The controller directs what action should happen based on what the router sends it. When using these EJS templates, the following options are required to be sent to the template from the server in the form of a JavaScript object:

```
var options = {
                title: 'My Page Title', 
                content: '../path/to/content',
                navBar: true; // when false the Bootstrap navbar will not show
                styleSheets: [
                    "../path/to/this/pages/own/style.css", 
                    "../another/unique/stylesheet.css"
                ]
                // Note: This is not for sitewide stylesheets like Bootstrap
                // It is only meant to specialized css files appearing on certain pages
            };

};

// Render the page in ExpressJS, with "layout.ejs" as the main layout template:
res.render('layout', options);
```

Want to build it on top of ExpressJS? Just clone this repo in your workspaces. Otherwise, grab the various HTML and EJS components as needed.