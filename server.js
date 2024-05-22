/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/


/* ***********************
 * Require Statements
 *************************/
const express = require("express")
/*
We tell the application to require express-ejs-layouts, so 
it can be used. This follows a simple rule, "You have to 
have something in order to use it".
*/
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")



/* ***********************
 * View Engine and Templates
 *************************/
/*
We declare that ejs will be the view engine for our application. 
Built into EJS is the undestanding that all views will be stored 
in a "views" folder, and that is where EJS will look for all view 
files.
*/
app.set("view engine", "ejs")
/*
We tell the application to use the express-ejs-layouts package, 
which has been stored into a "expressLayouts" variable. 
*/
app.use(expressLayouts)
/*
This line says that when the express ejs layout goes looking for 
the basic template of a view, it will find it in the "layouts" 
folder, and the template will be named "layout".
*/
app.set("layout", "./layouts/layout") // not at views root



/* ***********************
 * Routes
 *************************/
app.use(static)

//Index route
/*
app.get - The espress application will watch the "get" object, 
          within the HTTP Request, for a particular route.

"/" - This is route being watched. It indicates the base route 
      of the application or the route which has no specific re- 
      source requested.

res.render() - The "res" is the response object, while "render()" 
               is and Express function that will retrieve the spe-
               cified view - "index" - to be sent back to the 
               browser.

{title:"Home"} - The curly braces are an object (treated like a 
                 variable), which holds a name - value pair. This 
                 object supplies the value that the "head" partial 
                 file expects to receive. The object is passed to 
                 the view. 

}) - The right curly brace closes the function, while the right 
     parentheses closes the "get" route.
*/
app.get("/", function(req, res) {
  res.render("index", {title: "Home"})
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST



/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
