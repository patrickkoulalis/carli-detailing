import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

function faqs() {
	return (
		<Layout>
			<section className="page-header">
				<div className="container flow">
					<h1 className="font-size-64 text-center text-brand">FAQs</h1>
					<h2 className="font-size-32 text-center">
						Car Wash And Detailing Frequently Asked Questions
					</h2>
					<p className="text-center">
						Include buffing, restoring, and surpassing the original condition of
						the exterior constituents of a vehicle, such as tires, windows and
						wheels, among other visible components.
					</p>
					<details>
						<summary className="font-weight-900">
							WHAT ARE THE SUV CAR SIZES?
						</summary>
						<div>
							<p>...Big?</p>
						</div>
					</details>
					<details>
						<summary className="font-weight-900">
							{' '}
							IS YOUR WASH REALLY 100% BY HAND?
						</summary>
						<div>
							<p>Yes! Your car is washed 100% by hand...two of them in fact.</p>
						</div>
					</details>
					<details>
						<summary className="font-weight-900">
							CAN I LEAVE MY CAR TO GO EAT OR RUN AN ERRAND?
						</summary>
						<div>
							<p>
								Yea, just don&apos;t eat in your car after it&apos;s finished!
							</p>
						</div>
					</details>
					<details>
						<summary className="font-weight-900">
							DO ANY OF YOUR CHEMICALS DAMAGE THE TINT ON MY WINDOW?
						</summary>
						<div>
							<p>
								No, all of our chemicals are completely safe for all parts of
								your car.
							</p>
						</div>
					</details>
				</div>
			</section>
			<section className="bg-dark text-white text-center flow">
				<h2 className="font-size-48">Schedule an Appointment</h2>
				<p className="font-size-24">
					We make every detail count beacuse we know how much you love your car.
				</p>
				<Link href="/contact">
					<a className="button">Book Now</a>
				</Link>
			</section>
		</Layout>
	);
}

export default faqs;
