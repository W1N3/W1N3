var birth_date = new Date(1997, 9, 23, 4, 32, 0);

var dictionary = {
	"title": ["Artesão de Software", "Software Artisan"],
	"first_sentence": ["Tempo vivo :", "Time alived :"],
	"years": [" Anos", " Years"],
	"months": [" Meses", " Months"],
	"days": [" Dias", " Days"],
	"hours": [" Horas", " Hours"],
	"minutes": [" Minutos", " Minutes"],
	"seconds": [" Segundos", " Seconds"],
	"preferences": ["Preferências", "Preferences"],
	"humidity" : ["Umidade", "Humidity"], // 63%
	"temperature": ["Temperatura", "Temperature"], // 23 ºC
	"weather": ["Clima", "Weather"],
	"cloudly": ["Nublado", "Cloudly"],
	"food": ["Comida", "Food"], // Crepioca
	"drink": ["Bebida", "Drink"],
	"suco_maracuja" : ["Suco de Maracujá", "Passion Fruit Juice"],
	"dessert": ["Sobremesa", "Dessert"], // Açaí
	"alcohol": ["Bebida Alcóolica", "Alcoholic Drink"], // Rum
	"operating_system": ["Sistema Operacional", "Operating System"], // GNU/Linux
	"window_manager": ["Gerenciador de Janelas", "Window Manager"], // i3 wm
	"programming_language": ["Linguagem de Programação", "Programming Language"],
	"c_like": ["\"tipo C\"", "C-like"],
	"design_pattern": ["Padrão de Projeto", "Design Pattern"],
	"to_discover": ["~a descobrir~", "~to discover~"],
	"artificial_intelligence" : ["Inteligência Artifical", "Aritificial Intelligence"],
	"genetic_algorithms": ["Algoritmo Genético", "Genetic Algorithms"],
	"information_security": ["Segurança da Informação", "Information Security"],
	"reverse_engineering": ["Engenharia Reversa", "Reverse Engineering"],
	"scientific_computing": ["Computação Científica", "Scientific Computing"],
	"simulations": ["\"Simulações\"", "\"Simulations\""],
	"networking": ["Redes de Computadores", "Computers Networking"],
	"curriculum_vitae": ["<a href='./curriculo.pdf'>Currículo</a>", "<a href='./resume.pdf'>Resume</a>"],
	"random_interesting_stuffs": ["Coisas interessantes e aleatórias", "Random interesting stuffs"],
	"whatsapp_dm_without_contact_saving": ["Mandar mensagem pro wpp sem salvar o contato", "Send Whatsapp message without saving the contact"],
	"useless_web" : ["'Sites inúteis'", "The usuless web"],
	"innumerables" : ["Inumeráveis (Vítimas da COVID-19)", "Innumerables (COVID-19 victims)"],
	"covid19" : ["Covidômetro", "Covidometer"],
	"typing_aoeu" : ["Teste de velocidade de digitação", "Typing speed test"],
	"calc_plot_3d" : ["Gráficos em 3D", "Calc Plot 3D"],
	"desmos_graphs" : ["Gráficos em 2D", "2D Calculus Plots"],
	"wordnik" : ["Dicionário de Inglês", "Dictionary"],
	"nick_szabo" : ["Artigos interessantes de Nick Szabo", "Nick Szabo interesting articles"],
	"xkcd" : ["Tirinhas XKCD", "XKCD Comics"],
	"missing_cs" : ["O semestre perdido do curso de Ciência da computação", "The Missing semester of CS education"],
	"theory_building" : ["Programação como construção teórica", "Programming as Theory Building"],
	"shattered_soulstone" : ["Podcast sobre Diablo III", "Shattered Soulstone (Diablo III)"],
	"salted_hashing" : ["Salgando senhas embaralhadas de maneira correta", "Salted Password Hashing Doing it Right"],
	"tarnsap" : ["Salvar arquivos na rede para os paranóicos", "Online backup for the truly paranoid"],
	"boklat" : ["A maior biblioteca de ebook do mundo", "The world's largest ebook library"],
	"systemd_startup" : ["Entendendo a inicialização do systemd no Linux", "Understanding systemd at startup on Linux"],
	"shell_wiki" : ["Melhor guia,tutorial,referência para Shell Script", "Best Shell Script guide,tutorial,reference"],
	"unix_toolbox" : ["Caixa de ferramentas do Unix", "Unix Toolbox"],
	"catonmat" : ["Catonmat - um site pessoal interessante", "Catonmat - an interesting personal website"],
	"softwarecraftsmanship" : ["Manifesto pelo Artesanato de Software", "Manifesto for Software Craftsmanship"],
	"refatorando_cast" : ["Podcast legal sobre história e tecnologia", "Cool podcast about history and technology(portuguese)"],
	"religion_drive" : ["Pasta no google drive sobre religião", "Google drive folder about religion"],
	"art_drive" : ["Pasta no google drive sobre arte", "Google drive folder about art"],
	"break_security" : ["Muito PDF sobre computação e segurança", "Break Security"],
	"musicians_that_i_listen": ["Músicos que eu ouço", "Musicians that I listen"],
	"movies_and_shows_that_i_saw": ["Séries e Filmes que eu já vi", "TV Shows and Movies that I saw"],
	"books_already_read_and_to_read": ["Livros que eu já li e pretendo ler", "Books already read and to read"],
	"games_that_marked_me": ["Jogos que me marcaram", "Games that marked me"],
	"computer_science": ["Ciência da Computação","Computer Science"],
	"history": ["História","History"],
	"literature": ["Literatura","Literature"],
	"math_and_physics": ["Matemática e Física","Math and Physics"],
	"philosophy": ["Filosofia","Philosophy"],
	"political_economy": ["Economia Política","Political Economy"],
	"psyche": ["Psicologia"," Psychology"],
	"map": ["<span class=\"text-blue\"><i><u>Cidades</u></i></span> onde estive, <span class=\"text-purple\"></i><u>escolas</u></i></span> em que estudei, <i><u>lugares</u></i> onde trabalhei",
	"<span class=\"text-blue\"><i><u>Cities</u></i></span> I have been, <span class=\"text-purple\"><i><u>schools</u></i></span> where I studied, <i><u>places</u></i> that I worked"]
};

function exuraVita() {
	var i;
	var counting;
	var map_dots;

	document.getElementById('content').style = "display:flex;";
	changeLanguage('en');
	countLifeTime();
	counting = setInterval(countLifeTime, 1000);
	map_dots = L.map('map-container').setView([-16.3807891, -47.5058749], 4);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/dark-v10',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: 'pk.eyJ1IjoiZ2FicmllbHcxbjMiLCJhIjoiY2toZGh6eWtnMGNuYTJyc2JtaDl6ZmI5cCJ9.h6SxxyFoOvFdKsgFCv5bmw'
	}).addTo(map_dots);

	var icone_visitas = L.icon({
			iconUrl: './images/marker-blue.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowUrl: "./images/marker-shadow.png",
			shadowSize: [41, 41],
			tooltipAnchor: [16, -28]
	});
	var icone_escolas = L.icon({
			iconUrl: './images/marker-purple.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowUrl: "./images/marker-shadow.png",
			shadowSize: [41, 41],
			tooltipAnchor: [16, -28]
	});
	var icone_trabalhos = L.icon({
			iconUrl: './images/marker-gray.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowUrl: "./images/marker-shadow.png",
			shadowSize: [41, 41],
			tooltipAnchor: [16, -28]
	});
	var icone_a_ser_posto;

	var points = 
	[[-19.922460, -43.938397],
	[-19.909251, -43.969268],
	[-19.903540, -43.964840],
	[-19.908074, -43.971428],
	[-19.939072, -43.999145],
	[-19.929963, -43.976768],
	[-22.857572, -43.2329801],
	[-19.922824, -43.940478],
	[-22.858240, -43.232244],
	[-22.857926, -43.232492],
	[-22.862767, -43.223111],
	[-22.861723, -43.228532],
	[-19.461196, -44.246056],
	[-19.919181, -43.938640],
	[-19.602391, -44.248400],
	[-19.761839, -44.299564],
	[-20.387820, -43.501528],
	[-18.889294, -41.955684],
	[-17.603869, -44.751565],
	[-18.808325, -43.680335],
	[-15.676767, -47.979943],
	[-12.892016, -38.385746],
	[-20.662954, -40.491946],
	[-20.901665, -40.776478],
	[-22.893586, -42.021475],
	[-21.737743, -41.345064],
	[-3.707083, -38.525014],
	[-22.933947, -42.492000]];

	for(i = 0 ; i < points.length ; i++) {
		if(i < 7) {
				L.marker(points[i], {icon: icone_escolas}).addTo(map_dots);
		}
		else if( i > 6 && i < 12) {
				L.marker(points[i], {icon: icone_trabalhos}).addTo(map_dots);
		}
		else {
				L.marker(points[i], {icon: icone_visitas}).addTo(map_dots);
		}
	}
}

function changeLanguage(id) {
	var i;
	var which_language = id === 'br' ? 0 : 1;
	list_of_translatables = document.getElementsByClassName('trans');

	for(i = 0 ; i < list_of_translatables.length ; i++) {
		list_of_translatables[i].innerHTML = dictionary[list_of_translatables[i].id][which_language];
	}

	document.getElementById('language_box').children[which_language].classList.add("back-gray");
	document.getElementById('language_box').children[~which_language + 2].classList.remove("back-gray");
}

function countLifeTime() {
	var now = new Date();
	var ms_alived = now.getTime() - birth_date.getTime();
	var tick_alived = [0, 0, 0, 0, 0, 0];
	var divisors = [
			365*24*60*60*1000, // year by ms
			30*24*60*60*1000, // month by ms
			24*60*60*1000, // day by ms
			60*60*1000, // hour by ms
			60*1000, // minute by ms
			1000 // second by ms
		];
	var time_alived_boxes = document.getElementsByClassName('time_alived_value');
	var days_to_add = 0;
	var i;
	
	/*
		to cont the extra day on bissext years
			if (year is not divisible by 4) then (it is a common year)
			else if (year is not divisible by 25) then (it is a leap year)
			else if (year is not divisible by 16) then (it is a common year)
			else (it is a leap year)
	*/
	for(i = birth_date.getFullYear() ; i <= now.getFullYear() ; i++) {
		if(i % 4 == 0 && i % 25 != 0) {
			days_to_add++;
		}
		else if(i % 16 == 0) {
			days_to_add++;
		}
	}
	/*
		Something is wrong on datetime counting in a offset about hour in this fucked up calendar
	*/
	for(i = 0 ; i <  tick_alived.length ; i++) {
		tick_alived[i] = Math.floor(ms_alived / divisors[i]);
		time_alived_boxes[i].innerHTML = tick_alived[i];
		if(!i) {
			ms_alived = ms_alived - days_to_add*divisors[2];
		}
		ms_alived = ms_alived - tick_alived[i]*divisors[i];
	}
}