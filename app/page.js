"use client"
import Layout from "../components/layout/Layout"
import Benefit1 from "../components/sections/Benefit1"
import Course1 from "../components/sections/Course1"
import Partner from "../components/sections/Partner"
import Slider1 from "../components/sections/Slider1"
export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
				<Slider1 />
				<Partner />
				<Course1 />
				<Benefit1 />
				<div className="graphic" />
			</Layout>
		</>
	)
}