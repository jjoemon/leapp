  import Image from 'next/image';

  export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      { <Image
          src="/joemon.jpg"
          width={1000}
          height={760}
          className="rounded-full object-cover"
          alt="Screenshots of the dashboard project showing desktop version"
      />}
  </div>)
}
