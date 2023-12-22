import { useState } from 'react';
import Image from 'next/image';
import { Nav, NavMobile, Logo } from '.';

export default function () {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const dataMenu = [
    { title: 'Features', href: encodeURIComponent('/') },
    { title: 'About us', href: encodeURIComponent('/') },
    { title: 'Blog', href: encodeURIComponent('/') },
  ];

  return (
    <header className="container flex justify-between items-center mx-auto mt-5 px-4">
      <Logo />
      <div>
        <div className="lg:hidden" onClick={() => setIsOpenNavbar(true)}>
          <Image src="/hamber.svg" alt="Open Sidebar" width={40} height={40} />
        </div>
        {isOpenNavbar ? <NavMobile navBarProps={dataMenu} setOpen={setIsOpenNavbar} /> : <Nav navProps={dataMenu} />}
      </div>
    </header>
  );
}
