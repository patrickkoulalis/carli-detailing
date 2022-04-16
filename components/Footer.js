import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
	return (
		<footer className="text-white bg-brand section">
			<div className="container">
				<div className="grid grid-lg-25">
					<div className="flex-col flow">
						<Link href="/">
							<a className="logo">
								Carli&apos;s |{' '}
								<span className="text-dark">
									<b>Auto Spa</b>
								</span>
							</a>
						</Link>
						<p>
							<b>Email</b> -{' '}
							<a href="mailto:carli@cardetailingpa.com">
								carli@cardetailingpa.com
							</a>
						</p>
						{/* <p>
							<b>Phone</b> - <a href="tel:+17245551234">724.555.1234</a>
						</p> */}
					</div>
					<div className="flex-col">
						<h3 className="font-size-24">Detailing Package</h3>
						<ul>
							<li>High Speed</li>
							<li>Exterior Wash</li>
							<li>Exterior Deluxe</li>
							<li>Interior Deluxe</li>
						</ul>
					</div>
					<div className="flex-col">
						<h3 className="font-size-24">Areas Served</h3>
						<div className="grid grid-lg-50">
							<ul>
								<li>Freeport</li>
								<li>Kittanning</li>
								<li>Saxonburg</li>
								<li>Butler</li>
								<li>New Kensington</li>
							</ul>
							<ul>
								<li>West Hills</li>
								<li>Lenape Heights</li>
								<li>Worthington</li>
								<li>Craigsville</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
