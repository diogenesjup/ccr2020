/*
<!--
                                                                                                  ..%%::;X    .         
t%%%   .  . .  ..tS ;. :%t8     ;t%S   . ..X %%t;: :%%S   t8.t; . .:ttS8 ..tt8 X 8.X :tS ;. .%t8 ::%t%S:; tt:;8 S   :%%S
:.S 8    .     ..;;t ; :   8   :::% S%   8 .SS% ::S8   t.%  X;    :;;..;; :;:.::; .tS:  .%. ::. ::S:.   ....:: . .; t.  
.%.. :     . .  .   8;.8 . @   %...::.S   ;;:;:XS;  X :@%.::% . . ;;;;;;%....:;;;S:..;S.:@ .;S:t;;S;;;;;t;;%;;t;t;::tS.:
 ;:::8    .     :::.    .:.8 .: ::8S.:S..:;;S.     : ;;..;;8     S :;;;;;; . .;;;%   ..;..::X.;;;%:8 t:::t:8 :;:;;;ttS.:
 .S:. :     . . :.:.:88X : 8 : ::.8% ::X.:;;%: .   %:;;;;;: 8     ;;;8:.;;;  .;;;t   :;;t;@%t;;t;;:8..:;:;  .:::@S %::;;
  ::;:X .       ;.::8;.X ..X:S ::.  :;:.XS:;:S;%%t:S :;@tS:: :  :;;;. :;:;:; .:;;S   .;;tt  .;;:;::t:.:..:t :::.S ; ;t;;
 ..X .:;  . .   ;.:.8t.% . 8t  :8X@@8 ;:X;.;;;S ::.8.t:; ;:ttS.:%::8S8:@ ;:X.::;:S.  .;;:S  .:;:S..S.%SS% t .::.St:@ t;;
    SX::.     . ;S88%. t8%8%8888S  .;8@S8:t%%X.88: :S8.: .S8;88:%8;.   :@8S;..S8:;   .;8.:  :SS8SSX%St   @X8S8X8X. :%;;;
           .           ...... .                                                    .                :tSXS:. .:  .       
         .   .       ..        ..                                           .                         .   ...  .   .    
 .                8St  SS: .:%%   X8:: S%%%%t;.   .                                .       .      . .   .    . . .   .  
       .  . . . .S   8X t S8   SX   8;    8%% .%:                     .  . .     .       .      .     .    .           .
  . .           :   8.:Xt;.S   8 XX..8 .:@.:  ::%  .  .             .        .     . .      .     .      .   .  .  . .  
      . . .  .  S   8  :  .%  S8... .% :.   :;:8:    .  .         .   . .  .   .       .  .   .     .  .   .      .     
  .               . @..:. .X   8.... 8.t;::;::X; .        .    .    .        .   .  .   .      . .   .   .    . .    .  
    . .  . .    ; :  8X  S;8 :.SX   X% ;;S@%..%S tSS; . .   .    .     . .     .     .     . .     .        .      .   .
  .          .  :;%X    8S:%88    @8 :.::8 S   St%S @        . .   .       .     . .   .  .     .     . .     .  .   .  
#
#`            
#      TIME 365
#      APLICATIVO NO TRECHO
#      
#      JUNHO DE 2020
#
#     “ESTAR OCUPADO NEM SEMPRE SIGNIFICA TRABALHO DE VERDADE. O OBJETIVO DE TODO TRABALHO É A PRODUÇÃO OU A REALIZAÇÃO E, PARA QUALQUER UM DESSES FINS, DEVE HAVER PREVISÃO, SISTEMA,  
#      PLANEJAMENTO, INTELIGÊNCIA E PROPÓSITO HONESTO, ALÉM DE TRANSPIRAÇÃO. PARECER FAZER NÃO É FAZER.
#
#
*/


// REGISTRANDO UM SERVICE WORKER
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('app.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// SALVAR OS ARQUIVOS
var CACHE_NAME = 'no-trecho';
var urlsToCache = [
  '/'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});





var urlDom = "https://ccr2020.vercel.app/";
var urlApi = "https://servidorseguro.cloud/ccr2020/api/";
var urlCdn = "";

function removerFakeSplash(){
   $(".fakesplashcreen").css("left","-120%");
}

// TESTAR ATIVIDADE API
function testeApi(){
   
              // INICIO CHAMADA AJAX
              var request = $.ajax({
                  method: "POST",
                  url: urlApi+"v1/testeapi"              
              })
              request.done(function (dados) {            

                  console.log("%c VERIFICAÇÃO DE DISPONIBILIDADE DE API","background:#ff0000;color:#fff;");
                  console.log(dados);

              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (apiAtiva)");
                   console.log(dados);

              });
              // FINAL CHAMADA AJAX

}




/* VERIFICAR SESSÃO */
function verificarSessao(indicadorAcao){

   console.log("INICIANDO FUNÇÃO PARA SABER SE O USUÁRIO ESTÁ OU NÃO LOGADO");

   var logado = localStorage.getItem("logado");

   // REDIRECIONAR PARA A TELA DE LOGIN
   if(logado!="logado-ccr"){
     $JSView.goToView('viewLogin');
   }else{

    if(indicadorAcao!="perfil"){
       minhaConta();
    }else{
       // DIRECIONAR DETALHE PERFIL
       verPerfil();
    }
    
   }   

   // DESATIVAR EVENTUAIS MENUS ATIVADOS
   desligarMenus();

}


/* PROC LOGIN */
var perfilFoto;
function procLogin(seletor){

        $(seletor).html("CARREGANDO...");

        var usuario = $("#loginUsuario").val();
        var senha = $("#loginSenha").val();

        if(usuario==""&&senha==""){

          aviso("Campos obrigatórios em branco","Os campos login e senha são obrigatórios! Preencha-os antes de prosseguir.");

        }else{    

                    // INICIO CHAMADA AJAX
                    var request = $.ajax({
                        method: "POST",
                        url: urlApi+"v1/login",
                        data:{usuario:usuario,senha:senha}              
                    })
                    request.done(function (dados) {            

                        console.log("%c EVENTOS RETORNADOS DA API","background:#ff0000;color:#fff;");
                        console.log(dados);
                        
                        if(dados.sucesso=="200"){
                              
                              localStorage.setItem("nomeUsuario",dados.nome);
                              localStorage.setItem("emailUsuario",dados.email);
                              localStorage.setItem("idUsuario",dados.id);
                              
                              // SALVAR SE O USUÁRIO É PREMIUM OU FREE
                              localStorage.setItem("statusConta",dados.status);
                              localStorage.setItem("degustacaoConta",dados.degustacao);

                              localStorage.setItem("usuarioDados",JSON.stringify(dados));

                              localStorage.setItem("logado","logado-bc");
                              desligarMenus();

                              // REDIRECIONAR O USUÁRIO PARA A TELA DE MINHA CONTA
                              minhaConta();
                              
                              localStorage.setItem("parametroFoto",2);
                              perfilFoto = setInterval(manterFotoAtualizada, 2000);
                            

                        }else{
                           $(seletor).html("ENTRAR");
                           aviso("Oops! Login ou senha incorretos","Verifique os dados informados e tente novamente");
                        }
                        

                    });
                    request.fail(function (dados) {
                           
                         console.log("API NÃO DISPONÍVEL (procLogin)");
                         console.log(dados);
                         $(seletor).html("ENTRAR");

                    });
                    // FINAL CHAMADA AJAX
          
        }


}

/* FUNÇÃO PARA SAIR DO APLICATIVO */
function logoff(){
   
   confirmacao("Tem certeza que deseja sair?","Você será deslogado da sua conta.","confirmarSair()","Confirmar e sair");

}


function confirmarSair(){
  
   localStorage.setItem("logado","não");
   localStorage.clear();
   // VOLTAR AO INÍCIO 
   voltarAoInicio();

   aviso("Agora você não está mais logado!","Logoff realizado com sucesso");

   clearInterval(perfilFoto);

}


/* PROC CADASTRO */
function procCadastro(){

    var cadastroNome = $("#cadastroNome").val();
    var cadastroEmail = $("#cadastroEmail").val();
    var cadastroEmailConfirmacao = $("#cadastroEmailConfirmacao").val();
    var cadastroSenha = $("#cadastroSenha").val();
    var cadastroCelular = $("#cadastroCelular").val();

    if(cadastroEmail!=cadastroEmailConfirmacao){

        console.log("E-MAILS NÃO CONFEREM");
        aviso("E-mails não conferem","Verifique as informações informadas: o e-mail informado e o e-mail de confirmação precisam ser iguais.");

    }else{
       
      // INICIO CHAMADA AJAX
                    var request = $.ajax({
                        method: "POST",
                        url: urlApi+"v1/cadastro",
                        data:{cadastroNome:cadastroNome,cadastroEmail:cadastroEmail,cadastroSenha:cadastroSenha,cadastroCelular:cadastroCelular}              
                    })
                    request.done(function (dados) {            

                        console.log("%c DADOS RETORNADOS DA API","background:#ff0000;color:#fff;");
                        console.log(dados);

                        if(dados.sucesso=="200"){
                              
                              localStorage.setItem("nomeUsuario",dados.nome);
                              localStorage.setItem("emailUsuario",dados.email);
                              localStorage.setItem("idUsuario",dados.id);
                              localStorage.setItem("usuarioDados",JSON.stringify(dados));

                              // SALVAR SE O USUÁRIO É PREMIUM OU FREE
                              localStorage.setItem("statusConta",dados.status);
                              localStorage.setItem("degustacaoConta",dados.degustacao);

                              localStorage.setItem("logado","logado-bc");

                              // REDIRECIONAR O USUÁRIO PARA A TELA DE MINHA CONTA
                              minhaConta();
                              
                              localStorage.setItem("parametroFoto",2);
                              perfilFoto = setInterval(manterFotoAtualizada, 2000);

                        }else{

                           aviso("Oops! Algo deu errado","Verifique os dados informados e tente novamente");
                        
                        }
                                                              

                    });
                    request.fail(function (dados) {
                           
                         console.log("API NÃO DISPONÍVEL (procCadastro)");
                         console.log(dados);

                    });
                    // FINAL CHAMADA AJAX  
      

    }

}


/* ESQUECI MINHA SENHA */
function esqueciMinhaSenha(){
   console.log("ESQUECI MINHA SENHA");
   $JSView.goToView('viewEsqueciSenha');

}
function procEsqueciSenha(){
   
   var loginUsuarioEmailReset = $("#loginUsuarioEmailReset").val();

   $("#esqueciSenha").html("processando...");

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: urlApi+"v1/resetSenha",
                  data:{emailUsuario:loginUsuarioEmailReset}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO RESET DE SENHA:","background:#ff0000;color:#fff;");
                  console.log(dados);

                  if(dados.sucesso=="200"){
                    aviso("Reset de senha realizado com sucesso.","Enviamos um e-mail com sua senha de acesso");
                    $("#esqueciSenha").html("RESETAR SENHA");
                  }

                  if(dados.sucesso!="200"){
                    aviso("Oops! Tivemos um problema","Não encontramos o seu e-mail na plataforma");
                    $("#esqueciSenha").html("RESETAR SENHA");
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procEsqueciSenha)");
                   console.log(dados);

                   $("#esqueciSenha").html("RESETAR SENHA");

              });
              // FINAL CHAMADA AJAX
   
   console.log("FUNÇÃO PARA RESET DE SENHA REALIZADO COM SUCESSO");  

   //aviso("Senha resetada com sucesso!","Verifique as informações enviadas para o e-mail cadastrado.");
}





/* MINHA CONTA */
function minhaConta(){

     console.log("REDIRECIONAR PARA A MINHA CONTA");
     $JSView.goToView('viewMinhaConta');

     var idUsuario = localStorage.getItem("idUsuario");

     // RECUPERAR DADOS DO USUÁRIO
     var obj = JSON.parse(localStorage.getItem("usuarioDados"));
     console.log("DADOS JSON PARSE: ");
     console.log(obj);

     // CARREGAR PEDIDOS / TRANSAÇÕES DESSE USUÁRIO
     // INICIO CHAMADA AJAX
                    var request = $.ajax({
                        method: "POST",
                        url: urlApi+"v1/transacoes",
                        data:{idUsuario:idUsuario}              
                    })
                    request.done(function (dados) {            

                        console.log("%c DADOS RETORNADOS DA API","background:#ff0000;color:#fff;");
                        console.log(dados);

                        $(".carregando").fadeOut(0);    

                        for(var i = 0;i<dados.transacoes.length;i++){

                           localStorage.setItem("tempTransacao",JSON.stringify(dados.transacoes[i]));
                        
                           $("#listaMeusPedidos").html('<div class="pedido"> <div class="row"> <div class="col-9"> <h3>'+dados.transacoes[i].nome_evento+' <small> '+dados.transacoes[i].endereco+' </small> </h3> </div><div class="col-3"> <a href="javascript:void(0)" title="Ver detalhes do evento" onclick="viewPedidoIngresso();"> <img src="images/detalhe-evento-2.png" alt="Ver detalhes do evento"> </a> </div></div></div>'); 
                        
                        }                                               

                    });
                    request.fail(function (dados) {
                           
                         console.log("API NÃO DISPONÍVEL (minhaConta)");
                         console.log(dados);

                    });
                    // FINAL CHAMADA AJAX    


}




/* CARREGAR AS MASCARAS */
function carregarMascaras(){

    console.log("CARREGANDO MASCARAS DE FORMULÁRIOS");

    $("#cadastroCelular").inputmask("(99) 9 9999-9999");

}






/* PROCESSAR MENUS */
function procMenu(indicadorMenu){

	$(".navegacao-principal").removeClass("ativo");

    if(indicadorMenu==1){
        console.log("MENU ATIVO 1");
        $(".navegacao-principal.menu-1").addClass("ativo");
    }

    if(indicadorMenu==2){
    	console.log("MENU ATIVO 2");
        $(".navegacao-principal.menu-2").addClass("ativo");
    }

    if(indicadorMenu==3){
    	console.log("MENU ATIVO 3");
        $(".navegacao-principal.menu-3").addClass("ativo");
    }

    if(indicadorMenu==4){
    	console.log("MENU ATIVO 4");
        $(".navegacao-principal.menu-4").addClass("ativo");
    }

    if(indicadorMenu==5){
    	console.log("MENU ATIVO 5");
        $(".navegacao-principal.menu-5").addClass("ativo");
    }

    //manterFotoAtualizada();

}

/* FUNÇÃO GERAL PARA EXIBIR OS AVISOS DO PÁGINA */
function aviso(titulo,mensagem){

  console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
  $(".modal-avisos").fadeIn(100);

  $(".modal-avisos .aviso").css("bottom","0");


  // ALIMENTAR O HTML
  $(".modal-avisos .aviso h3 span").html(titulo);
  $(".modal-avisos .aviso p").html(mensagem+'<p style="padding-top:12px;padding-left:0px;"><button type="button" onclick="fecharAviso();" class="btn btn-primary">Ok</button></p>');

}
function fecharAviso(){
  
  $(".modal-avisos .aviso").css("bottom","-30%");
  $(".modal-avisos").fadeOut(500);

}

/* FUNÇÃO GERAL PARA EXIBIR CONFIRMAÇÕES DE AÇÕES */
function confirmacao(titulo,mensagem,funcaoConfirmacao,textoConfirmacao){

  console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
  $(".modal-confirmacao").fadeIn(100);

  $(".modal-confirmacao .confirmacao").css("bottom","0");

  // ALIMENTAR O HTML
  $(".confirmacao h3 span").html(titulo);
  $(".confirmacao p").html(mensagem);

  $(".confirmacao #acaoConfirmacao").attr("onclick",funcaoConfirmacao+"; fecharConfirmacao();");
  if(textoConfirmacao!=""){
    $(".confirmacao #acaoConfirmacao").html(textoConfirmacao);
  }
  

}
function fecharConfirmacao(){

     $(".modal-confirmacao .confirmacao").css("bottom","-30%");
     $(".modal-confirmacao").fadeOut(500);

}



/* DESLIGAR TODOS OS MENUS */
function desligarMenus(){
    console.log("DESLIGANDO MENUS ATIVOS");
    $(".navegacao-principal").removeClass("ativo");
}
/* LIGAR UM MENU ESPECIFICO */
function ligarMenu(nomeMenu){
    console.log("LIGANDO UM MENU ESPECIFICO");
    $(".navegacao-principal"+nomeMenu).addClass("ativo");
}
/* VOLTAR A VIEW INICIAL */
function voltarAoInicio(){
    console.log("DIRECIONANDO O USUÁRIO PARA A VIEW PRINCIPAL");
    $JSView.goToView('home');
    
    carregarConteudo();
    
    procMenu(1);

    
}






/* CARREGAR CONTEÚDO INICIAL */
function carregarConteudo(){
   
   console.log("INICIANDO FUNÇÃO PARA CARREGAR CONTEÚDO INICIAL");

   $(".loop-carregando").remove();

                               // INICIAR STORIES DE CONTEÚDO
                               initDemo();
                               
                               // INICIAR OS BANNERS
                               var destaquesLoja = $('#loopBanners').owlCarousel({
                                        loop:true,
                                        margin:6,
                                        items: 1.5,
                                        autoplay: false,
                                        center: true,
                                        //navContainer: '.custom-nav-banner',
                                        //autoplay:true,
                                        //autoplayTimeout:6500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        //autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                        
                                });

}


function singleConteudo(){
  
  console.log("DIRECIONANDO O USUÁRIO PARA DETALHE DE CONTEÚO");
  $JSView.goToView('single');

  // DESATIVAR EVENTUAIS MENUS ATIVADOS
   desligarMenus();

}



// COMANDO POR VOZ
var comandosPorVoz = "nao";
var noteContent;
var continuarOuvindo;

try {

  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
   comandosPorVoz = "sim";
}
catch(e) {
  console.error(e);
  $('#comendoPorVoz').hide();
}

recognition.onstart = function() { 
  
  //aviso('Estou te ouvindo.','Fale pausadamente para uma melhor captura do seu áudio');
  //$(".caixa-sugestoes-ouvindo span").html("Ouvindo...");

}
/*
recognition.onspeechend = function() {
  aviso('Não estou conseguindo te ouvir.','Tente falar pausadamente e mais próximo do seu disposítivo');
}
*/

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    //aviso('Ocorreu um erro. Tente novamente','Não conseguimos acesso ao seu microfone.');  
  };
}


recognition.onresult = function(event) {
  
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  
  $("#destino").val("Eu ouvi: "+transcript);

  console.log(transcript);

  recognition.stop();
  //recognition.start();

    if(transcript=="Próxima parada" || transcript=="próxima parada"){
      var audio = new Audio('assets/got-it-done.mp3');
      audio.play();
      $(".caixa-sugestoes-ouvindo span").html("Entendi! Sua próxima parada está a 20KM de distância, você está quase lá!");
  }

   if(transcript=="Estou com sono" || transcript=="estou com sono"){
      var audio = new Audio('assets/got-it-done.mp3');
      audio.play();
      $(".caixa-sugestoes-ouvindo span").html("Você está com sono? Cuidado! Não é bom dirigir assim, é <b>hora de fazer uma parada</b>");
  }


    if(transcript=="Alimentação" || transcript=="alimentação"){
      var audio = new Audio('assets/got-it-done.mp3');
      audio.play();
      $(".caixa-sugestoes-ouvindo span").html("Bateu aquela fome? Tem uma Parada com restaurante a 15Km de distância! Vamos até lá.");
  }
  

}

/* CARREGAR LOCAIS (INIT MAPA) */
function locais(){

  console.log("DIRECIONANDO O USUÁRIO PARA OS LOCAIS");
  $JSView.goToView('locais');

  // CARREGAR MAPA
  setTimeout("initMapa();", 100);  
  setTimeout("loopVoz();", 2500);   

  

}

function loopVoz(){
   
   recognition.start();

   try {
       continuarOuvindo = setInterval("recognition.start(); $('#destino').val('Ouvindo...');",300);
    }
    catch(e) {
       console.log("PROBLEMAS EM OUVIR...");
    }

}

function resetVoz(){
  
   recognition.stop();
   clearInterval(continuarOuvindo);

}


/* CARREGAR LISTA DE FRETES */
function fretes(){
  
  console.log("DIRECIONANDO O USUÁRIO PARA FRETES");
  $JSView.goToView('fretes');

}






// FUNÇÃO PARA PESQUISAS MELHORADAS
//
// tipo     = TIPO DE PESQUISA
// target   = TIPO DE DESTINO (SE CAMPO OU FUNÇÃO)
// alvo     = TIPO DE ALVO (SE CAMPO OU FUNÇÃO)
// tipoDados = JSON OU HTML
// VARIAVEL betterSearch = GLOBAL PARA GUARDAR OS RESULTADOS
//
let betterSearch = [];
let betterSearchExtra = [];

function ativandoPesquisa(origem){
  
  console.log("INICIANDO FUNÇÃO PARA PESQUISA GERAL DE CONTEÚDO BEAUTY CONNECT / BETTER SEARCH");
  betterSearchFn("geral", "nenhum", "nenhum", "json");
  
  // FILTRAR OS RESULTADOS
  filtroBetterSearch();

  localStorage.setItem("origemField",origem);

  if(betterSearch==""){
    console.log("BUSCANDO CONTEÚDO");
    buscarConteudoBusca();
  }

  $("#betterSearchField").val($(".busca-header .form-control").val());
  
  // FOCAR NO CAMPO
  $("#betterSearchField").focus();

}

function betterSearchFn(tipo, target, alvo, tipoDados){

     console.log("INICIANDO FUNÇÃO PARA BUSCA APRIMORADA");
     console.log("TIPO: "+tipo);
     console.log("TARGET: "+target);
     console.log("ALVO: "+alvo);

     // LIMPAR O HTML
     //$("#betterSearch nav ul").html("");
     $("#betterSearchField").val("");

     // FAZER APARECER A BETTER SEARCH
     $("#betterSearch").css("bottom","0px");


    if(tipo=="geral"){
       
    }

   


}

// FECHAR A BUSCA
function fecharBetterSearch(dado){
  $("#betterSearch").css("bottom","-1000px");
  
  if(localStorage.getItem("origemField")==1){
      $("#localOrigin").val(dado);
  }
  if(localStorage.getItem("origemField")==2){
      $("#localDestino").val(dado);
  }
}



// FILTRAR RESULTADOS
function filtroBetterSearch(){

      // Declare variables
      var input, filter, ul, li, a, i;
      var entrei = "nao";
      input = document.getElementById('betterSearchField');
      
      //console.log("PESQUISANDO POR: "+$(input).val());

      var query = $(input).val();

      filter = input.value.toUpperCase();
      ul = document.getElementById("dadosResultadosGerais");

      li = ul.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
           a = li[i];
           if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                  li[i].style.display = "block";
                  entrei = "sim";
           } else {
                  li[i].style.display = "none";
                  //$("#dadosResultadosPesquisa").append("<li><b>Cadastrar</b> "+$("#betterSearchField").val()+"</li>");
           }
      }

      if($(input).val()=="" || $(input).val()==" "){
        $("#dadosResultadosGerais li").css("display","none");
      }

      //if(entrei = "nao"){
      //   $("#cadastrarNovosResultados").html("<li onclick='cadastrarNovaOpcao()'><b>Cadastrar</b> "+$("#betterSearchField").val()+"</li>");
      //}


}

function buscarConteudoBusca(){
   
              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: urlApi+"v1/buscaConteudo"
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DOS DADOS PESQUISA NA API","background:#ff0000;color:#fff;");
                  console.log(dados);
                  
                  // LIMPAR HTML
                  $("#dadosResultadosGerais ul").html("");
                  $("#betterSearch .load-wrapp").remove();

                  betterSearch = dados;

                  // ALIMENTAR HTML
                  
                  for(var i = 0;i<dados.locais.length;i++){
                     $("#dadosResultadosGerais").append('<li onclick="fecharBetterSearch(\''+dados.locais[i].nome+'\');"><i class="fa fa-map-marker"></i> '+dados.locais[i].nome+'</li>');
                  }

                 
                  

              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (buscarConteudoBusca)");
                   console.log(dados);

              });
              // FINAL CHAMADA AJAX

}