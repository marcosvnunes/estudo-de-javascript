(function(){

    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    var $visor = document.querySelector('[data-js="visor_calc"]');
    var $B_numbers = document.querySelectorAll('[data-js="B_number"]');
    var $B_ce = document.querySelector('[data-js="B_CE"]');
    var $B_operations = document.querySelectorAll('[data-js="B_operatior"]');
    var $B_equal = document.querySelector('[data-js="B_equal"]');

    AddClickBNumbers($B_numbers);
    AddClickOperations($B_operations);

    $B_ce.addEventListener('click',function(event){
        $visor.value = '0';
        
    });

    $B_equal.addEventListener('click',function(event){
       var valueEqualString = $visor.value.replace(/([\d.]+)(\D)?/g,'$1$2,');
       var valueEqualArray = valueEqualString.split(',');
       var total = valueEqualArray.reduce(function(acumulated,actual){
        
         return generateOperations(acumulated,actual);
       })
       $visor.value = total;
       
    })

    function AddClickOperations(Buttons)
    {
        Array.prototype.forEach.call(Buttons,function(button){
            button.addEventListener('click',function(event){          
                if(isOperator(getLastItem($visor.value)))
                    return $visor.value = $visor.value.slice(0,-1) + button.value;

                $visor.value += button.value;             
            })
        })
    }

    function AddOperator(event){
        
    }
    function AddClickBNumbers(Buttons)
    {
        Array.prototype.forEach.call(Buttons,function(button){
            button.addEventListener('click',function(event){
             $visor.value += button.value;
            })
        })
    }

    function isOperator(Operator){
        var operators = ['+','-','*','/'];
        return operators.some(function(item){
            return item === Operator;
        })

    }
    function getLastItem(cont){
        return cont.slice(cont.length-1);
    }

    function generateOperations(acumulated,actual){
        if(acumulated && actual)
        {
            var lastItemAcumulated = getLastItem(acumulated);
            var lastItemActual = getLastItem(actual);
            
        }
        if(isOperator(lastItemAcumulated) && isOperator(lastItemActual))
        {
            
            switch(lastItemAcumulated){
                case '+' : return Number(acumulated.slice(0,-1)) + Number(actual.slice(0,-1)) + lastItemActual; 
                case '-' : return Number(acumulated.slice(0,-1)) - Number(actual.slice(0,-1)) + lastItemActual; 
                case '*' : return Number(acumulated.slice(0,-1)) * Number(actual.slice(0,-1)) + lastItemActual; 
                case '/' : return Number(acumulated.slice(0,-1)) / Number(actual.slice(0,-1)) + lastItemActual; 
            }
        }
        if(isOperator(lastItemAcumulated) )
        {
            
            switch(lastItemAcumulated){
                case '+' : return Number(acumulated.slice(0,-1)) + Number(actual);
                case '-' : return Number(acumulated.slice(0,-1)) - Number(actual);
                case '*' : return Number(acumulated.slice(0,-1)) * Number(actual);
                case '/' : return Number(acumulated.slice(0,-1)) / Number(actual);
            }
        }
        return Number(acumulated);
    }
 
})(window,document);