import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import BookingForm from '../components/BookingForm';

function booking() {
	return (
		<Layout>
			<section className="page-header">
				<div className="container flow">
					<h1 className="font-size-64 text-center text-brand">Booking</h1>
					<h2 className="font-size-32 text-center">
						Book your car detailing appointment today!
					</h2>
					<p className="text-center">
						Request an appoint by filling out the form below.
					</p>
				</div>
			</section>

			<BookingForm />

			<section></section>
		</Layout>
	);
}

export default booking;
