
import Head from 'next/head';
import SignupScreen from './Component/SignupScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignupScreen />
      </main>
    </div>
  );
}