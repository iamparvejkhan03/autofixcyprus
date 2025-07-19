import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const contactEmail = async (name, email, phone, subject, message) => {
    try {
        const info = await transporter.sendMail({
            from: `"Autofix Cyprus" <${process.env.EMAIL_USER}>`,
            to: `${process.env.EMAIL_USER}`,
            subject: `${subject}`,
            text: `${message}`,
            html: `
                    <p><b>Full Name:</b> ${name}</p>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Phone No.:</b> ${phone}</p>
                    <p><b>Subject:</b> ${subject}</p>
                    
                    <p>
                        <b>Message:</b> <br />
                         ${message}
                    </p>
                    `,
        });

        if(info) return true;
    } catch (error) {
        throw new Error(error);
    }
}

const requestEmail = async (name, email, phone, address, incidentDate='', incidentLocation='', damageDescription, insuranceSupport, mechanicServices, pickupDelivery, rentalCar, photos=[]) => {
    try {
        const info = await transporter.sendMail({
            from: `"Autofix Cyprus" <${process.env.EMAIL_USER}>`,
            to: `${process.env.EMAIL_USER}`,
            subject: `New Request`,
            // text: `${message}`,
            html: `
                    <p><b>Full Name:</b> ${name}</p>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Phone No.:</b> ${phone}</p>
                    <p><b>Address:</b> ${address}</p>
                    <p><b>IncidentDate:</b> ${incidentDate}</p>
                    <p><b>IncidentLocation:</b> ${incidentLocation}</p>
                    <p><b>InsuranceSupport:</b> ${insuranceSupport === 'true' ? 'Yes' : 'No'}</p>
                    <p><b>MechanicServices:</b> ${mechanicServices === 'true' ? 'Yes' : 'No'}</p>
                    <p><b>PickupDelivery:</b> ${pickupDelivery === 'true' ? 'Yes' : 'No'}</p>
                    <p><b>RentalCar:</b> ${rentalCar === 'true' ? 'Yes' : 'No'}</p>
                    <br />
                    <p><b>DamageDescription:</b> ${damageDescription}</p>
                    <br />
                    <p><b>Photos:</b><br /> ${photos.map(photo => `<a href='${photo}'>${photo}</a><br/><br />`)}</p>
                    `,
        });

        if(info) return true;
    } catch (error) {
        throw new Error(error);
    }
}

export { contactEmail, requestEmail }