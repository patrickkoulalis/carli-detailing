// Require:
var postmark = require('postmark');

export default async function handler(req, res) {
	const body = JSON.parse(req.body);

	if (req.method === 'POST') {
		// Send an email:
		var client = new postmark.ServerClient(
			'7522f55c-6c59-4d6a-942c-4a5c422ae68a'
		);

		await client.sendEmail({
			From: 'booking@cardetailingpa.com',
			To: 'carli@cardetailingpa.com',
			replyTo: 'booking@cardetailingpa.com',
			Subject: 'New Detailing Booking Request',
			HtmlBody: `<b>Full Name:</b> ${body.name} <br><b>Email:</b> ${body.email} <br><b>Phone:</b> ${body.phone} <br><b>Vehicle Type:</b> ${body.vehicleTypeName} <br><b>Package:</b> ${body.packageName} <br><b>Total:</b> ${body.packagePrice}`,
			TextBody: `${body.name} ${body.email} ${body.phone} ${body.vehicleTypeName} ${body.packageName} ${body.packagePrice}`,
			MessageStream: 'broadcast',
		});
		res.status(200).json({ name: 'John Doe' });
	}
}
