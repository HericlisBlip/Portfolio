import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../componentes/alert.module.css'
import cn from 'classnames'
export default function PrimeiroPost({children, type}){
    return (
    <>
    <Head>  
        <title>Meu Primeiro Post</title>
    </Head>
    <h1>Primeiro Post</h1>
        
        
    <Image
        src="/imagens/BombaJokerGreenDark.png"
        height={144}
        width={144}
        alt="Meu Char No Mu Online"    
    ></Image>  
    <Image
        src="/imagens/FotoProfissional.png"
        height={144}
        width={144}
        alt="Minha Foto de Perfil"    
    ></Image>    
        <Link href="/">
          <h3> Link para voltar a index &rarr;</h3>
          </Link>
    <div className={ cn({ [styles.success]: type === 'success', [styles.error]: type === 'error'})}
    >
      {children}
    </div>
</>
   
        )

}