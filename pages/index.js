import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const posts = [
//   {
//     title: "Documentation",
//     description: "Find in-depth information about Next.js features and API.",
//   },
//   {
//     title: "Learn",
//     description: "Learn about Next.js in an interactive course with quizzes!",
//   },
//   {
//     title: "Examples",
//     description: "Discover and deploy boilerplate example Next.js projects.",
//   },
//   {
//     title: "Deploy",
//     description:
//       "Instantly deploy your Next.js site to a public URL with Vercel.",
//   },
// ];

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {data.map((item) => (
            <Link href='/posts/[id]' as={`/posts/${item.id}`}>
              <a className={styles.card}>
                <p>{item.title}</p>
                <p>{item.description} &rarr;</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await prisma.posts.findMany();

  return {
    props: {
      data: posts,
    },
  };
}
