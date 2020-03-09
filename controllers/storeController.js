exports.myMiddleware=(req,res,next)=>{
    req.name='shital';
    next();
};

exports.homePage=(req,res)=>{
    console.log(req.name);
    res.render('index');
};