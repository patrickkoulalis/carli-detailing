import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import formatMoney from '../util/formatMoney';

const vehicleTypes = [
	{
		name: 'Sedan',
		description:
			'MERCEDES C-CLASS, BMW-3 SERIES, AUDI-A4, TOYOTA CAMARY, HONDA ACCORD, INFINITI Q50AND SIMILAR',
	},
	{
		name: 'Small SUV',
		description:
			'MERCEDES GL350, BMW X3, HONDA CRV, TOYOTA RAV-4, VOLKSWAGEN TIGUAN, ACURA RDX AND SIMILAR',
	},
	{
		name: 'Large SUV',
		description:
			'DODGE JOURNEY, CHEVROLET EQUINOX, TOYOTA HIGHLANDER, INFINITI QX60, MERCEDES ML350 AND SIMILAR',
	},
	{
		name: 'X-Large SUV',
		description:
			'CADILLAC ESCALADE, CHEVROLET SUBURBAN, FORD EXPEDITION, GMC YUKON XL, INFINITI QX80 AND SIMILAR',
	},
];

const packages = [
	{
		name: 'High Speed P1',
		id: 'P1',
		duration: '60 min',
		price: [4000, 4500, 5000, 6000],
		includes: [
			'Exterior Car – Hand Washed',
			'Wheels and Rims',
			'Interior & Exterior Windows',
		],
	},
	{
		name: 'Exterior Wash w/ Extra Interior P2',
		id: 'P2',
		duration: '60 min',
		price: [8000, 9000, 10000, 11900],
		includes: [
			'Dust Dashboard and Console',
			'Entire Vacuum',
			'Dust Vents',
			'Openings & Electronics',
		],
	},
	{
		name: 'Exterior Deluxe P3',
		id: 'P3',
		duration: '60 min',
		price: [11900, 12900, 15900, 15900],
		includes: [
			'Tires Dressed',
			'Exterior rubber silicone treated',
			'Exterior Simonized',
			'Door and jambs waxed',
		],
	},
	{
		name: 'Interior Deluxe P4',
		id: 'P4',
		duration: '60 min',
		price: [13900, 15900, 17500, 19900],
		includes: [
			'Interior & Exterior Windows',
			'Dust Dashboard and Console',
			'Dust Vents',
			'Openings & Electronics',
			'Vinyl & Leather reconditioned',
			'Upholstery & Carpet Shampoo and Vacuum',
		],
	},
	{
		name: 'Deluxe Omni Clean P5',
		id: 'P5',
		duration: '60 min',
		price: [18900, 22900, 27900, 34900],
	},
];

const initalFormState = {
	name: '',
	email: '',
	phone: '',
	vehicle: '',
	vehicleTypeName: '',
	packageName: '',
	packagePrice: '',
};

function BookingForm() {
	const [vehicleType, setVehicleType] = useState(0);
	const [packageType, setPackageType] = useState(0);

	const [formState, setFormState] = useState(initalFormState);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		fetch('/api/mail', {
			method: 'POST',
			body: JSON.stringify(formState),
		}).then((res) => {
			console.log('Response received');
			setVehicleType(0);
			setPackageType(0);
			setFormState(initalFormState);
			if (res.status === 200) {
				console.log('Response succeeded!');
				// setSubmitted(true);
			}
		});
	};

	return (
		<section>
			<div className="container flow">
				<form method="POST" action="" onSubmit={handleFormSubmit}>
					<h3>1. Contact Information</h3>
					<h4 className="font-weight-400">SELECT VEHICLE TYPE BELOW.</h4>

					<div className="grid grid-md-50">
						<label>
							<span className="block">Full Name</span>
							<input
								type="text"
								name="name"
								value={formState['name']}
								onChange={(e) =>
									setFormState({ ...formState, name: e.target.value })
								}
							/>
						</label>

						<label>
							<span className="block">Email</span>
							<input
								type="email"
								name="email"
								value={formState['email']}
								onChange={(e) =>
									setFormState({ ...formState, email: e.target.value })
								}
							/>
						</label>

						<label>
							<span className="block">Phone Number</span>
							<input
								type="tel"
								name="phone"
								value={formState['phone']}
								onChange={(e) =>
									setFormState({ ...formState, phone: e.target.value })
								}
							/>
						</label>

						<label>
							<span className="block">Vehicle Make and Model</span>
							<input
								type="text"
								name="make-model"
								value={formState['vehicle']}
								onChange={(e) =>
									setFormState({ ...formState, vehicle: e.target.value })
								}
							/>
						</label>
					</div>

					<h3>2. Vehicle Type</h3>
					<h4 className="font-weight-400">SELECT VEHICLE TYPE BELOW.</h4>

					<ul className="package-select grid grid-50 grid-lg-25 padding-zero margin-zero">
						{vehicleTypes.map((type, i) => (
							<li
								className={i === vehicleType && 'selected'}
								key={i + Date.now()}
								onClick={() => {
									setVehicleType(i);
									setFormState({
										...formState,
										vehicleTypeName: vehicleTypes[i].name,
									});
								}}
							>
								<span className="text-bold">{type.name}</span>
								<span className="block">{type.description}</span>
								<button className="link" disabled={i === vehicleType}>
									Select
								</button>
							</li>
						))}
						<input
							type="hidden"
							name="vehicle-type"
							value={vehicleTypes[vehicleType].name}
						/>
					</ul>

					<h3>3. Select Package</h3>
					<h4 className="font-weight-400">
						WHICH PACKAGE IS BEST FOR YOUR VEHICLE?
					</h4>

					<ul className="package-select grid grid-50 grid-lg-25 padding-zero margin-zero">
						{packages.map((el, i) => (
							<li
								className={i === packageType && 'selected'}
								key={i + Date.now()}
								onClick={() => {
									setPackageType(i);
									setFormState({
										...formState,
										packageName: packages[i].name,
										packagePrice: formatMoney(packages[i].price[vehicleType]),
									});
								}}
							>
								<span className="text-bold">{el.name}</span>
								<span className="block font-size-24 text-brand text-bold">
									{formatMoney(el.price[vehicleType])}
								</span>
								{/* <span className="block">Time: {el.duration}</span> */}
								<button className="link" disabled={i === packageType}>
									Select
								</button>
							</li>
						))}
					</ul>
					<button type="submit" className="button">
						Submit Booking Request
					</button>
				</form>
			</div>
		</section>
	);
}

export default BookingForm;
