import Head from 'next/head'
import Link from 'next/link'
import Layout from '../componentes/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      {' '}
          <Link href="/posts/perfil">
          <a className="card">
            <h3> Perfil do Desenvolvedor &rarr;</h3>
            <p>
              <a>Essa é a pagina para destacar habilidades técnicas.</a>
            </p>
          </a>
          </Link>
    </Layout>
  )
}