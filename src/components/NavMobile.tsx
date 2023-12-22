import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavBarProps } from '@/types';

function NavMobile({ setOpen, navBarProps }: NavBarProps) {
  return (
    <ul className="lg:hidden fixed z-10 w-[300px] h-screen top-0 right-0 bg-[#4891FF] text-white">
      <li className="mx-5 py-3">
        <Image src="/close.svg" alt="close" width={30} height={30} onClick={() => setOpen(false)} />
      </li>
      {navBarProps ? (
        navBarProps.map((item, key) => (
          <li key={key}>
            <Link href={item.href} className="mx-6 py-3 block">
              {item.title}
            </Link>
          </li>
        ))
      ) : (
        <li className="mx-6 py-3 block"></li>
      )}
      <li>
        <Link
          href="/login"
          className="mt-3 mx-6 py-3 block px-6 text-primary text-center rounded-xl border-slate-300 bg-neutral-100"
        >
          Log in
        </Link>
      </li>
    </ul>
  );
}

export default memo(NavMobile);
