import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  console.log(props);
  return (<div>
   <header className="headerContainer">
    <Head >
    <Title>My page</Title>
   <Image href="..."></Image>
      
    </Head>

     </header> 

    </div>
    )
}
 export async function getInitialProps(){
   return {
     props: {
       avatar_url :'https://avatars.githubusercontent.com/u/59284055?v=4',
     }
   }
 }
