import { memo } from "react"
import Link from "next/link"

function Nav({ data }) {
	return (
		<ul className="hidden lg:flex text-base">
			{ data ? (data.map((item, key) => (
				<li className="ml-6" key={key}>
					<Link href="" className="py-1">{item}</Link>
				</li>
			))) : <li className="ml-6"></li>}
			<li><Link href="/login" className="ml-6 py-3 px-6 rounded-xl border-slate-300 bg-neutral-100">Log in</Link></li>
		</ul>
	)
}

export default memo(Nav)