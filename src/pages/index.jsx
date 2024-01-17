import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu App Next.js</title>
        <meta name="description" content="Primeira página..." />
      </Head>
      <h1>Olá Next.js!</h1>;
      <Menu />
      <h2>Bem-vindo ao Next.js</h2>
      <h3>Página inicial</h3>
    </>
  );
}
