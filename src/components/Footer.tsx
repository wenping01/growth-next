import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo, Input } from '.';

export default function () {
  const dataFooterLinks = [
    {
      title: 'Features',
      links: [
        { title: 'About', url: '/' },
        { title: 'Our Process', url: '/' },
        { title: 'Join our team', url: '/' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { title: 'News', url: '/' },
        { title: 'Research', url: '/' },
        { title: 'Recent Projects', url: '/' },
      ],
    },
    {
      title: 'Contact',
      links: [{ title: 'hello@growthapp.com', url: '/' }],
    },
  ];

  return (
    <section className="container bg-primary mx-auto mt-5 pt-20 px-16 pb-10 text-white">
      <Logo />
      <div className="flex flex-col gap-20 md:gap-32 my-8 md:flex-row ">
        <div className="bg-[#F4F4F6] rounded-xl p-6 md:w-[405px]">
          <h3 className="text-[#35333C] leading-9 font-medium text-xl">Subscribe to newsletter</h3>
          <p className="text-primary my-5">
            Subscribe now to receive tips on how to take your business to the next level.
          </p>
          <form action="" className="flex gap-4">
            <Input placeholder={`Enter your email`} />
            <button type="submit" className="py-2.5 px-5 bg-[#4891FF] rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-1 gap-6 flex-row justify-between flex-wrap">
          {dataFooterLinks.map((items) => (
            <div className="" key={items.title}>
              <p className="pb-4 font-semibold text-lg text-[#BCC2C3]">{items.title}</p>
              <ul>
                {items.links.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url} className="text-base font-normal text-[#BCC2C3] pt-4 leading-9">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 ">
        <Link href={`/`}>
          <Image src={`/in.svg`} alt="Liked In" width={24} height={24} />
        </Link>
        <Link href={`/`}>
          <Image src={`/tw.svg`} alt="Liked In" width={24} height={24} />
        </Link>
      </div>
      <p className="mt-16 text-sm text-[#BCC2C3]">© 2023 Growth. All rights reserved</p>
    </section>
  );
}
