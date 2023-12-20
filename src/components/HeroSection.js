import Button from "./Button"
import Image from "next/image"
import { H1, P } from "./Heading"

export default function() {
	return (
		<div className="container mx-auto px-4 pt-16">
				<div className="mt-8 max-w-[830px]">
					<H1>A powerfull solution to grow your startup. Fast!</H1>
					<P className="mt-6">Organise, collaborate, and trach progress seamlessly with <br/> our one-stop-shop startup growth tool.</P>
				</div>
				<div className="flex mt-7 z-[1] relative">
					<Button primary href="/">Get stated</Button>
					<Button href="/">
						<Image src="/demo.svg" alt="Demo book" className="mr-2" width={18} height={23} />
						Book a demo
					</Button>
				</div>
		</div>
	)
}