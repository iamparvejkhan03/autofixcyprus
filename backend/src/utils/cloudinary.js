import { v2 as cloudinary } from 'cloudinary';

const configureCloudinary = () => {
    try {
        const configured = cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        if(configured){
            return true;
        }
    } catch (error) {
        throw new Error(error);
    }
}

const uploadOnCloudinary = async (file) => {
    try {
        const upload = await cloudinary.uploader.upload(file.path);

        if(!upload) return false;

        return upload.secure_url;
    } catch (error) {
        throw new Error(error);
    }
}

export { configureCloudinary, uploadOnCloudinary }