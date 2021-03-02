import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../../componentes/alert.module.css'
import cn from 'classnames'
export default function PrimeiroPost(){
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
        <h2>
            <Link href="/"><a>Voltar Para Página Index</a></Link>
        </h2>
</>
   
        )

}