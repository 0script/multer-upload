const express=require('express');
const multer=require('multer');
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//static file
app.use(express.static('./'));
app.use(express.static('uploads'));


//multer configuration after setting static dir
const storage=multer.diskStorage({
    destination:function (req, file, cb) {
      cb(null, './uploads');
    },
    filename:function (req, file, cb) {
      
      //date will be stored in iso8608 format yyyy-mm-dd
      const date=new Date();
      const year=date.getFullYear();
      const month=`${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1}`;
      const day=`${date.getDate()}`;
      const name=req.body.name.replace(/\s+/g, '')
      
      const uniqueSuffix=`Date_${year}_${month}_${day}-${Math.round(Math.random() * 1E9)}`;
      
      console.log(file.mimetype);
      
      cb(null, name + '-' + uniqueSuffix + '.' + file.mimetype.toString().replace('image/',''));
    }
});

const upload=multer({storage:storage});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/upload_files',upload.single('files'),uploadFiles);

function uploadFiles(req,res){
    console.log(req.body);
}

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000 .... `);
});