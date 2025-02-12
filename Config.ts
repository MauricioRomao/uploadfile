import multer  from "multer";
import path from "path"


export const storage = multer.diskStorage({
   destination:(req, File, callback) =>{
        callback(null, path.resolve("Uploads"));
   },
   filename: (req, file, callback) =>{
    const time = new Date().getTime();




    callback(null, `${time}_${file.originalname}`)
   },
   

})