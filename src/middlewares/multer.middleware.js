import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // Set the filename for the uploaded file

    cb(null, file.originalname);
  },
});

// Create the upload middleware
export const upload = multer({ storage: storage });
