"use client"
import { useEffect } from "react"
import Layout from "../components/layout/Layout"
import About1 from "../components/sections/About1"
import Banner from "../components/sections/Banner"
import Benefit1 from "../components/sections/Benefit1"
import Blog from "../components/sections/Blog"
import Course1 from "../components/sections/Course1"
import Event1 from "../components/sections/Event1"
import Form1 from "../components/sections/Form1"
import Partner from "../components/sections/Partner"
import Slider1 from "../components/sections/Slider1"
import Team1 from "../components/sections/Team1"
import Testimonial1 from "../components/sections/Testimonial1"
export default function Home() {

	useEffect(() => {
		const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
		const clientKey = process.env.NEXT_PUBLIC_CLIENT;

		const script = document.createElement('script');
		script.src = snapScript;
		script.setAttribute('data-client-key', clientKey);
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		}
	}, []);

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<Slider1 />
				<Partner />
				<Course1 />
				<Benefit1 />
				{/* <About1 /> */}
				{/* <Event1 /> */}
				{/* <Testimonial1 /> */}
				{/* <Team1 /> */}
				{/* <Banner />
				<Blog />
				<Form1 />  */}
				<div className="graphic" />

			</Layout>
		</>
	)
}