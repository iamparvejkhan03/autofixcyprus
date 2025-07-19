import express from 'express';
import 'dotenv/config';
import { configureCloudinary } from './utils/cloudinary.js';
import contact from './controllers/contact.controller.js';
import cors from 'cors';
import upload from './utils/multer.js';
import request from './controllers/request.controller.js';

const app = express();
const PORT = 3000;


app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({limit:'16kb'}));
app.use(cors());
configureCloudinary();

app.get('/api/v1/', (req, res) => res.send('Welcome Back!'));

app.post('/api/v1/contact', contact);
app.post('/api/v1/request-repair', upload.array('photos', 6), request);

app.listen(PORT || 3000, () => console.log(`Server is running on ${PORT || 3000}`));

export default app;