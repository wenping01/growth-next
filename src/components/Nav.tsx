import { memo } from 'react';
import Link from 'next/link';
import { NavProps } from '@/types';

function Nav({ navProps }: NavProps) {
  return (
    <ul className="hidden lg:flex text-base">
      {navProps ? (
        navProps.map((item, key) => (
          <li className="ml-6" key={key}>
            <Link href={item.href} className="py-1">
              {item.title}
            </Link>
          </li>
        ))
      ) : (
        <li className="ml-6"></li>
      )}
      <li>
        <Link href="/login" className="ml-6 py-3 px-6 rounded-xl border-slate-300 bg-neutral-100">
          Log in
        </Link>
      </li>
    </ul>
  );
}

export default memo(Nav);
