
function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}
function enumerar(num, erro){
  if (erro){
    var numero = {
        numero: num,
        erro:true,
        msg:"elemento " + num + " não é compativel com essa estrutura" 
      }
      return numero
  }
  var numero = {
        numero: num,
        erro:false,
        msg:""
      }
      return numero
}
// Try edit message
var resposta = {
  status: false,
  msg: "",
  dados: {}
}

var data = {
  dia: [],
  barra1: {item:"/"},
  mes:[],
  barra2:{item:"/"},
  ano: []
}
var erroLexico = []
var exemplo = prompt("Digite um ano: ")
for (var i = 0; exemplo.length > i; i++){
  if (!(isNumeric(exemplo[i]) || exemplo[i] == "/")){
    var erro = "erro na analise léxica, token " + exemplo[i] + " não é válido para estrutura"
    erroLexico.push(erro)
    break;
  } 
   
}
if(erroLexico.length < 1){
for (var i = 0; exemplo.length > i; i++){
  if (i == 0 || i == 1){ //dia
    if(isNumeric(exemplo[i])){
      data.dia.push(enumerar(exemplo[i], false))
    }
    else{
      data.dia.push(enumerar(exemplo[i], true))
    } 
  }
  else if(i == 2){ //primeira barra
    if(exemplo[i] == "/"){
      var item = {
        item: exemplo[i],
        erro:false,
        msg: ""
      }  
    }
    else{
      var item = {
        item: exemplo[i],
        erro:true,
        msg:"elemento " + exemplo[i] + " não é compativel com essa posição" 
      }  
    }
    data.barra1.item = item
  }
  else if( i == 3 || i == 4){ //mes
    if(isNumeric(exemplo[i])){
      data.mes.push(enumerar(exemplo[i], false))
    }
    else{
      data.mes.push(enumerar(exemplo[i], true))
    }   
  }
  else if(i == 5){ //segunda barra
    if(exemplo[i] == "/"){
      var item = {
        item: exemplo[i],
        erro:false,
        msg: ""
      }  
    }
    else{
      var item = {
        item: exemplo[i],
        erro:true,
        msg:"elemento " + exemplo[i] + " não é compativel com essa posição" 
      }  
    }
    data.barra1.item = item
  }
  else if(i == 6 || i == 7 || i == 8 || i == 9){
    if(isNumeric(exemplo[i])){
      data.ano.push(enumerar(exemplo[i], false))
    }
    else{
      data.ano.push(enumerar(exemplo[i], true))
    }   
  }
  else{
    data.ano.push(enumerar(exemplo[i], true))
  }
}
 resposta.status = false
 resposta.dados = data
}
else{
 resposta.status = true
 resposta.msg = erroLexico[0]
}

console.log(JSON.stringify(resposta))
$('#msg').html(exemplo)

console.log(data)
