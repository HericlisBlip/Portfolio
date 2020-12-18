<?php
 $adm = 0;
$filmes = ["Vingadores", "Pantera Negra", "Thor Ragnarok", "O Incrivel Hulk"];
$i = 0;
if ($adm == 1) {
echo "Hello World";

}
else{

    echo "Olá Novato!\n";
}


echo ($adm ==1) ? 'Hello World' : 'Olá Mundo';

$nome = 'Hericlis';
$sobrenome = "Ventura";
$nomeCompleto = $nome;
$nomeCompleto .= $sobrenome ?? '';

echo $nomeCompleto;
$tipo = 'texto';
switch($tipo){
    case 'foto';
        echo 'Exibindo FOTO';
        break;
    case 'video';
        echo 'Exibindo VIDEO';
        break;
    case 'texto';
        echo 'Exibindo TEXTO';
        break;
}
$numeros = 0;


while( $numeros <= 23){
    echo 'N:' .$numeros.'<br/>';
    $numeros +=1;

}
for($numero = 1;$numero < 11; $numero++) {
    echo $numero.' Funcionou! <br>';
}

foreach($filmes as $chave => $filme){
    echo ($chave+1).'            Filme'. $filme;
}

for($i=0; $i<10; $i++){
    for($t = 0; $t < 10; $t++){
        echo " - ";
    }
    echo '<br/>';
}

for($i=0; $i<30; $i++){
    $x = 0;
    while($x <= $i){
        echo " - ";
        $x++;
    }
    echo '<br/>';
}