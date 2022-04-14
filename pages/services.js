import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import handsBubbles from '../public/hands-bubbles.svg';
import handsSparkles from '../public/hand-sparkles.svg';

function services() {
	return (
		<Layout>
			<section className="page-header">
				<div className="container flow">
					<h1 className="font-size-64 text-center text-brand">Services</h1>
					<h2 className="font-size-32 text-center">
						Car Wash And Detailing Services
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
					<div className="card card--dark flow">
						<div className="grid grid-lg-25">
							<span className="flow">
								<div className="card__icon">
									<img src={handsBubbles.src} alt="" />
								</div>
								<h3>HIGH SPEED</h3>
								<span className="text-brand font-weight-900 font-size-64">
									$40
								</span>
							</span>
							<span className="align-self-center">
								<p className="font-size-24">Includes</p>
								<ul>
									<li>Exterior Car – Hand Washed, </li>
									<li>Wheels and Rims, </li>
									<li>Interior &amp; Exterior Windows</li>
								</ul>
							</span>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="card__sparkle"
						>
							<path d="M324.4 103.1L384 128l24.88 59.63C410.3 190.3 413 192 416 192s5.75-1.75 7.125-4.375L448 128l59.63-24.88C510.3 101.8 512 99 512 96s-1.75-5.75-4.375-7.125L448 64l-24.88-59.62C421.8 1.75 419 0 416 0s-5.75 1.75-7.125 4.375L384 64l-59.63 24.88C321.8 90.25 320 93 320 96S321.8 101.8 324.4 103.1zM507.6 408.9L448 384l-24.88-59.63C421.8 321.8 419 320 416 320s-5.75 1.75-7.125 4.375L384 384l-59.63 24.88C321.8 410.3 320 413 320 416s1.75 5.75 4.375 7.125L384 448l24.88 59.63C410.3 510.3 413 512 416 512s5.75-1.75 7.125-4.375L448 448l59.63-24.88C510.3 421.8 512 419 512 416S510.3 410.3 507.6 408.9zM384 256c0-9.125-5.125-17.38-13.25-21.5l-104.9-52.38L213.5 77.25c-8.125-16.25-34.88-16.25-43 0L118.1 182.1L13.25 234.5C5.125 238.6 0 246.9 0 256s5.125 17.38 13.25 21.5l104.9 52.38l52.38 104.9C174.6 442.9 182.9 447.9 192 447.9s17.38-5.075 21.5-13.2l52.38-104.9l104.9-52.38C378.9 273.4 384 265.1 384 256zM237.3 290.5C232.6 292.9 228.9 296.6 226.5 301.3L192 370.4L157.5 301.3C155.1 296.6 151.4 292.9 146.8 290.5L77.63 256l69.13-34.5C151.4 219.1 155.1 215.4 157.5 210.8L192 141.6l34.5 69.13C228.9 215.4 232.6 219.1 237.3 221.5L306.4 256L237.3 290.5z" />
						</svg>
					</div>
					<div className="grid grid-lg-33">
						<div className="card card--light flow flex-col-33">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>EXTERIOR WASH</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$80
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>

						<div className="card card--gray-1 flow flex-col-33">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>EXTERIOR DELUXE</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$119
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>

						<div className="card card--gray-2  flow flex-col-33">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>INTERIOR DELUXE</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$139
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-dark text-white text-center flow margin-bottom-32">
				<h2 className="font-size-48">BOOK YOUR CAR DETAIL NOW!</h2>
				<Link href="/contact">
					<a className="button">Book Now</a>
				</Link>
			</section>

			<section>
				<div className="container flow">
					<h2 className="text-center font-size-48">
						<span className="text-brand">Premium </span>
						Detailing Services
					</h2>
					<div className="grid grid-lg-33">
						<div className="card card--dark flow">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>HIGH SPEED</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$189
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>

						<div className="card card--dark flow">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>EXTERIOR WASH</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$300
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>

						<div className="card card--dark flow">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>INTERIOR DELUXE</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$499
							</span>
							<p className="font-size-24">
								Includes Everything in High Speed{' '}
								<span className="text-brand font-weight-900">Plus</span>:
							</p>
							<ul>
								<li>Dust Dashboard and Console</li>
								<li>Entire Vacuum</li>
								<li>Dust Vents</li>
								<li>Openings &amp; Electronics</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="service-experts">
				<div className="container">
					<div className="grid grid-lg-50">
						<img src="/AdobeStock_465485786.jpg" alt="" />
						<div>
							<h2 className="text-center font-size-48">
								Expert
								<span className="text-brand"> Detailing Services</span>
							</h2>
							<p>
								When your car leaves our shop after our car wash and detailing,
								you are sure to think – that was just magic! Our full service
								car wash has no limit as with other ordinary car washes. And, if
								asked, we can also include the complete car cleaning service
								package including all the interior, and exterior lesser thought
								of parts of your car. The beauty is cleanly in the detail and we
								vow to make your car look and smell its absolute freshest. We
								can make maintaining your car washes and cleaning schedule
								easier when you reach out to us as we can take care of the
								entire car wash services under a single roof.
							</p>
						</div>
					</div>
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

export default services;
