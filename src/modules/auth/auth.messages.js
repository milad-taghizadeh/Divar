const AuthMessage = Object.freeze({
    sendOtpOk: "OTP sent successfully",
    NotFoundUser: "User not found !!!",
    OtpCodeNotExpired: "OTP code is not expired !!!! please try again later",
    OtpCodeIsExpired: "OTP code is expired !!!! get a new code",
    OtpCodeIsIncorrect: "OTP code is valid !!!! authentication failed",
    LoginSuccessfully: "Login successfully !!",
    LogoutSuccessfully: "Logout successfully !!"
})

module.exports = { AuthMessage }