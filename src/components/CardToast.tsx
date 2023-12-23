import Link from 'next/link';
import { CardToastProps } from '@/types';

export default function ({ title, description, times, btnText, href, styles }: CardToastProps) {
  return (
    <div
      className={`flex flex-col 2xl:p-8 p-6 mt-5 max-w-[280px] 2xl:max-w-[240px] xl:max-w-[190px] text-center bg-[#daf4fe] rounded-2xl ${styles}`}
    >
      <p className="font-semibold text-base">{title}</p>
      <p className="font-normal text-[10px] 2xl:px-4 xl:px-1 py-3">{description}</p>
      <p className="font-semibold text-xs mb-4">{times}</p>
      <Link
        href={href}
        className="font-medium text-xs w-[142px] mx-auto py-2 px-4 text-white rounded-md border-slate-300 bg-[#4891FF]"
      >
        {btnText}
      </Link>
    </div>
  );
}
