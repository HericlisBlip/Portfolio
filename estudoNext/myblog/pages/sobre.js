function Title(props){
    return (
        <h1 style ={ {color : props.color}}>{props.children}</h1>
    )
}
export default function Sobre(){

 return (
<div>

    <hearder>
        <Title color="red"> Página sobre</Title>
        
        <img src="..."/>


    </hearder>
</div>
)
}