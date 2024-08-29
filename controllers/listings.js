const Listing= require("../models/listing")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index=async (req,res)=>{
    const allListings= await Listing.find({});
   res.render('index.ejs',{allListings}) 
    }

    module.exports.renderNewForm=(req,res)=>{


        res.render('new.ejs');
         }

   module.exports.showListing=async(req,res,next)=>{
    let {id}=req.params;
  
    const Details= await Listing.findById(id).populate({path:'reviews',populate:{path:'author'}}).populate("owner");
    if(! Details){
      req.flash("error","Requested Listing don't exist");
      res.redirect('/listings');
    }
  
  res.render('show.ejs',{Details});
  
  
   }      

   module.exports.createListing=async (req,res,next)=>{
  
    let response =await geocodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit:2,
    })
    .send();


let url=req.file.path;
let filename=req.file.path

    const newListing=new Listing(req.body.listing);
   

    newListing.owner=  req.user._id;
    newListing.image={url,filename}
    newListing.geometry=response.body.features[0].geometry;
    
    await newListing.save()
        req.flash("success","New Listing Created");
        res.redirect('/listings');
       
        
 }

 module.exports.renderEditForm=async(req,res)=>{
    try{
    let {id}=req.params;
const listing= await Listing.findById(id);

if(!listing){
    req.flash("error","Listing You ");
    res.redirect("/listings");
}

let originalImageUrl=listing.image.url;
originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");
res.render('edit.ejs',{id,listing,originalImageUrl})}
catch(e){
    console.log(e);
}
 }
 module.exports.updatelisting = async (req, res) => {
  let { id } = req.params;

  // Fetch the listing and update it with new data
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

  // Geocode the updated location and update the coordinates
  let response = await geocodingClient
    .forwardGeocode({
      query: listing.location,
      limit: 2,
    })
    .send();
  listing.geometry = response.body.features[0].geometry;

  // Handle image upload, if any
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.path;
    listing.image = { url, filename };
  }

  // Save the updated listing with all changes
  await listing.save();

  req.flash("success", "Listing updated successfully");
  res.redirect(`/listings/${id}`);
};


    module.exports.destroyListing=async(req,res,next)=>{
        let {id}=req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success","listing deleted successfully")
    
        res.redirect('/listings');
    
     }

     module.exports.category=async (req, res) => {
        try {
          const category = req.params.category;
          const allListings = await Listing.find({ category });
        //   res.json(listings);
          res.render("index.ejs",{allListings})
        } catch (err) {
          res.status(500).json({ message: "Server Error" });
        }
      }