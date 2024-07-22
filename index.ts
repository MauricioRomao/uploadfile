import express from "express"
import multer from "multer"
import { storage } from "./Config"

const upload = multer({ storage : storage})
const app = express()

app.post("/upload", upload.single("file"), (req, res )=>{
    return res.json(req.file?.filename)
})

app.listen(3000)