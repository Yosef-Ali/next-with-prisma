import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import styles from "../../../styles/Home.module.css";

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const post = await prisma.posts.findUnique({
    //include: { artist: true },
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const posts = await prisma.posts.findMany();
  //console.log(posts[0]);
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: false,
  };
}

const singlePost = ({ post }) => {
  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </div>
  );
};

export default singlePost;
