// import Link from "next/link"
import Image from 'next/image';

import { CustomButtonProps } from '@/types';

// export default function({ primary, children, href, ...props }) {
// 	return href ? (
// 		<Link className={"flex w-full md:w-max mb-4 md:mb-0 items-center justify-center py-3 px-8 rounded-xl border-slate-300 font-medium text-lg mr-3 " + (primary ?
// 		" bg-[#4891FF] text-white" : " bg-neutral-100")} href={href} {...props}>{children}</Link>
// 	) : (<button className="flex items-center py-2.5 px-8 rounded-xl border-slate-300 font-medium text-lg" {...props}>{children}</button>)
// }

const CustomButton = ({ title, containerStyle, iconComponent, btnType, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      onClick={handleClick}
      className={`flex w-full md:w-max mb-4 md:mb-0 items-center justify-center py-3 px-8 rounded-xl border-slate-300 font-medium text-lg mr-3 hover:opacity-100 opacity-95 ${containerStyle}`}
    >
      {iconComponent}
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
