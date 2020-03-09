// exports.myMiddleware=(req,res,next)=>{
//     req.name='shital';
//     next();
// };
exports.homePage=(req,res)=>{
    console.log(req.name);
    res.render('index');
};

const mongoose=require('mongoose');
const Store=mongoose.model('Store');

exports.addStore=(req,res)=>{
    res.render('editStore',{title:'Add Store'});
};

exports.createStore=async (req,res)=>{
    // res.json(req.body);
    const store=new Store(req.body);
    await store.save();
    res.redirect('/');
    
};