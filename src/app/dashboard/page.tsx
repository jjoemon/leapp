  import Image from 'next/image';
  import { lusitana } from '@/app/ui/fonts';

  export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-4xl`}>
        Joemon's Dashboard
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
    {/* Left side: image */}
    <div className="flex items-center justify-center md:w-3/5 md:px-28 md:py-12">
      <Image
        src="/joemon.jpg"
        width={1000}
        height={760}
        className="rounded-full object-cover"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>

    {/* Right side: new data */}
    <div className="flex-1">
      <h3 className={`${lusitana.className} mb-4 text-xl md:text-4xl`}>
        new data goes here
      </h3>
      {/* You can add more content under this */}
    </div>
  </div>

  </main>)
}
