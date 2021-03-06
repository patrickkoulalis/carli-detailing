import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import Script from 'next/script';
import '@fontsource/poppins';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/900.css';

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Carli&apos;s Auto Spa | Pennsylvania</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-QDKQ1CXZ4T"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-QDKQ1CXZ4T');`}
			</Script>

			<Script id="heap-analytics" strategy="afterInteractive">
				{`  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("1565975348");`}
			</Script>

			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
