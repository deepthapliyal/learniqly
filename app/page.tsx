import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen text-xl text-center flex-col items-center justify-center lg:p-24 p-4">
      <h1 className="text-4xl font-bold">
        Learniqly is still under development
      </h1>
      <br />
      <p>
        Please{' '}
        <Link className="text-blue-500  hover:underline" href={'mailto:deepakthapliyal47@gmail.com'}>
          Contact us
        </Link>{' '}
        for more information.
      </p>
      {/* Optional: Add an image */}
      {/* <Image src="/path/to/image.jpg" alt="Image Alt Text" width={500} height={300} /> */}
    </main>
  );
}
