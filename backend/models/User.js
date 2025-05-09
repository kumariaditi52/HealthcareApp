


// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' },
//     phone: { type: String },
//     isVerified: { type: Boolean, default: false },
//     otp: { type: Number }, // Add OTP field
//     otpVerified: { type: Boolean, default: false }, // Add OTP verification flag
// });

// module.exports = mongoose.model('User', UserSchema);



const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true, required: true }, // Unique & Sparse
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['admin', 'doctor', 'patient'], 
        default: 'patient' 
    },
    phone: { type: String },
    isVerified: { type: Boolean, default: false },
    otp: { type: Number },                // OTP field
    otpVerified: { type: Boolean, default: false },  // OTP verification flag
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
