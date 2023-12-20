import { useState } from "react"
import Image from "next/image"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Logo from "./Logo"

export default function() {
	const [isOpenNavbar, setIsOpenNavbar] = useState(false)
	const dataMenu = ['Features', 'About us', 'Blog']

	return (
		<header className="container flex justify-between items-center mx-auto mt-5 px-4">
			<Logo />
			<div>
				<div className="lg:hidden" onClick={() => setIsOpenNavbar(true)}>
					<Image src="/hamber.svg" alt="Open Sidebar" width={40} height={40} />
				</div>
				{isOpenNavbar ? <NavMobile data={dataMenu} isOpen={setIsOpenNavbar} /> : <Nav data={dataMenu} />}
			</div>
		</header>
	)
}

