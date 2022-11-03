import Head from 'next/head'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>borrowIT</title>
        <meta name="description" content="BorrowIt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className='text-3xl font-bold '>
          Hello World
        </div>
       </main>
    </div>
  )
}
