

/* FUNÇÕES REFERENTES AO MAPA (GMAPS) */
// VARIAVEIS GLOBAIS DO MAPA
var input;
var map;
var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer


// SETAR AS COORDANADAS PADRÃO CASO NÃO AS TENHAMOS
var pscLat = "-23.5667005";
var pscLon = "-46.6531514";

function initMapa(){

  $(".loop-carregando").hide();

   console.log("INICIANDO FUNÇÃO PARA GERAR O MAPA GOOGLEMAPS");

   input = document.getElementById('destino');
   var autoComplete = new google.maps.places.Autocomplete(input);

   var directionsService = new google.maps.DirectionsService();
   google.maps.event.addDomListener(window, 'load', autoComplete);

  localStorage.setItem("latitude",pscLat);
  localStorage.setItem("longitude",pscLon);

  initGeolocation();

}

function carregarMapa(){

         directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...

          pscLat = localStorage.getItem("latitude");
          pscLon = localStorage.getItem("longitude");

           var latlng = new google.maps.LatLng(pscLat, pscLon);

           var options = {
              zoom: 15,
              center: latlng,
              scrollwheel: true,
              disableDefaultUI: true,
              draggable: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP,         
              styles: [
              {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]     
           };


           map = new google.maps.Map(document.getElementById("mapa"), options);
           directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado

               var image = {
                 url: 'assets/images/gps.svg?v=3',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var marker = new google.maps.Marker({
                    icon: image,
                    position: latlng,
                    map: map,
                });

                google.maps.event.addListener(marker,'click',function(){
                    aviso('O que significa esse ícone?','Segundo o seu GPS, essa é a sua localização atual');
                });



                var image2 = {
                 url: 'assets/images/p1.png?v=4',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var latlng2 = new google.maps.LatLng("-23.5240056","-46.8122944");

                var marker2 = new google.maps.Marker({
                    icon: image2,
                    position: latlng2,
                    map: map,
                });

                google.maps.event.addListener(marker2,'click',function(){
                    aviso('O que tem aqui?','Aconteceu um acidente no KM 18 da Bandeirantes');
                });



                var image3 = {
                 url: 'assets/images/p2.png?v=4',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var latlng3 = new google.maps.LatLng("-23.5245245","-46.8056264");

                var marker3 = new google.maps.Marker({
                    icon: image3,
                    position: latlng3,
                    map: map,
                });

                google.maps.event.addListener(marker3,'click',function(){
                    aviso('O que tem aqui?','Um posto de atendimento ao caminhoneiro da CCR Autoban');
                });





                 var image4 = {
                 url: 'assets/images/p32.png?v=4',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var latlng4 = new google.maps.LatLng("-23.5167751","-46.8112215");

                var marker4 = new google.maps.Marker({
                    icon: image4,
                    position: latlng4,
                    map: map,
                });

                google.maps.event.addListener(marker4,'click',function(){
                    aviso('O que tem aqui?','Uma mecânica especializada em manutenção de veículos de 4 a 16 eixos!');
                });



                 var image5 = {
                 url: 'assets/images/p52.png?v=4',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var latlng5 = new google.maps.LatLng("-23.5440031","-46.8061146");

                var marker5 = new google.maps.Marker({
                    icon: image5,
                    position: latlng5,
                    map: map,
                });

                google.maps.event.addListener(marker5,'click',function(){
                    aviso('O que tem aqui?','Cuidado! Alguns caminhoneiros foram assaltados nesse ponto!');
                });




                var image6 = {
                 url: 'assets/images/p42.png?v=4',
                  size: new google.maps.Size(40, 60),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(40, 24)
                };

                var latlng6 = new google.maps.LatLng("-23.5303553","-46.8088075");

                var marker6 = new google.maps.Marker({
                    icon: image6,
                    position: latlng6,
                    map: map,
                });

                google.maps.event.addListener(marker6,'click',function(){
                    aviso('O que tem aqui?','Parada com alimentação, banheiro e cuidados médicos!');
                });



}




        // APÓS O CLICK EM UM LOCAL, VAMOS APAGAR O MAPA, E FAZER APARECER A SELEÇÃO DO TIPO DE TREINO
        $("#destino").change(function(){

               // FAZER APARECER NA TELA A DIV PARA SALVAR O DESTINO
               console.log("DESTINO ESCOLHIDO");

               var destinoEscolhido = $("#destino").val();

               //$("#mapa").fadeOut("250");
               console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
               localStorage.setItem("destinoTreino",destinoEscolhido);

        });

        // CORREÇÃO PARA SELEÇÃO DO DESTINO ONMOBILE
        $(document).on({
            'DOMNodeInserted': function() {
                $('.pac-item, .pac-item span', this).addClass('no-fastclick');
                //$(".tepping-flex").fadeOut("250");
                //$(".caixa-sugestoes-treinos").fadeOut();
                console.log("PAC GOOGLE");
            }
        }, '.pac-container');

        function salvarDestinoKeyUp(){

          var destinoEscolhido = $("#destino").val();

          //$("#mapa").fadeOut("250");
          console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
          localStorage.setItem("destinoTreino",destinoEscolhido);

        }




// INICIALIZAR GEOLOCATION
function initGeolocation(){

      if( navigator.geolocation )
       {
          // Call getCurrentPosition with success and failure callbacks
          navigator.geolocation.getCurrentPosition( success, fail );
       }
       else
       {
          aviso("Sem GPS","Não conseguimos acessar o seu GPS. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
       }
       function success(position)
            {
                var cordenadas = "";
                cordenadas = position.coords.longitude;
                cordenadas = cordenadas+", ";
                cordenadas = cordenadas + position.coords.latitude;
                // SETAR AS NOVAS COORDENADAS
                pscLat = position.coords.latitude;
                pscLon = position.coords.longitude;

                console.log("LAT NEW: "+pscLat);
                console.log("LON NEW: "+pscLon);

                // SALVAR NA MEMORIA A POSIÇÃO ATUAL DO USUARIO
                if(pscLat!="" && pscLon!=""){
                  localStorage.setItem("latitude",pscLat);
                  localStorage.setItem("longitude",pscLon);
                }

                // SE TIVERMOS A LOCALIZAÇÃO ATUAL, A GENTE COMEÇA A EXIBIR O MAPA A PARTIR DESSE PONTO
                if(pscLat!="" && pscLon!=""){

                    console.log("Coordenadas foram obtidas sem maiores problemas.");
                    carregarMapa();

                }else{

                   aviso("Problemas com o GPS","Conseguimos obter os dados do seu GPS, mas os mesmos não estão no formato esperado. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
                   carregarMapa();
                }


            }
          function fail()
            {
               aviso("Sem GPS","Não conseguimos acessar o seu GPS, por causa de um problema de permissões no disposítivo. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
               carregarMapa();
            }


}




// ASSISTIR CAMINHADA
// HISTÓRICO DO PERCUSO FICARÁ SALVO NA VARIAVEL PATH
var path = [];
function gravarPercurso(){
        

        setTimeout("fecharSugestao()",1000);
        
        console.log("INICIANDO FUNÇÃO PARA GRAVAR O PERCURSO DO USUÁRIO");        

        $("section.caminhos-alertas-topo").css("top","0px");
        $(".toolbar-flutuante").fadeIn("500");

        navigator.geolocation.watchPosition(function(position) {
          
          // OBTENDO AS COORDENADAS ATUAIS DO USUÁRIO
          path.push(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          
          var myOptions = {
            zoom : 15,
            center : path[0],
            scrollwheel: true,
            disableDefaultUI: true,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,         
              styles: [
              {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]  
          }

          var map = new google.maps.Map(document.getElementById("mapa"), myOptions);
          console.log("NOVA COORDENADA DETECTADA, SALVANDO NO OBJETO DE HISTÓRICO PATH");          
       
          // DESENHANDO O POLYLINE
          var latLngBounds = new google.maps.LatLngBounds();
           
          var cursor = {
                 url: 'assets/images/gps.svg?v=3',
                 size: new google.maps.Size(40, 60),
                 origin: new google.maps.Point(0,0),
                 anchor: new google.maps.Point(40, 24)
                };

          var cursor2 = {
                 url: 'assets/images/gps-bike.svg',
                 size: new google.maps.Size(40, 60),
                 origin: new google.maps.Point(0,0),
                 anchor: new google.maps.Point(40, 24)
                };

          var cursor3 = {
                 url: 'assets/images/mini.svg',
                  size: new google.maps.Size(20, 20),
                  origin: new google.maps.Point(0,0),
                  anchor: new google.maps.Point(10, 10)
                };



          for(var i = 0; i < path.length; i++) {
            latLngBounds.extend(path[i]);
            
            // POSICIONAR O CURSOS
            if(i==0){
              new google.maps.Marker({
                map: map,
                icon: cursor,
                position: path[i],
                title: "Você começou o seu trajeto aqui " + (i + 1)
              });
            }else{
              new google.maps.Marker({
                map: map,
                icon: cursor3,
                position: path[i],
                title: "Você está aqui agora " + (i + 1)
              });
            }
          }
          // DESENHAR
          var polyline = new google.maps.Polyline({
            map: map,
            path: path,
            strokeColor: '#F9D699',
            strokeOpacity: 1,
            strokeWeight: 7
          });
          // REOORGANIZAR OS POINTS
          map.fitBounds(latLngBounds);
        },

        // TRATAR OS ERROS
        function(positionError){
          //aviso("Oops! Algo deu errado",positionError.message);
          console.log("%c TIMEOUT PARA OBTER WHATCH POSITION","background:#ff0000;color:#fff;");
        },
        {
          enableHighAccuracy: true,
          timeout: 10 * 1000 // ATUALIZAR A LOCALIZAÇÃO A CADA 10 SEGUNDOS
        });

}
