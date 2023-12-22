'use client';

import CustomButton from './CustomButton';
import Image from 'next/image';
import CardToast from './CardToast';

export default function () {
  const handleGetStated = () => {};

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="mt-8 max-w-[830px]">
        <h1 className="text-[64px] leading-none font-medium tracking-tight">
          A powerfull solution to grow your startup. Fast!
        </h1>
      </div>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="mt-6 flex-1 flex flex-col justify-end">
          <p className="font-normal text-xl mb-7">
            Organise, collaborate, and trach progress seamlessly with our one-stop-shop startup growth tool.
          </p>
          <div className="md:flex mb-16">
            <CustomButton
              title={`Get stated`}
              containerStyle={`bg-[#4891FF] text-white`}
              handleClick={handleGetStated}
            />
            <CustomButton
              title={`Book a demo`}
              containerStyle={`bg-neutral-100`}
              iconComponent={<Image src="/demo.svg" alt="Demo book" className="mr-2" width={18} height={23} />}
              handleClick={handleGetStated}
            />
          </div>
          <Image src="/Group2643.png" alt="." width={700} height={272}></Image>
        </div>
        <div className="flex flex-1 gap-6">
          <div className="relative flex justify-items-end flex-auto bg-[#131316] rounded-2xl">
            <Image
              className="px-10 pb-10 pt-28 ml-7 object-contain"
              src="/Group2611.png"
              alt="."
              width={400}
              height={360}
            ></Image>
            <Image
              className="absolute bottom-[90px] right-[62px] object-contain"
              src="/Group2566.png"
              alt="."
              width={500}
              height={200}
            ></Image>
            <Image
              className="absolute bottom-[219px] right-[180px] object-contain"
              src="/Group2641.png"
              alt="."
              width={89}
              height={83}
            ></Image>
          </div>
          <div className="flex-auto">
            <div className="flex justify-items-end flex-auto">
              <Image className="object-contain" src="/Group2636.png" alt="." width={240} height={256}></Image>
            </div>
            <CardToast
              title="Team call"
              description="You've been invited to a virtual meeting by John"
              times="Jan 17 at 9AM"
              btnText="Join"
              href={`/`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
