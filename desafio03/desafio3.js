// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
    nome : 'marcos',
    sobrenome:'nunes',
    sexo:'masculino',
    idade :28,
    altura : 1.75,
    peso: 120,
    andando: false,
    caminhouQuantosMetros : 0 
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = () =>
{
    pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = (mts) =>{
    pessoa.caminhouQuantosMetros += mts;
    pessoa.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = () =>{
    pessoa.andando= false;
}


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = () =>{
    return "Olá meu nome é "+pessoa.nome+" "+pessoa.sobrenome;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = () =>{
    return "olá eu tenho "+pessoa.idade+" anos";
}
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostarPeso = () =>{
    return "Eu peso "+pessoa.peso+"Kg.";
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = () =>{
    return "Minha altura é "+pessoa.altura+"m";
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.nomeCompleto()); //R: Olá meu nome é marcos nunes

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.idade); // R: 28

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.peso); //R: 120

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.altura); //R: 1.75

/*
Faça a `pessoa` fazer 3 aniversários.
*/

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.idade); //R: 31

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

pessoa.andar(5);
pessoa.andar(7);
pessoa.andar(3);


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.andando);  // R: true

/*
Se a pessoa ainda está andando, faça-a parar.
*/

if(pessoa.andando)
{
    pessoa.parar();
}

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.andando); //R: False

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.caminhouQuantosMetros); // R: 15

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = () =>{
    HouM = 'eu sou o ';
    anos = ' anos'
    metros = ' metros';
    if(pessoa.sexo == 'feminino')
    {
        HouM = 'eu sou a ';
    }
    if(pessoa.idade === 1){
        anos = ' ano';
    }
    if(pessoa.caminhouQuantosMetros === 1)
    {
        metros = ' metro';
    }



    return "Olá,"+HouM+pessoa.nome+", tenho "+pessoa.idade+anos+","+ 
    pessoa.altura+", meu peso é "+pessoa.peso+" e, só hoje, eu já caminhei "
    +pessoa.caminhouQuantosMetros+metros;
}

// Agora, apresente-se ;)

console.log(pessoa.apresentacao()); // R: Olá,eu sou o marcos, tenho 31 anos,1.75, 
// meu peso é 120 e, só hoje, eu já caminhei 15 metros