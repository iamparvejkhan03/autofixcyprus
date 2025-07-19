import { contactEmail } from "../utils/nodemailer.js";

const contact = async (req, res) => {
    try {
        let { email, name, phone, subject, message } = req.body;

        if(!email || !name || !phone || !message){
            return res.status(400).json({success:false, message:'All fields are required.'});
        }

        let sendEmail = await contactEmail(name, email, phone, subject=subject || 'User Query', message);

        if(!sendEmail){
            return res.status(500).json({success:false, message:'Message Failed'});
        }

        return res.status(200).json({success:true, message:'Message Sent'});
    } catch (error) {
        throw new Error(error);
    }
}

export default contact;