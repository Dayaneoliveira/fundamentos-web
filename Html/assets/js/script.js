/*
var é uma variavel universal 
let é uma variavel local 
const é uma variavel constante nao muda 
-----------------------------------------
Acessando o dom
Case Senstive: reconhece letras maiusculas e minusculas
Por tag: getElementByTagName()
por id: getElementsById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector () ***melhor pratica para acessar o chave script 
seletor do ID É # se for Classe é . (PONTO)
*/

let nome = window.document.getElementById('nome') 
let email = document.querySelector("#email") 
let assunto = document.querySelector ("#assunto")
let nomeOk=false
let emailOk=false
let assuntoOk=false
let mapa = document.querySelector("#mapa")

/* acesso o DOM: Mudando o estilo pelo Javascript, não precisando usar o css.
    Seleciona IMPUT o elemento que o nome, não o que tem dentrO
*/

nome.style.width= '35%'
email.style.width ='200%'

/* Ele vai fazer a validação do que vc deseja, value é vALOR e o length tamanho de algo */
function validaNome()
{
    let txtNome=document.querySelector("#textNome")
    if (nome.value.length <2)
    {
        txtNome.innerHTML= 'Nome Inválido'
        txtNome.style.color ='red'
    }else
    {
        txtNome.innerHTML= 'Nome Válido'
        txtNome.style.color ='green'
        nomeOk=true
    }

}
function validaEmail()
{
    let txtEmail=document.querySelector('#txtEmail')
     if(email.value.indexof('@') == -1 ||email.value.indexof('.'))
     {
        txtEmail.innerHTML = 'E-mail inválido'
       
     } else 
     {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color='green'
        emailOk=true
     }
}
function validaAssunto()
{
    let txtAssunto=document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100)
    {
        txtAssunto.innerHTML='Texto ultrapassou o limite digite no máximo 100 caracteres'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'
    }else
    {
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}
function enviar() 
{
    if (nomeOk== true && emailOk== true && assuntoOk==true)
    {
        alert ('Formulário enviado com sucesso!')
    } else
    {
        alert ('Preencha o formulário corretamente antes de enviar...' )
    }
}
function mapaZoom()
{
    mapa.style.width='1000px'
    mapa.style.height='900px'
}
function mapaNormal()
{
    mapa.style.width='600px'
    mapa.style.height='450px' 
}