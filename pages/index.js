import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import handsBubbles from '../public/hands-bubbles.svg';

export default function Home() {
	return (
		<Layout>
			<section className="masthead">
				<div className="container">
					<h1 className="text-white">
						Best Car{' '}
						<span className="text-brand font-weight-900">Detailing</span> in
						<span className="font-weight-400 "> Pennsylvania</span>
					</h1>
				</div>
			</section>

			<section className="intro">
				<div className="container bg-brand-light flow">
					<h2>Car Detailing Expert</h2>
					<p>
						Carli’s Auto Spa has an attention to detail that you can not find
						anywhere else. With years of experice making things shine like new
						you might think you got a brand new car when we get through with it.{' '}
					</p>
					<div className="grid grid-lg-33">
						<ul className="font-weight-900 margin-zero">
							<li>Expertly Hand Washed Vehicles</li>
							<li>Clean windows in and out</li>
							<li>Interior thorough wipe down</li>
						</ul>
						<ul className="font-weight-900 margin-zero">
							<li>Loudly Vacummed interior</li>
							<li>Meticulously Cleaned Vents</li>
						</ul>
						<ul className="font-weight-900 margin-zero">
							<li>Clean glove box</li>
							<li>Clean and organize trunk</li>
						</ul>
					</div>
					<Link href="/booking">
						<a className="button">Book Now</a>
					</Link>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="grid grid-lg-33">
						<div className="card card--dark flow flex-col-33">
							<div className="card__icon">
								<img src={handsBubbles.src} alt="" />
							</div>
							<h3>HIGH SPEED</h3>
							<span className="text-brand font-weight-900 font-size-64">
								$40
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
							<Link href="/booking">Book Now</Link>
						</div>

						<div className="card card--dark flow flex-col-33">
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
							<Link href="/booking">Book Now</Link>
						</div>

						<div className="card card--dark flow flex-col-33">
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
							<Link href="/booking">Book Now</Link>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container flow">
					<h2 className="text-center font-size-48">
						What our clients are saying
					</h2>
					<div className="testimonial flex-row">
						<div className="testimonial__meta">
							<Image
								src="/unsplash_rriAI0nhcbc.png"
								alt=""
								height="135"
								width="135"
								loading="lazy"
							/>
							<span className="text-brand block font-weight-900">Ryan S.</span>
						</div>
						<blockquote>
							“The work Carli does is absolutly amazing. She goes above and
							beyond everytime treating every car like it’s her own. She is
							hands down the best detailer around and I couldn’t imagine
							trusting anyone else with my car.”
						</blockquote>
					</div>
				</div>
			</section>

			<section className="bg-dark text-white text-center flow">
				<h2 className="font-size-48">Schedule an Appointment</h2>
				<p className="font-size-24">
					We make every detail count beacuse we know how much you love your car.
				</p>
				<Link href="/booking">
					<a className="button">Book Now</a>
				</Link>
			</section>
		</Layout>
	);
}
