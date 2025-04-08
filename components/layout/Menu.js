'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>
			<ul className="menu">
				<li className={`${checkParentActive(["/homev2", "/homev3"])}`}>
					<Link href="/">Home</Link>
					{/* <ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/")}`}><Link href="/">Home V.1</Link></li>
						<li className={`item ${checkCurrentMenuItem("/homev2")}`}><Link href="/homev2">Home V.2</Link></li>
						<li className={`item ${checkCurrentMenuItem("/homev3")}`}><Link href="/homev3">Home V.3</Link></li>
					</ul> */}
				</li>
				<li className={`${checkParentActive(["/event-mens", "/event-womans", "/event-accessories", "/event-details"])}`}>
					<Link href="/#">Shop</Link>
					<ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/event-mens")}`}><Link href="/event-mens">Mens</Link></li>
						<li className={`item ${checkCurrentMenuItem("/event-womans")}`}><Link href="/event-womans">Womans</Link></li>
						<li className={`item ${checkCurrentMenuItem("/event-accessories")}`}><Link href="/event-accessories">Accessories</Link></li>
						{/* <li className={`item ${checkCurrentMenuItem("/event-details")}`}><Link href="/event-details">Events Details</Link></li> */}
					</ul>
				</li>
				<li className={`${checkParentActive(["/blog-performance", "/blog-wellness", "/blog-single"])}`}>
					<Link href="/#">Articles</Link>
					<ul className="submenu">
						<li className={`item ${checkCurrentMenuItem("/blog-performance")}`}><Link href="/blog-performance">Performance</Link></li>
						<li className={`item ${checkCurrentMenuItem("/blog-wellness")}`}><Link href="/blog-wellness">Wellness</Link></li>
					</ul>{/* /.submenu */}
				</li>
				<li className={`item ${pathname === "/about" ? "current-menu-item" : ""}`}><Link href="/about">About us</Link></li>
				<li className={`item ${pathname === "/contact" ? "current-menu-item" : ""}`}><Link href="/contact">Contact us</Link></li>
			</ul>{/* /.menu */}
		</>
	)
}

