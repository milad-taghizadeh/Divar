const { model, Schema } = require("mongoose");

const OTPSchema = new Schema({
    code: { type: String, required: false, default: undefined },
    expiresIn: { type: Number, required: false, default: 0 }
});

const userSchema = new Schema({
    fullName: { type: String, required: false },
    phoneNumber: { type: String, required: true, unique: true },
    otp: { type: OTPSchema },
    verifiedMobile: { type: Boolean, required: true, default: false }
}, { timestamps: true });

const UserModel = model("User", userSchema)
module.exports = {UserModel}