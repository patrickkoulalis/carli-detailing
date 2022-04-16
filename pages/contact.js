import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

function contact() {
	return (
		<Layout>
			<section className="page-header">
				<div className="container flow">
					<h1 className="font-size-64 text-center text-brand">Contact</h1>
					<h2 className="font-size-24 text-center">
						Book an Appointment Today!
					</h2>
					<p className="text-center">
						Include buffing, restoring, and surpassing the original condition of
						the exterior constituents of a vehicle, such as tires, windows and
						wheels, among other visible components.
					</p>
				</div>
			</section>
			<section>
				<div className="container flow">
					<h3 className="font-size-32 text-center">Email</h3>
					<span className="font-size-24 text-brand text-center block">
						<a href="mailto:carli@cardetailingpa.com">
							carli@cardetailingpa.com
						</a>
					</span>
					{/* <h3 className="font-size-32 text-center">Phone</h3>
					<span className="font-size-24 text-brand text-center block">
						724.555.1234
					</span> */}
				</div>
			</section>
			<section className="bg-dark text-white text-center flow">
				<h2 className="font-size-48">Schedule an Appointment Today</h2>
				<p>
					<span className="text-brand font-size-64 font-weight-900 block">
						Get 10% off
					</span>
					<span className="font-size-32 font-weight-900">
						your first detail!
					</span>
				</p>
				<Link href="/booking">
					<a className="button">Book Now</a>
				</Link>
			</section>
		</Layout>
	);
}

export default contact;
