if(process.env.Node_ENV != "production"){
    require('dotenv').config();
}

const express=require('express');
const app=express();
const port=8080;
const path=require('path');
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const Listing=require('./models/listing.js')
const ejsMate=require('ejs-mate');
const ExpressError=require('./utils/ExpressError.js');

const session=require('express-session');
const MongoStore = require('connect-mongo');

const cookieParser=require('cookie-parser');
const flash=require('connect-flash');
const passport=require('passport');
const LocalStrategy=require("passport-local");
const User= require('./models/user.js');

const listingRouter=require("./routes/listing.js");
const reviewRouter=require('./routes/reviews.js');
const userRouter=require('./routes/user.js');

const dbUrl =process.env.ATLASDB_URL;

app.use(cookieParser())

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views/listings"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
 app.use(methodOverride('_method'))
app.engine('ejs',ejsMate);
main() .then(()=>
{
console.log('connected to database');
}
)
.catch(err=>{
    console.log(err);
})


async function main(){
    // mongodb://127.0.0.1:27017/wanderlust
    await mongoose.connect(dbUrl);
}

const store =MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter: 24*3600,
});

store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
});

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,

    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};






app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
})


// app.get("/demouser",async(req,res)=>{

// let fakeUser=new User({
//     email:"student@gmail.com",
//     username:"delta-student",
    
// });
//  let registerUser=await User.register(fakeUser,"hello");
// res.send(registerUser);
// });



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);


app.listen(port,()=>{
    console.log(`server is listening on port no.${port}`);
});




    
app.get('/',async(req,res)=>{
    const Details= await Listing.findById("66d0c63526142a4232ae6b3f");

res.render('home.ejs',{Details});
})

app.all('*',(req,res,next)=>{
    next(new ExpressError(404,"Page not Found"));
})
 
 app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong"}=err;
     res.status(statusCode).render('error.ejs',{message,err});
    // res.status(statusCode).send(message);
 })

