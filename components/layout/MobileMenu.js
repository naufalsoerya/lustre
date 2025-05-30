'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")
	const [isAccordion, setIsAccordion] = useState(0)
	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>
			<nav id="mainnav-mobi" className={`mainnav style1 ${isMobileMenu ? 'active' : ''}`}>
				<div id="logo-mobie" className="logo">
					<a href="index.html" rel="home">
						<img src="images/logo.png" alt="image" />
					</a>
				</div>
				<ul className="menu">
					<li className={`${checkParentActive(["/homev2", "/homev3"])}`}>
						<Link href="/">Home page</Link>
						{/* <span className="btn-submenu" onClick={() => handleAccordion(1)} />
						<ul className="submenu" style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/")}`}><Link href="/">Home V.1</Link></li>
							<li className={`item ${checkCurrentMenuItem("/homev2")}`}><Link href="/homev2">Home V.2</Link></li>
							<li className={`item ${checkCurrentMenuItem("/homev3")}`}><Link href="/homev3">Home V.3</Link></li>
						</ul> */}
					</li>
					<li className={`item ${pathname === "/about" ? "current-menu-item" : ""}`}><Link href="/about">About us</Link></li>
					<li className={`${checkParentActive(["/event", "/event-details"])}`}>
						<Link href="/#">Our Events</Link>
						<span className="btn-submenu" onClick={() => handleAccordion(2)} />
						<ul className="submenu" style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/event")}`}><Link href="/event">Events</Link></li>
							<li className={`item ${checkCurrentMenuItem("/event-details")}`}><Link href="/event-details">Events Details</Link></li>
						</ul>{/* /.submenu */}
					</li>
					<li className={`${checkParentActive(["/blog", "/blog-single"])}`}>
						<Link href="/#">Latest News</Link>
						<span className="btn-submenu" onClick={() => handleAccordion(3)} />
						<ul className="submenu" style={{ display: `${isAccordion === 3 ? "block" : "none"}` }}>
							<li className={`item ${checkCurrentMenuItem("/blog")}`}><Link href="/blog">Blogs</Link></li>
							<li className={`item ${checkCurrentMenuItem("/blog-single")}`}><Link href="/blog-single">Blogs Single</Link></li>
						</ul>{/* /.submenu */}
					</li>
					<li className={`item ${pathname === "/contact" ? "current-menu-item" : ""}`}><Link href="/contact">Contact us</Link></li>
				</ul>{/* /.menu */}
			</nav>
			<div className={`overlay-menu-mobie ${isMobileMenu ? 'active' : ''}`} onClick={handleMobileMenu}>
				<div className="close-btn">
					<span className="close-menus" />
				</div>
			</div>

		</>
	)
}
