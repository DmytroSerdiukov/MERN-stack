import Router from 'express'
import path from 'path'
import multer from 'multer'
const router = Router()

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      res.status(400).json({msg: err})
    } else {
      if(req.file == undefined){
          res.status(400).json({msg: "Error: No File Selected!"})
      } else {
        // res.render('index', {
        //   msg: 'File Uploaded!',
        //   file: `uploads/${req.file.filename}`
        // });
        res.status(200).json({photo: `uploads/${req.file.filename}`})
      }
    }
  });
});

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('img');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

export default router