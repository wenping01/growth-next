import Image from 'next/image';
import CardToast from './CardToast';

export default function () {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center my-20 max-w-[835px] mx-auto">
        <h2 className="font-medium text-5xl tracking-tighter leading-tight">
          Essential tools for propelling your business forward
        </h2>
        <p className="text-base font-normal my-10">
          Streamline your operations, boost productivity and drive growth with our <br /> essential tools
        </p>
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="lg:max-w-[513px] w-full">
          <h3 className="font-medium text-4xl leading-tight tracking-tighter">Dashboard and reporting</h3>
          <p className="text-base font-normal my-8">
            Gain valuable insights with real-time monitoring. Track key performance indicators and make data-driven
            decisions.{' '}
          </p>
          <div className="">
            <div className="divide-y-reverse divide-y divide-black">
              <div className="flex justify-between items-center">
                <h4 className="text-2xl leading-tight">Real-time monitoring</h4>
                <span className="">
                  <Image src={`/right.svg`} alt="right" width={14} height={12} />
                </span>
              </div>
              <p className="text-base font-normal leading-relaxed my-6 pb-6">View live data and performance metrics.</p>
            </div>
            <div className="divide-y-reverse divide-y border-slate-800">
              <div className="flex justify-between items-center">
                <h4 className="text-2xl leading-tight">Data visualization</h4>
                <span className="">
                  <Image src={`/right.svg`} alt="right" width={14} height={12} />
                </span>
              </div>
              <p className="text-base font-normal leading-relaxed my-6 pb-6">View live data and performance metrics.</p>
            </div>
            <div className="divide-y-reverse divide-y border-slate-800">
              <div className="flex justify-between items-center">
                <h4 className="text-2xl leading-tight">Alerts and notifications</h4>
                <span className="">
                  <Image src={`/right.svg`} alt="right" width={14} height={12} />
                </span>
              </div>
              <p className="text-base font-normal leading-relaxed my-6 pb-6">View live data and performance metrics.</p>
            </div>
          </div>
        </div>
        <div className="flex bg-[#FAFAFA] flex-1 pt-12 pb-36">
          <div className="m-auto relative">
            <Image src={`/Group2625.png`} width={513} height={279} alt="chart" />
            <CardToast
              title="Statements"
              description="Statements are automatically generated in PDF by the 10th of each month"
              btnText="Download"
              href={`/`}
              styles={`absolute right-[-10px] lg:right-[-40px] bottom-[-90px] lg:bottom-[-120px]`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
