(function(){


    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    
    console.log( 'Propriedades de "person":' );

    var person = {
        name:'Marcos',
        lastname:'Nunes',
        age: 28
    }
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person)); //[ 'name', 'lastname', 'age' ]

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books[0] = {
        name:'capuzo',
        pages:200
    };
    books[1] = {
        name:'Dracula 2000',
        pages:325
    } 
    books.push({
        name:'Big Data iniciante',
        pages:188
    }); // so para mostrar uma forma diferente :


    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    
    console.log(books);
    /*[ 
    { name: 'capuzo', pages: 200 },
    { name: 'Dracula 2000', pages: 325 },
    { name: 'Big Data iniciante', pages: 188 } ] 
    */

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop()); // { name: 'Big Data iniciante', pages: 188 }

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    
    console.log(books); 
    /*[{ name: 'capuzo', pages: 200 },
    { name: 'Dracula 2000', pages: 325 }]*/

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    
    console.log( '\nLivros em formato string:' );

    books = JSON.stringify(books); /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);
    //[{"name":"capuzo","pages":200},{"name":"Dracula 2000","pages":325}] 
    

    /*
    Converta os livros novamente para objeto.
    */
    
    console.log( '\nAgora os livros são objetos novamente:' );

    books = JSON.parse(books);

    console.log(books); 
    //[ { name: 'capuzo', pages: 200 }, { name: 'Dracula 2000', pages: 325 } ]

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var x = 0; x < books.length; x++ ){
        for(var prop in books[x]){
            console.log(prop+' : ', books[x][prop]);
            /*  name :  capuzo
                pages :  200
                name :  Dracula 2000
                pages :  325*/
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['m','a','r','c','o','s',' ','n','u','n','e','s'];

    console.log( '\nMeu nome é:' ); // marcos nunes

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' ); 
    // [ 's', 'e', 'n', 'u', 'n', ' ', 's', 'o', 'c', 'r', 'a', 'm' ]

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse());

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
    //[ ' ', 'a', 'c', 'e', 'm', 'n', 'n', 'o', 'r', 's', 's', 'u' ]


})();