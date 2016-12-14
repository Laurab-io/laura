(function (express,server){
    server.use(express.static("public"));
    server.get('/', function(req,res){
        res.redirect('index.html');
    });
    server.listen(process.env.PORT,
                    process.env.IP);
    
    
})(
    require('express'),
  require('express')()
  
  );