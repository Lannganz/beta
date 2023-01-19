const time = require("moment-timezone");
const {
	getHashedPassword
} = require("../library/functions");
const {
	myEmail
} = require("../library/settings");
const {
	sendEmail
} = require("../library/nodemailer");
const {
	htmlPassword
} = require("./config");


module.exports.sendMailRegister = (mailOptions) => {
	sendEmail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log(`[ ${time.tz("Asia/Jakarta").format("HH:mm")} ] Success register email: ${info.accepted}`);
		}
	});
};

module.exports.sendMailPassword = (email, url) => {
	sendEmail({
		from: user,
		to: email,
		subject: "FXACB API || CHANGE PASSWORD",
		html: htmlPassword(url)
	}, function (error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log(`[ ${time.tz("Asia/Jakarta").format("HH:mm")} ] Email: ${email} Want to change password`);
		}
	});
};
