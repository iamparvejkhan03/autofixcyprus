import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { requestEmail } from "../utils/nodemailer.js";

const request = async (req, res) => {
    try {
        const { name, email, phone, address, incidentDate, incidentLocation, damageDescription, insuranceSupport, mechanicServices, pickupDelivery, rentalCar } = req.body;

        const photos = req.files;

        if(!name || !email || !phone || !address || !damageDescription || !photos){
            return res.status(400).json({success:false, message:'All fields are required.'});
        }

        const uploading = photos.map(photo => uploadOnCloudinary(photo));

        const uploaded = await Promise.all(uploading);

        if(!uploaded){
            return res.status(500).json({success:false, message:'Request Failed'});
        }

        const requested = await requestEmail(name, email, phone, address, incidentDate, incidentLocation, damageDescription, insuranceSupport, mechanicServices, pickupDelivery, rentalCar, uploaded);

        if(!requested){
            return res.status(500).json({success:false, message:'Request Failed'});
        }

        return res.status(200).json({success:true, message:'Request Sent'});
    } catch (error) {
        throw new Error(error);
    }
}

export default request;