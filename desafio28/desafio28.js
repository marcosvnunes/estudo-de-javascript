/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

 function DOM (nodes) {   
    this.element = document.querySelectorAll(nodes);
};

DOM.prototype.on = function on(eventType,callback){
    Array.prototype.forEach.call(this.element,function(element){
        element.addEventListener(eventType,callback);
    })
};

DOM.prototype.off = function off(event,callback){
    Array.prototype.forEach.call(this.element,function(element){
        element.removeEventListener(event,callback);
    })
};

DOM.prototype.get = function get(){
    return this.element;
};

DOM.prototype.forEach = function forEach(){
    Array.prototype.forEach.apply(this.element,arguments);
};

DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element,arguments);
};

DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element,arguments);
};

DOM.prototype.reduce = function reduce(){
    return Array.prototype.reduce.apply(this.element,arguments);
};

DOM.prototype.reduceRight = function reduceRight(){
    return Array.prototype.reduceRight.apply(this.element,arguments);
};

DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element,arguments);
};

DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element,arguments);
};

//forEach, map, filter, reduce, reduceRight, every e some.


DOM.prototype.isArray = function isArray(param){
    return Object.prototype.toString.call(param) === '[object Array]';
};


DOM.prototype.isObject = function isObject(param){
    return Object.prototype.toString.call(param) === '[object Object]';
};


DOM.prototype.isFunction = function isFunction(param){
    return Object.prototype.toString.call(param) === '[object Function]';
};


DOM.prototype.isNumber = function isNumber(param){
    return Object.prototype.toString.call(param) === '[object Number]';
};

DOM.prototype.isString = function isString(param){
    return Object.prototype.toString.call(param) === '[object String]';
};

DOM.prototype.isBoolean = function isBoolean(param){
    return Object.prototype.toString.call(param) === '[object Boolean]';
};



DOM.prototype.isNull = function isNull(param){
    return Object.prototype.toString.call(param) === '[object Null]' || 
    Object.prototype.toString.call(param) === '[object Undefined]';
};
// - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
// codigo para verificar tipo refatorado por Marcos Nnunes 

DOM.prototype.isObjectType = function isObjectType(param){
    var types = ['Array','Object','Function','Number','String',
    'Boolean','Null','Undefined'];

    var valueActual;
    return  types.some(function(type){
        valueActual = type;
        return Object.prototype.toString.call(param) === '[object '+type+']';
    }) +':'+ valueActual; // true or false : type 
};

var $formCep = new DOM('[data-js="form-cep"]');
$formCep.on('submit',handleSubmitFormCep);
var ajax = new XMLHttpRequest();
var $resultFind = new DOM('[data-js="resultFind"]')
var $status = new DOM('[data-js="status"]');
var $inputCep = new DOM('[data-js="inputCEP"]');
var $inputCepValue;

function handleSubmitFormCep(e){
    e.preventDefault();
    $inputCepValue = $inputCep.get()[0].value;
    SetStatus('loading');
    ajax.open('GET',UrlClear());
    ajax.send();
    ajax.addEventListener('readystatechange',handleReadyStateChange);
};

function getCepClear(){
    return $inputCepValue.replace(/\D+/g,'');
}

function UrlClear(){
    return 'https://viacep.com.br/ws/'+getCepClear()+'/json/';
}

function handleReadyStateChange(){
    if(ajax.readyState === 4 && ajax.status === 200)
        ResultsOk();
    else 
        removeResult();
}

function ResultsOk(){
    var data = JSON.parse(ajax.responseText);
    if(!data)
        return ;
    var arrayResult = [data.logradouro,data.bairro,data.localidade,
        data.uf,data.cep];
    addResult(arrayResult);
    
}

function addResult(arrayResult){
    $resultFind.forEach(function(item,index){
        item.textContent = arrayResult[index];
    })
    SetStatus('ok');
}
function removeResult(){
    $resultFind.forEach(function(item){
        item.textContent = '-';
    })
    SetStatus('error');
}

function SetStatus(statusMenssage){
    var messages = {
        loading:'Carregando ...',
        ok:'Endereço referente ao CEP '+getCepClear(),
        error:'Não encontramos o endereço para o CEP '+getCepClear()
    } ;
    $status.get()[0].textContent = messages[statusMenssage];
}