import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<>
			<header className="top bg-dark">
				<div className="container">
					<Link href="/">
						<a className="logo text-white">
							Carli&apos;s |{' '}
							<span className="text-brand font-weight-900">Auto Spa</span>
						</a>
					</Link>
					<input id="menu" type="checkbox" name="menu" />
					<label className="menu-toggle" htmlFor="menu" role="menu">
						<span className="hamburger"></span>
					</label>
					<nav className="nav-main">
						<ul>
							{/* <li>
								<Link href="/why">
									<a className="">Why Us?</a>
								</Link>
							</li> */}
							<li>
								<Link href="/services">
									<a className="">Services</a>
								</Link>
							</li>
							<li>
								<Link href="/faqs">
									<a className="">FAQs</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a className="">Contact</a>
								</Link>
							</li>
						</ul>
					</nav>
					<span className="top__phone font-large push-right font-weight-900 hidden-lg">
						<a href="tel:+17245551234" className="text-brand">
							724<span className="text-white">.</span>555
							<span className="text-white">.</span>1234
						</a>
					</span>
				</div>
			</header>
			<div className="mobile-cta">
				<span className="font-weight-400">Call Us</span> 724.555.1234
			</div>
		</>
	);
}

export default Navbar;
