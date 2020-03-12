exports.homePage=(req,res)=>{
    console.log(req.name);
    req.flash('error',"something happened")
    req.flash('warning',"something happened")
    req.flash('info',"something happened")
    req.flash('success  ',"something happened")
    res.render('index');
};

const mongoose=require('mongoose');
const Store=mongoose.model('Store');

exports.addStore=(req,res)=>{
    res.render('editStore',{title:'Add Store'});
};

exports.createStore=async (req,res)=>{
    // res.json(req.body);
    const store=await(new Store(req.body)).save();
    req.flash('success',"successfully created")
    res.redirect(`/store/${store.slug}`);
};

exports.getStores=async (req,res)=>{
    //Query the database for list of all stores
    const stores=await Store.find();
    res.render('stores',{title:'Stores',stores});
}