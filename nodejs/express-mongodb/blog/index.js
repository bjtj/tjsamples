const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost.js')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const flash = require('connect-flash');

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

const validateMiddleWare = require('./middleware/validateMiddleware')
const authMiddleWare = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

const app = new express()
const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(expressSession({
    secret: 'keyboard cat'
}))

// Conditionally Display New Post, Login And New User Links
global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
})

// const validateMiddleWare = (req, res, next) => {
//     if (req.files == null || req.body.title == null | rq.body.title == null) {
// 	return res.redirect('/posts/new')
//     }
//     next()
// }
app.use('/posts/store', validateMiddleWare)

app.use(flash());

app.listen(3000, () => {
    console.log('App listening on port 3000')
})

// app.get('/', async (req, res) => {
//     const blogposts = await BlogPost.find({})
//     res.render('index', {
// 	blogposts
//     })
// })
app.get('/', homeController)

// app.get('/about', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/about.html'))
//     res.render('about')
// })

// app.get('/contact', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
//     res.render('contact')
// })

// app.get('/post', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
//     res.render('post')
// })

// app.get('/posts/new', (req, res) => {
//     res.render('create')
// })
app.get('/posts/new', authMiddleWare, newPostController)

// app.post('/posts/store', (req, res) => {
//     console.log(req.body)
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
// 	await BlogPost.create({
// 	    ...req.body,
// 	    image: '/img/' + image.name
// 	})
// 	res.redirect('/')
//     })
// })
app.post('/posts/store', authMiddleWare, storePostController)

// app.get('/post/:id', async (req, res) => {
//     const blogpost = await BlogPost.findById(req.params.id)
//     res.render('post', {
// 	blogpost
//     })
// })
app.get('/post/:id', getPostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)

app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)

app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/auth/logout', logoutController)

app.use((req, res) => res.render('notfound'))
