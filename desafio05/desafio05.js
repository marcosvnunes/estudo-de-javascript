/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arr = [2,8,19,25,47];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function recebeArray(arg){
    return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
recebeArray(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function RecebeArrNum(arg,num){

    return arg[num];

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arr2 = ['marcos',true,15,[1,2,3],{pro:'verdade'}]; 
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

console.log(RecebeArrNum(arr2,0));//R: marcos
console.log(RecebeArrNum(arr2,1));//R: true
console.log(RecebeArrNum(arr2,2));//R: 15
console.log(RecebeArrNum(arr2,3));//R: [1,2,3]
console.log(RecebeArrNum(arr2,4));//R: {pro:'verdade'}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(bookName){
    var livros ={
        'samoua':{
            quantidadePaginas:400 ,
            autor:'Naosei Quem Foi',
            editora:'Sem Nome',
        },
        'capuzo':{
            quantidadePaginas:250,
            autor:'Marcos Nunes',
            editora:'Phoenix',
        },
        'estudando js':{
            quantidadePaginas: 1045 ,
            autor:'Carlos Martines',
            editora:'Estudo Eficiente',
        }
    }
   return !bookName ? livros : livros[bookName];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
/*
R: { samoua:
    { quantidadePaginas: 400,
        autor: 'Naosei Quem Foi',
        editora: 'Sem Nome' },
    capuzo:
    { quantidadePaginas: 250,
        autor: 'Marcos Nunes',
        editora: 'Phoenix' },
    'estudando js':
    { quantidadePaginas: 1045,
        autor: 'Carlos Martines',
        editora: 'Estudo Eficiente' 
    } 
   }

*/
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

console.log("O livro capuzo tem "+book('capuzo').quantidadePaginas+" paginas" );
//R: O livro capuzo tem 250 paginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log("O autor do livro capuzo é "+book('capuzo').autor );
//R: O autor do livro capuzo é Marcos Nunes
/*

Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log("O livro Estudando JS foi publicado pela editora "+book('estudando js').editora );
//R: O livro Estudando JS foi publicado pela editora  Estudo Eficiente