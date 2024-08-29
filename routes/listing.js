const express=require('express');
const router = express.Router({mergeParams:true});
const Listing=require('../models/listing.js')
const {isLoggedIn,isOwner,validateListing}=require('../middleware.js')
const wrapAsync=require('../utils/wrapAsync.js');
const listingController=require("../controllers/listings.js")
const multer =require('multer');
const {storage}=require('../cloudConfig.js')
const upload=multer({storage})



router.route('/')
.get(wrapAsync(listingController.index))
// .post(isLoggedIn,validateListing,wrapAsync(listingController.createListing));
.post(
    isLoggedIn,
    
    upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing),
        (req,res)=>{
    res.send({
        message: 'File uploaded successfully to Cloudinary',
        url: req.file.path, // URL of the uploaded file on Cloudinary
    });
})
// new route
router.get('/new',isLoggedIn, listingController.renderNewForm);

router.route('/:id')
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


 
 //edit
 router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm)
 );




 router.get('/category/:category',wrapAsync(listingController.category));


 //delete

 router

 module.exports= router;
