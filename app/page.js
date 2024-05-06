
import Head from 'next/head';
import Link from 'next/link';
import Index from './index';
import Dashboard from './dashboard/page';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Render the Index component content directly */}
        <Index />
      </main> 
    </div>
  );
}
