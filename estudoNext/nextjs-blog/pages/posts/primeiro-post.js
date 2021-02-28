import Link from 'next/link'
import Image from 'next/image'
export default function PrimeiroPost(){
    return (
    <>
    <h1>Primeiro Post</h1>
        
        
    <Image
        src="/imagens/BombaJokerGreenDark.png"
        height={144}
        width={144}
        alt="Meu Char No Mu Online"    
    ></Image>  
    <Image
        src="/imagens/selfSantander.jpg"
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