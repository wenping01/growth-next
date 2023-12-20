import Link from "next/link"
import Image from "next/image"

export default function() {
	return (
		<div className="w-[104px] relative">
			<Image className="absolute top-[2px] right-[-20px]" src="/logoPen.svg" alt="Logo" width={17} height={13} />
			<Link className="font-semibold text-[28px]" href={'/'}>Growth</Link>
		</div>
	)
}
