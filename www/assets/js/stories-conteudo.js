function buildItem(id, type, length, src, preview, link, seen, time){
                return {
                            "id": id,
                            "type": type,
                            "length": length,
                            "src": src,
                            "preview": preview,
                            "link": link,
                            "seen": seen,
							"time": time
                        };
            }

			var initDemo = function(){
				var header = document.getElementById("header");
				var skin = location.href.split('skin=')[1];

				if(!skin) {
					skin = 'Snapgram';
				}

				if(skin.indexOf('#')!==-1){
				   skin = skin.split('#')[0];
				}

				var skins = {
					'Snapgram': {
						'avatars': true,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': true
					},

					'VemDeZAP': {
						'avatars': false,
						'list': true,
						'autoFullScreen': false,
                        'cubeEffect': false
					},

					'FaceSnap': {
						'avatars': true,
						'list': false,
						'autoFullScreen': true,
                        'cubeEffect': false
					},

					'Snapssenger': {
						'avatars': false,
						'list': false,
						'autoFullScreen': false,
                        'cubeEffect': false
					}
				};

				var stories = new Zuck('stories', {
					backNative: true,
					autoFullScreen: skins[skin]['autoFullScreen'],
					skin: skin,
					avatars: skins[skin]['avatars'],
					list: skins[skin]['list'],
                    cubeEffect: skins[skin]['cubeEffect'],
					localStorage: false,				
					stories: [
						{
							id: "saude",
							photo: "assets/images/Saude_2.png",
							name: "SAÚDE",
							link: "",
							lastUpdated: "0",
							items: [
								buildItem("saude-1", "video", 0, "assets/videos/papo-de-caminhoneiro-saude-episodio-1.mp4", "assets/images/foto-perfil.png", '', false, 0),
								buildItem("saude-2", "video", 0, "assets/videos/papo-de-caminhoneiro-saude-episodio-2.mp4", "assets/images/foto-perfil.png", '', false, 0),
								]
						},
						{
							id: "seguranca",
							photo: "assets/images/Seguranca.png",
							name: "SEGURANÇA",
							link: "",
							lastUpdated: Date.now(),
							items: [
								buildItem("seguranca-1", "photo", 0, "assets/images/seguranca-1.jpg", "assets/images/seguranca-1.jpg?v=2", '', false, Date.now()),
								buildItem("seguranca-2", "photo", 0, "assets/images/seguranca-2.jpg","assets/images/seguranca-2.jpg?v=2", '', false, Date.now()),
								buildItem("seguranca-3", "photo", 0, "assets/images/seguranca-3b.jpg","assets/images/seguranca-3b.jpg", '', false, Date.now()),
							]
						},
						{
							id: "elas",
							photo: "assets/images/Elas2.png",
							name: "ELAS",
							link: "",
							lastUpdated: Date.now(),
							items: [
								buildItem("elas-1", "video", 0, "assets/videos/mulher.mp4", "assets/images/elas.png", '', false, Date.now()),
							]
						},
						{
							id: "dicas",
							photo: "assets/images/Dicas.png",
							name: "DICAS",
							link: "",
							lastUpdated: Date.now(),
							items: [
								buildItem("dicas-1", "video", 0, "assets/videos/dicas-de-economia-para-caminhoneiros.mp4", "assets/images/foto-perfil.png", '', false, Date.now()),
							]
						},
						{
							id: "alertas",
							photo: "assets/images/Alertas.png",
							name: "ALERTAS",
							link: "",
							lastUpdated: Date.now(),
							items: [
								buildItem("alertas-1", "video", 0, "assets/videos/ccr.mp4", "assets/images/foto-perfil.png", '', true, Date.now())
							]
						},
						{
							id: "novidades",
							photo: "assets/images/Novidades.png",
							name: "NOVIDADES",
							link: "",
							lastUpdated: "",
							items: [
								buildItem("novidades-1", "photo", 0, "assets/images/novidades.jpg", "assets/images/novidades.jpg", '', false, "")
							]
						},
            {
							id: "ccr",
							photo: "assets/images/CCR.png",
							name: "CCR",
							link: "",
							lastUpdated: "",
							items: [
								buildItem("ccr-1", "photo", 0, "assets/images/ccr.jpg", "assets/images/ccr.jpg", '', false, "")
							]
						}
					]
				});

                var el = document.querySelectorAll('#skin option');
                var total = el.length;
                for (var i = 0; i < total; i++) {
					var what = (skin==el[i].value)?true:false;

					if(what){
						el[i].setAttribute('selected', what);

						header.innerHTML = skin;
						header.className = skin;
					} else {
						el[i].removeAttribute('selected');
					}
                }

				document.body.style.display = 'block';
			};

			