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
					skin = 'FaceSnap';
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
					localStorage: true,
					stories: [
						{
							id: "saude",
							photo: "assets/images/saude.jpg",
							name: "SAÚDE",
							link: "",
							lastUpdated: Date.now(),
							items: [
								buildItem("saude-1", "video", 0, "assets/videos/papo-de-caminhoneiro-saude-episodio-1.mp4", "assets/images/splashscreen.png", '', false, Date.now()),
								buildItem("saude-2", "video", 0, "assets/videos/papo-de-caminhoneiro-saude-episodio-2.mp4", "assets/images/splashscreen.png", '', false, Date.now()),
								]
						},
						{
							id: "seguranca",
							photo: "https://lh3.googleusercontent.com/xYFz6B9FHMQq7fDOI_MA61gf0sNdzGBbdR7-mZ7i4rEVvE_N-kZEY_A4eP74Imcf8Sq3FYxAgd4eJA=w200",
							name: "SEGURANÇA",
							link: "",
							lastUpdated: 1492665454,
							items: [
								buildItem("gorillaz-1", "video", 0, "https://instagram.frao1-1.fna.fbcdn.net/t50.2886-16/17886251_1128605603951544_572796556789415936_n.mp4", "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
								buildItem("gorillaz-2", "photo", 3, "https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:large","https://pbs.twimg.com/media/C8VgMQ8WAAE5i9M.jpg:small", '', false, 1492665454),
							]
						},
						{
							id: "dicas",
							photo: "https://lh3.googleusercontent.com/VkANYSL1HOzINPSnzBJRM879b302ShsRwLoKD7mLezgTLvlpHPm_dIVop7mkAQfepze6O5N8rw8l4yM=w200",
							name: "DICAS",
							link: "",
							lastUpdated: 1492665454,
							items: [
								buildItem("ladygaga-1", "photo", 5, "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:large", "https://pbs.twimg.com/media/C8mtrEMXcAA9KKM.jpg:small", '', false, 1492665454),
								buildItem("ladygaga-2", "photo", 3, "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:large", "https://pbs.twimg.com/media/C4t_bxcXAAE3Hwb.jpg:small", 'http://ladygaga.com', false, 1492665454),
							]
						},
						{
							id: "alertas",
							photo: "https://lh3.googleusercontent.com/nMxfllzaAmaCCZJEMiKe2EARjyUNItQ-mdgAq6he-LWXwkIWbiiBIHyC3rGiqDu6fgyVK6NnjcgueA=w200",
							name: "ALERTAS",
							link: "",
							lastUpdated: 1492665454,
							items: [
								buildItem("starboy-1", "photo", 5, "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:large", "https://pbs.twimg.com/media/C6f-dTqVQAAiy1K.jpg:small", '', false, 1492665454)
							]
						},
						{
							id: "novidades",
							photo: "https://lh3.googleusercontent.com/nE4grkY8s88P_1mFFA06mGCNshhqtIz4C4y2dV7AZbm0360zopRKDMCYtUHR0uQR2DAfYMRZdA=s180-p-e100-rwu-v1",
							name: "NOVIDADES",
							link: "",
							lastUpdated: 1492665454,
							items: [
								buildItem("qotsa-1", "photo", 10, "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:large", "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:small", '', false, 1492665454)
							]
						},
            {
							id: "ccr",
							photo: "https://lh3.googleusercontent.com/nE4grkY8s88P_1mFFA06mGCNshhqtIz4C4y2dV7AZbm0360zopRKDMCYtUHR0uQR2DAfYMRZdA=s180-p-e100-rwu-v1",
							name: "CCR",
							link: "",
							lastUpdated: 1492665454,
							items: [
								buildItem("qotsa-1", "photo", 10, "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:large", "https://pbs.twimg.com/media/C8wTxgUVoAALPGA.jpg:small", '', false, 1492665454)
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

			