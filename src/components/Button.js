
import Link from "next/link"

export default function({ primary, children, href, ...props }) {
	return href ? (
		<Link className={"flex items-center py-2.5 px-8 rounded-xl border-slate-300 font-medium text-lg mr-3 " + (primary ? 
		" bg-[#4891FF] text-white" : " bg-neutral-100")} href={href} {...props}>{children}</Link>
	) : (<button className="flex items-center py-2.5 px-8 rounded-xl border-slate-300 font-medium text-lg" {...props}>{children}</button>)
}