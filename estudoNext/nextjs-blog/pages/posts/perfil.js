

import Head from 'next/head'
import Layout, { siteTitle } from '../../componentes/layout'
import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>  Olá , Meu nome é Hericlis, Estudante de Desenvolvimento Full Stack na FIAP.
            Atualmente Estudando Sobre Front-End com Next.Js, Angular.Js, React.Js e React Native,
            sobre Smart Contracts com a Liguagem Etherium e a Lib OpenZeppelin, sobre
            Back-End Usando as Linguagens Java, C#, Python, PHP, JavaScript(Node.Js), Golang e Elixir,
            sobre DevOps usando Azure e Google Cloud Plataform  
            e também estudo sobre IoT.
        </p>
        <p>
          (Este é um exemplo de site - você criará um site como este em
          {' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
