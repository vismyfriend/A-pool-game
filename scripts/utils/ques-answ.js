const allCards = {
    seasons: [
        {
            id: 1,
            ru: "	лето	",
            eng: "	summer /сАмэ/	"
        },
        {
            id: 2,
            ru: "	зима	",
            eng: "	winter	/уИнтэ/"
        },
        {
            id: 3,
            ru: "	осень	",
            eng: "	fall /фол/ or autumn /Отэм/	"
        },
        {
            id: 4,
            ru: "	весна	",
            eng: "	spring /сприн/	"
        },
        {
            id: 5,
            ru: "	январь	",
            eng: "	january "
        },
        {
            id: 6,
            ru: "	февраль	",
            eng: "	february	"
        },
        {
            id: 7,
            ru: "	март	",
            eng: "	march	"
        },
        {
            id: 8,
            ru: "	апрель	",
            eng: "	april /Эйприл/"
        },
        {
            id: 9,
            ru: "	май	",
            eng: "	may /мэй/"
        },
        {
            id: 10,
            ru: "	июнь	",
            eng: "	june	/джун/"
        },
        {
            id: 11,
            ru: "	июль	",
            eng: "	july	/джулАй/"
        },
        {
            id: 12,
            ru: "	август	",
            eng: "	august	/Огэст/"
        },
        {
            id: 13,
            ru: "	сентябрь	",
            eng: "	september	"
        },
        {
            id: 14,
            ru: "	октябрь	",
            eng: "	october	"
        },
        {
            id: 15,
            ru: "	ноябрь	",
            eng: "	november	"
        },
        {
            id: 16,
            ru: "	декабрь	",
            eng: "	december	"
        },

    ],
    animals: [
        {
            id: 101,
            ru: "	Лев	",
            eng: "	Lion /лАйэн/"
        },
        {
            id: 102,
            ru: "	Слон	",
            eng: "	Elephant	"
        },
        {
            id: 103,
            ru: "	Тигр	",
            eng: "	Tiger /тАйгэ/	"
        },
        {
            id: 104,
            ru: "	жираф	",
            eng: "	Giraffe	"
        },
        {
            id: 105,
            ru: "	Обезьяна	",
            eng: "	Monkey	"
        },
        {
            id: 106,
            ru: "	Панда	",
            eng: "	Panda	/пЭнда/"
        },
        {
            id: 107,
            ru: "	Полярный медведь	",
            eng: "	a bear with beer /бЭа/ /бИэ/"
        },
        {
            id: 108,
            ru: "	пингвин	",
            eng: "	Penguin	"
        },
        {
            id: 109,
            ru: "	Кенгуру	",
            eng: "	Kangaroo	"
        },
        {
            id: 110,
            ru: "	Крокодил	",
            eng: "	Crocodile	/крокодАйл"
        },
        {
            id: 111,
            ru: "	Волк	",
            eng: "	Wolf /вулф/"
        },
        {
            id: 112,
            ru: "	Овечка	",
            eng: "	Sheep	"
        },
        {
            id: 113,
            ru: "	Зебра	",
            eng: "	Zebra	/зИбрэ/"
        },
        {
            id: 114,
            ru: "	Лиса	",
            eng: "	Fox	"
        },
        {
            id: 115,
            ru: "	Курица	",
            eng: "	hen	/хэн/"
        },
        {
            id: 116,
            ru: "	Петух	",
            eng: "	Rooster	/рУстэ/"
        }
    ],
    verbs: [
        {
            id: 201,
            ru: "	пить пиво	",
            eng: "	drink beer /бир/	"
        },
        {
            id: 202,
            ru: "	мыть полы	",
            eng: "	wash the floor	"
        },
        {
            id: 203,
            ru: "	готовить еду	",
            eng: "	cook food	"
        },
        {
            id: 204,
            ru: "	целовать иностранца	",
            eng: "	kiss a foreigner	"
        },
        {
            id: 205,
            ru: "	купить ноутбук	",
            eng: "	buy a laptop	"
        },
        {
            id: 206,
            ru: "	петь в душе	",
            eng: "	sing in the shower /шАуэ/	"
        },
        {
            id: 207,
            ru: "	делать домашку	",
            eng: "	do homework	"
        },
        {
            id: 208,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 209,
            ru: "	танцевать на столе	",
            eng: "	dance on the table	"
        },
        {
            id: 210,
            ru: "	курить	",
            eng: "	smoke	"
        },
        {
            id: 211,
            ru: "	усердно работать	",
            eng: "	work hard	"
        },
        {
            id: 212,
            ru: "	отдыхать	",
            eng: "	relax /рилЭкс/	"
        },
        {
            id: 213,
            ru: "	смотреть телефвизор	",
            eng: "	watch TV	"
        },
        {
            id: 214,
            ru: "	играть в игры	",
            eng: "	play video games	"
        },
        {
            id: 215,
            ru: "	болтать по телефону	",
            eng: "	chat on the phone	"
        },
        {
            id: 216,
            ru: "	играть в баскетбол	",
            eng: "	play basketball	"
        },
        {
            id: 217,
            ru: "	играть в покер	",
            eng: "	play poker	"
        },
        {
            id: 218,
            ru: "	играть в нстольные игры	",
            eng: "	play board games	"
        },
        {
            id: 219,
            ru: "	чистить зубы	",
            eng: "	clean teeth	"
        },
        {
            id: 220,
            ru: "	ездить, кататься на велике	",
            eng: "	ride a bicycle /бАйсикл/ 	"
        },
    ],
    numbers: [
        {
            id: 301,
            ru: "	один	",
            eng: "	one	"
        },
        {
            id: 302,
            ru: "	два	",
            eng: "	two	"
        },
        {
            id: 303,
            ru: "	три	",
            eng: "	three	"
        },
        {
            id: 304,
            ru: "	четыре	",
            eng: "	four	"
        },
        {
            id: 305,
            ru: "	пять	",
            eng: "	five	"
        },
        {
            id: 306,
            ru: "	шесть	",
            eng: "	six	"
        },
        {
            id: 307,
            ru: "	семь	",
            eng: "	seven	"
        },
    ],
    Irregular_verbs_1_form: [
        {
            id: 1001,
            ru: "	ломать	",
            eng: "	break	"
        },
        {
            id: 1002,
            ru: "	бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 1003,
            ru: "	становиться	",
            eng: "	become	"
        },
        {
            id: 1004,
            ru: "	начинать	",
            eng: "	begin	"
        },
        {
            id: 1005,
            ru: "	дуть	",
            eng: "	blow	"
        },
        {
            id: 1006,
            ru: "	строить	",
            eng: "	build	"
        },
        {
            id: 1007,
            ru: "	сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 1008,
            ru: "	покупать	",
            eng: "	buy	"
        },
        {
            id: 1009,
            ru: "	приносить	",
            eng: "	bring	"
        },
        {
            id: 1010,
            ru: "	быть	",
            eng: "	be	"
        },
        {
            id: 1011,
            ru: "	кусать	",
            eng: "	bite	"
        },
        {
            id: 1012,
            ru: "	приходить	",
            eng: "	come	"
        },
        {
            id: 1013,
            ru: "	выбирать	",
            eng: "	choose	"
        },
        {
            id: 1014,
            ru: "	ловить	",
            eng: "	catch	"
        },
        {
            id: 1015,
            ru: "	ползать	",
            eng: "	creep	"
        },
        {
            id: 1016,
            ru: "	стоить	",
            eng: "	cost	"
        },
        {
            id: 1017,
            ru: "	резать	",
            eng: "	cut	"
        },
        {
            id: 1018,
            ru: "	иметь дела	",
            eng: "	deal	"
        },
        {
            id: 1019,
            ru: "	копать	",
            eng: "	dig	"
        },
        {
            id: 1020,
            ru: "	делать	",
            eng: "	do	"
        },
        {
            id: 1021,
            ru: "	водить	",
            eng: "	drive	"
        },
        {
            id: 1022,
            ru: "	рисовать	",
            eng: "	draw	"
        },
        {
            id: 1023,
            ru: "	пить	",
            eng: "	drink	"
        },
        {
            id: 1024,
            ru: "	кушать	",
            eng: "	eat	"
        },
        {
            id: 1025,
            ru: "	падать	",
            eng: "	fall	"
        },
        {
            id: 1026,
            ru: "	кормить	",
            eng: "	feed	"
        },
        {
            id: 1027,
            ru: "	чувствовать	",
            eng: "	feel	"
        },
        {
            id: 1028,
            ru: "	сражаться	",
            eng: "	fight	"
        },
        {
            id: 1029,
            ru: "	находить	",
            eng: "	find	"
        },
        {
            id: 1030,
            ru: "	летать	",
            eng: "	fly	"
        },
        {
            id: 1031,
            ru: "	запрещать	",
            eng: "	forbid	"
        },
        {
            id: 1032,
            ru: "	забывать	",
            eng: "	forget	"
        },
        {
            id: 1033,
            ru: "	прощать	",
            eng: "	forgive	"
        },
        {
            id: 1034,
            ru: "	замерзать	",
            eng: "	freeze	"
        },
        {
            id: 1035,
            ru: "	расти	",
            eng: "	grow	"
        },
        {
            id: 1036,
            ru: "	получать	",
            eng: "	get	"
        },
        {
            id: 1037,
            ru: "	давать	",
            eng: "	give	"
        },
        {
            id: 1038,
            ru: "	ходить	",
            eng: "	go	"
        },
        {
            id: 1039,
            ru: "	иметь	",
            eng: "	have	"
        },
        {
            id: 1040,
            ru: "	слышать	",
            eng: "	hear	"
        },
        {
            id: 1041,
            ru: "	прятать	",
            eng: "	hide	"
        },
        {
            id: 1042,
            ru: "	ударять	",
            eng: "	hit	"
        },
        {
            id: 1043,
            ru: "	причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 1044,
            ru: "	держать	",
            eng: "	hold	"
        },
        {
            id: 1045,
            ru: "	хранить	",
            eng: "	keep	"
        },
        {
            id: 1046,
            ru: "	знать	",
            eng: "	know	"
        },
        {
            id: 1047,
            ru: "	изучать	",
            eng: "	learn	"
        },
        {
            id: 1048,
            ru: "	покидать	",
            eng: "	leave	"
        },
        {
            id: 1049,
            ru: "	давать в долг	",
            eng: "	lend	"
        },
        {
            id: 1050,
            ru: "	позволять	",
            eng: "	let	"
        },
        {
            id: 1051,
            ru: "	терять	",
            eng: "	lose	"
        },
        {
            id: 1052,
            ru: "	укладывать	",
            eng: "	lay	"
        },
        {
            id: 1053,
            ru: "	лежать	",
            eng: "	lie	"
        },
        {
            id: 1054,
            ru: "	делать, создавать	",
            eng: "	make	"
        },
        {
            id: 1055,
            ru: "	иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 1056,
            ru: "	встречаться	",
            eng: "	meet	"
        },
        {
            id: 1057,
            ru: "	платить	",
            eng: "	pay	"
        },
        {
            id: 1058,
            ru: "	класть	",
            eng: "	put	"
        },
        {
            id: 1059,
            ru: "	читать	",
            eng: "	read	"
        },
        {
            id: 1060,
            ru: "	ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 1061,
            ru: "	звенеть	",
            eng: "	ring	"
        },
        {
            id: 1062,
            ru: "	бегать	",
            eng: "	run	"
        },
        {
            id: 1063,
            ru: "	подниматься	",
            eng: "	rise	"
        },
        {
            id: 1064,
            ru: "	 сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 1065,
            ru: "	(у)видеть	",
            eng: "	see	"
        },
        {
            id: 1066,
            ru: "	продавать	",
            eng: "	sell	"
        },
        {
            id: 1067,
            ru: "	отправлять	",
            eng: "	send	"
        },
        {
            id: 1068,
            ru: "	трясти	",
            eng: "	shake	"
        },
        {
            id: 1069,
            ru: "	стрелять	",
            eng: "	shoot	"
        },
        {
            id: 1070,
            ru: "	захлопывать	",
            eng: "	shut	"
        },
        {
            id: 1071,
            ru: "	петь	",
            eng: "	sing	"
        },
        {
            id: 1072,
            ru: "	затонуть	",
            eng: "	sink	"
        },
        {
            id: 1073,
            ru: "	сидеть	",
            eng: "	sit	"
        },
        {
            id: 1074,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 1075,
            ru: "	скользить	",
            eng: "	slide	"
        },
        {
            id: 1076,
            ru: "	разговаривать	",
            eng: "	speak	"
        },
        {
            id: 1077,
            ru: "	тратить	",
            eng: "	spend	"
        },
        {
            id: 1078,
            ru: "	плеваться	",
            eng: "	spit	"
        },
        {
            id: 1079,
            ru: "	встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 1080,
            ru: "	воровать	",
            eng: "	steal	"
        },
        {
            id: 1081,
            ru: "	приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 1082,
            ru: "	вонять	",
            eng: "	stink	"
        },
        {
            id: 1083,
            ru: "	ударять	",
            eng: "	strike	"
        },
        {
            id: 1084,
            ru: "	клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 1085,
            ru: "	подметать	",
            eng: "	sweep	"
        },
        {
            id: 1086,
            ru: "	плавать	",
            eng: "	swim	"
        },
        {
            id: 1087,
            ru: "	качаться	",
            eng: "	swing	"
        },
        {
            id: 1088,
            ru: "	брать	",
            eng: "	take	"
        },
        {
            id: 1089,
            ru: "	 обучать	",
            eng: "	teach	"
        },
        {
            id: 1090,
            ru: "	рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 1091,
            ru: "	рассказывать	",
            eng: "	tell	"
        },
        {
            id: 1092,
            ru: "	думать	",
            eng: "	think	"
        },
        {
            id: 1093,
            ru: "	бросать	",
            eng: "	throw	"
        },
        {
            id: 1094,
            ru: "	понимать	",
            eng: "	understand	"
        },
        {
            id: 1095,
            ru: "	 будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 1096,
            ru: "	носить одежду	",
            eng: "	wear	"
        },
        {
            id: 1097,
            ru: "	писать	",
            eng: "	write	"
        },
        {
            id: 1098,
            ru: "	хныкать	",
            eng: "	weep	"
        },
        {
            id: 1099,
            ru: "	выигрывать	",
            eng: "	win	"
        },
        {
            id: 1100,
            ru: "	неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 1101,
            ru: "	неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 1102,
            ru: "	ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 1103,
            ru: "	неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 1104,
            ru: "	переспать	",
            eng: "	oversleep	"
        },
        {
            id: 1105,
            ru: "	переесть 	",
            eng: "	overeat	"
        },
        {
            id: 1106,
            ru: "	переплатить	",
            eng: "	overpay	"
        },
        {
            id: 1107,
            ru: "	могу - мог	",
            eng: "	can	"
        },
        {
            id: 1108,
            ru: "	следует	",
            eng: "	shall	"
        },
        {
            id: 1109,
            ru: "	можно / возможно	",
            eng: "	may	"
        },
        {
            id: 1110,
            ru: "	 в будущем / бы	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_3_forms: [
        {
            id: 3001,
            ru: "	broke , broken	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known	",
            eng: "	know	"
        },
        {
            id: 3047,
            ru: "	learnt , learnt	",
            eng: "	learn	"
        },
        {
            id: 3048,
            ru: "	left , left	",
            eng: "	leave	"
        },
        {
            id: 3049,
            ru: "	lent , lent	",
            eng: "	lend	"
        },
        {
            id: 3050,
            ru: "	let , let	",
            eng: "	let	"
        },
        {
            id: 3051,
            ru: "	lost , lost	",
            eng: "	lose	"
        },
        {
            id: 3052,
            ru: "	laid , laid	",
            eng: "	lay	"
        },
        {
            id: 3053,
            ru: "	lay , lain	",
            eng: "	lie	"
        },
        {
            id: 3054,
            ru: "	made , made	",
            eng: "	make	"
        },
        {
            id: 3055,
            ru: "	meant , meant	",
            eng: "	mean	"
        },
        {
            id: 3056,
            ru: "	met , met	",
            eng: "	meet	"
        },
        {
            id: 3057,
            ru: "	paid , paid	",
            eng: "	pay	"
        },
        {
            id: 3058,
            ru: "	put , put	",
            eng: "	put	"
        },
        {
            id: 3059,
            ru: "	read , read	",
            eng: "	read	"
        },
        {
            id: 3060,
            ru: "	rode , ridden	",
            eng: "	ride	"
        },
        {
            id: 3061,
            ru: "	rang , rung	",
            eng: "	ring	"
        },
        {
            id: 3062,
            ru: "	ran , run	",
            eng: "	run	"
        },
        {
            id: 3063,
            ru: "	rose , risen	",
            eng: "	rise	"
        },
        {
            id: 3064,
            ru: "	said , said	",
            eng: "	say	"
        },
        {
            id: 3065,
            ru: "	saw , seen	",
            eng: "	see	"
        },
        {
            id: 3066,
            ru: "	sold , sold	",
            eng: "	sell	"
        },
        {
            id: 3067,
            ru: "	sent , sent	",
            eng: "	send	"
        },
        {
            id: 3068,
            ru: "	shook , shaken	",
            eng: "	shake	"
        },
        {
            id: 3069,
            ru: "	shot , shot	",
            eng: "	shoot	"
        },
        {
            id: 3070,
            ru: "	shut , shut	",
            eng: "	shut	"
        },
        {
            id: 3071,
            ru: "	sang , sung	",
            eng: "	sing	"
        },
        {
            id: 3072,
            ru: "	sank , sunk	",
            eng: "	sink	"
        },
        {
            id: 3073,
            ru: "	sat , sat	",
            eng: "	sit	"
        },
        {
            id: 3074,
            ru: "	slept , slept	",
            eng: "	sleep	"
        },
        {
            id: 3075,
            ru: "	slid , slid	",
            eng: "	slide	"
        },
        {
            id: 3076,
            ru: "	spoke , spoken	",
            eng: "	speak	"
        },
        {
            id: 3077,
            ru: "	spent , spent	",
            eng: "	spend	"
        },
        {
            id: 3078,
            ru: "	spat , spat	",
            eng: "	spit	"
        },
        {
            id: 3079,
            ru: "	stood , stood	",
            eng: "	stand	"
        },
        {
            id: 3080,
            ru: "	stole , stolen	",
            eng: "	steal	"
        },
        {
            id: 3081,
            ru: "	stuck , stuck	",
            eng: "	stick	"
        },
        {
            id: 3082,
            ru: "	stank , stunk	",
            eng: "	stink	"
        },
        {
            id: 3083,
            ru: "	struck , struck	",
            eng: "	strike	"
        },
        {
            id: 3084,
            ru: "	swore , sworn	",
            eng: "	swear	"
        },
        {
            id: 3085,
            ru: "	swept , swept	",
            eng: "	sweep	"
        },
        {
            id: 3086,
            ru: "	swam , swum	",
            eng: "	swim	"
        },
        {
            id: 3087,
            ru: "	swung , swung	",
            eng: "	swing	"
        },
        {
            id: 3088,
            ru: "	took , taken	",
            eng: "	take	"
        },
        {
            id: 3089,
            ru: "	taught , taught	",
            eng: "	teach	"
        },
        {
            id: 3090,
            ru: "	tore , torn	",
            eng: "	tear	"
        },
        {
            id: 3091,
            ru: "	told , told	",
            eng: "	tell	"
        },
        {
            id: 3092,
            ru: "	thought , thought	",
            eng: "	think	"
        },
        {
            id: 3093,
            ru: "	threw , thrown	",
            eng: "	throw	"
        },
        {
            id: 3094,
            ru: "	understood , understood	",
            eng: "	understand	"
        },
        {
            id: 3095,
            ru: "	woke up , woken up	",
            eng: "	wake up	"
        },
        {
            id: 3096,
            ru: "	wore , worn	",
            eng: "	wear	"
        },
        {
            id: 3097,
            ru: "	wrote , written	",
            eng: "	write	"
        },
        {
            id: 3098,
            ru: "	wept , wept	",
            eng: "	weep	"
        },
        {
            id: 3099,
            ru: "	won , won	",
            eng: "	win	"
        },
        {
            id: 3100,
            ru: "	misunderstood , misunderstood	",
            eng: "	misunderstand	"
        },
        {
            id: 3101,
            ru: "	misspelt , misspelt	",
            eng: "	misspell	"
        },
        {
            id: 3102,
            ru: "	mistook , mistaken	",
            eng: "	mistake	"
        },
        {
            id: 3103,
            ru: "	misheard , misheard	",
            eng: "	mishear	"
        },
        {
            id: 3104,
            ru: "	overslept , overslept	",
            eng: "	oversleep	"
        },
        {
            id: 3105,
            ru: "	overate , overeaten	",
            eng: "	overeat	"
        },
        {
            id: 3106,
            ru: "	overpaid , overpaid	",
            eng: "	overpay	"
        },
        {
            id: 3107,
            ru: "	could	",
            eng: "	can	"
        },
        {
            id: 3108,
            ru: "	should	",
            eng: "	shall	"
        },
        {
            id: 3109,
            ru: "	might	",
            eng: "	may	"
        },
        {
            id: 3110,
            ru: "	would + V	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_En_Ru: [
        {					
            id	:	2001	,		
            ru	:	"	break	"	,
            eng	:	"	broke , broken , ломать	"	
            }	,				
            {					
            id	:	2002	,		
            ru	:	"	beat	"	,
            eng	:	"	beat , beaten , бить, побеждать	"	
            }	,				
            {					
            id	:	2003	,		
            ru	:	"	become	"	,
            eng	:	"	became , become , становиться	"	
            }	,				
            {					
            id	:	2004	,		
            ru	:	"	begin	"	,
            eng	:	"	began , begun , начинать	"	
            }	,				
            {					
            id	:	2005	,		
            ru	:	"	blow	"	,
            eng	:	"	blew , blown , дуть	"	
            }	,				
            {					
            id	:	2006	,		
            ru	:	"	build	"	,
            eng	:	"	built , built , строить	"	
            }	,				
            {					
            id	:	2007	,		
            ru	:	"	burn	"	,
            eng	:	"	burnt , burnt , сжигать, гореть	"	
            }	,				
            {					
            id	:	2008	,		
            ru	:	"	buy	"	,
            eng	:	"	bought , bought , покупать	"	
            }	,				
            {					
            id	:	2009	,		
            ru	:	"	bring	"	,
            eng	:	"	brought , brought , приносить	"	
            }	,				
            {					
            id	:	2010	,		
            ru	:	"	be	"	,
            eng	:	"	was/were , been , быть	"	
            }	,				
            {					
            id	:	2011	,		
            ru	:	"	bite	"	,
            eng	:	"	bit , bit , кусать	"	
            }	,				
            {					
            id	:	2012	,		
            ru	:	"	come	"	,
            eng	:	"	came , come , приходить	"	
            }	,				
            {					
            id	:	2013	,		
            ru	:	"	choose	"	,
            eng	:	"	chose , chosen , выбирать	"	
            }	,				
            {					
            id	:	2014	,		
            ru	:	"	catch	"	,
            eng	:	"	caught , caught , ловить	"	
            }	,				
            {					
            id	:	2015	,		
            ru	:	"	creep	"	,
            eng	:	"	crept , crept , ползать	"	
            }	,				
            {					
            id	:	2016	,		
            ru	:	"	cost	"	,
            eng	:	"	cost , cost , стоить	"	
            }	,				
            {					
            id	:	2017	,		
            ru	:	"	cut	"	,
            eng	:	"	cut , cut , резать	"	
            }	,				
            {					
            id	:	2018	,		
            ru	:	"	deal	"	,
            eng	:	"	dealt , dealt , иметь дела	"	
            }	,				
            {					
            id	:	2019	,		
            ru	:	"	dig	"	,
            eng	:	"	dug , dug , копать	"	
            }	,				
            {					
            id	:	2020	,		
            ru	:	"	do	"	,
            eng	:	"	did , done , делать	"	
            }	,				
            {					
            id	:	2021	,		
            ru	:	"	drive	"	,
            eng	:	"	drove , driven , водить	"	
            }	,				
            {					
            id	:	2022	,		
            ru	:	"	draw	"	,
            eng	:	"	drew , drawn , рисовать	"	
            }	,				
            {					
            id	:	2023	,		
            ru	:	"	drink	"	,
            eng	:	"	drank , drunk , пить	"	
            }	,				
            {					
            id	:	2024	,		
            ru	:	"	eat	"	,
            eng	:	"	ate , eaten , кушать	"	
            }	,				
            {					
            id	:	2025	,		
            ru	:	"	fall	"	,
            eng	:	"	fell , fallen , падать	"	
            }	,				
            {					
            id	:	2026	,		
            ru	:	"	feed	"	,
            eng	:	"	fed , fed , кормить	"	
            }	,				
            {					
            id	:	2027	,		
            ru	:	"	feel	"	,
            eng	:	"	felt , felt , чувствовать	"	
            }	,				
            {					
            id	:	2028	,		
            ru	:	"	fight	"	,
            eng	:	"	fought , fought , сражаться	"	
            }	,				
            {					
            id	:	2029	,		
            ru	:	"	find	"	,
            eng	:	"	found , found , находить	"	
            }	,				
            {					
            id	:	2030	,		
            ru	:	"	fly	"	,
            eng	:	"	flew , flown , летать	"	
            }	,				
            {					
            id	:	2031	,		
            ru	:	"	forbid	"	,
            eng	:	"	forbade , forbidden , запрещать	"	
            }	,				
            {					
            id	:	2032	,		
            ru	:	"	forget	"	,
            eng	:	"	forgot , forgotten , забывать	"	
            }	,				
            {					
            id	:	2033	,		
            ru	:	"	forgive	"	,
            eng	:	"	forgave , forgiven , прощать	"	
            }	,				
            {					
            id	:	2034	,		
            ru	:	"	freeze	"	,
            eng	:	"	froze , frozen , замерзать	"	
            }	,				
            {					
            id	:	2035	,		
            ru	:	"	grow	"	,
            eng	:	"	grew , grown , расти	"	
            }	,				
            {					
            id	:	2036	,		
            ru	:	"	get	"	,
            eng	:	"	got , got , получать	"	
            }	,				
            {					
            id	:	2037	,		
            ru	:	"	give	"	,
            eng	:	"	gave , given , давать	"	
            }	,				
            {					
            id	:	2038	,		
            ru	:	"	go	"	,
            eng	:	"	went , gone , ходить	"	
            }	,				
            {					
            id	:	2039	,		
            ru	:	"	have	"	,
            eng	:	"	had , had , иметь	"	
            }	,				
            {					
            id	:	2040	,		
            ru	:	"	hear	"	,
            eng	:	"	heard , heard , слышать	"	
            }	,				
            {					
            id	:	2041	,		
            ru	:	"	hide	"	,
            eng	:	"	hid , hidden , прятать	"	
            }	,				
            {					
            id	:	2042	,		
            ru	:	"	hit	"	,
            eng	:	"	hit , hit , ударять	"	
            }	,				
            {					
            id	:	2043	,		
            ru	:	"	hurt	"	,
            eng	:	"	hurt , hurt , причинять боль	"	
            }	,				
            {					
            id	:	2044	,		
            ru	:	"	hold	"	,
            eng	:	"	held , held , держать	"	
            }	,				
            {					
            id	:	2045	,		
            ru	:	"	keep	"	,
            eng	:	"	kept , kept , хранить	"	
            }	,				
            {					
            id	:	2046	,		
            ru	:	"	know	"	,
            eng	:	"	knew , known , знать	"	
            }	,				
            {					
            id	:	2047	,		
            ru	:	"	learn	"	,
            eng	:	"	learnt , learnt , изучать	"	
            }	,				
            {					
            id	:	2048	,		
            ru	:	"	leave	"	,
            eng	:	"	left , left , покидать	"	
            }	,				
            {					
            id	:	2049	,		
            ru	:	"	lend	"	,
            eng	:	"	lent , lent , давать в долг	"	
            }	,				
            {					
            id	:	2050	,		
            ru	:	"	let	"	,
            eng	:	"	let , let , позволять	"	
            }	,				
            {					
            id	:	2051	,		
            ru	:	"	lose	"	,
            eng	:	"	lost , lost , терять	"	
            }	,				
            {					
            id	:	2052	,		
            ru	:	"	lay	"	,
            eng	:	"	laid , laid , укладывать	"	
            }	,				
            {					
            id	:	2053	,		
            ru	:	"	lie	"	,
            eng	:	"	lay , lain , лежать	"	
            }	,				
            {					
            id	:	2054	,		
            ru	:	"	make	"	,
            eng	:	"	made , made , делать, создавать	"	
            }	,				
            {					
            id	:	2055	,		
            ru	:	"	mean	"	,
            eng	:	"	meant , meant , иметь ввиду	"	
            }	,				
            {					
            id	:	2056	,		
            ru	:	"	meet	"	,
            eng	:	"	met , met , встречаться	"	
            }	,				
            {					
            id	:	2057	,		
            ru	:	"	pay	"	,
            eng	:	"	paid , paid , платить	"	
            }	,				
            {					
            id	:	2058	,		
            ru	:	"	put	"	,
            eng	:	"	put , put , класть	"	
            }	,				
            {					
            id	:	2059	,		
            ru	:	"	read	"	,
            eng	:	"	read , read , читать	"	
            }	,				
            {					
            id	:	2060	,		
            ru	:	"	ride	"	,
            eng	:	"	rode , ridden , ездить верхом	"	
            }	,				
            {					
            id	:	2061	,		
            ru	:	"	ring	"	,
            eng	:	"	rang , rung , звенеть	"	
            }	,				
            {					
            id	:	2062	,		
            ru	:	"	run	"	,
            eng	:	"	ran , run , бегать	"	
            }	,				
            {					
            id	:	2063	,		
            ru	:	"	rise	"	,
            eng	:	"	rose , risen , подниматься	"	
            }	,				
            {					
            id	:	2064	,		
            ru	:	"	say	"	,
            eng	:	"	said , said ,  сказать, произнести	"	
            }	,				
            {					
            id	:	2065	,		
            ru	:	"	see	"	,
            eng	:	"	saw , seen , (у)видеть	"	
            }	,				
            {					
            id	:	2066	,		
            ru	:	"	sell	"	,
            eng	:	"	sold , sold , продавать	"	
            }	,				
            {					
            id	:	2067	,		
            ru	:	"	send	"	,
            eng	:	"	sent , sent , отправлять	"	
            }	,				
            {					
            id	:	2068	,		
            ru	:	"	shake	"	,
            eng	:	"	shook , shaken , трясти	"	
            }	,				
            {					
            id	:	2069	,		
            ru	:	"	shoot	"	,
            eng	:	"	shot , shot , стрелять	"	
            }	,				
            {					
            id	:	2070	,		
            ru	:	"	shut	"	,
            eng	:	"	shut , shut , захлопывать	"	
            }	,				
            {					
            id	:	2071	,		
            ru	:	"	sing	"	,
            eng	:	"	sang , sung , петь	"	
            }	,				
            {					
            id	:	2072	,		
            ru	:	"	sink	"	,
            eng	:	"	sank , sunk , затонуть	"	
            }	,				
            {					
            id	:	2073	,		
            ru	:	"	sit	"	,
            eng	:	"	sat , sat , сидеть	"	
            }	,				
            {					
            id	:	2074	,		
            ru	:	"	sleep	"	,
            eng	:	"	slept , slept , спать	"	
            }	,				
            {					
            id	:	2075	,		
            ru	:	"	slide	"	,
            eng	:	"	slid , slid , скользить	"	
            }	,				
            {					
            id	:	2076	,		
            ru	:	"	speak	"	,
            eng	:	"	spoke , spoken , разговаривать	"	
            }	,				
            {					
            id	:	2077	,		
            ru	:	"	spend	"	,
            eng	:	"	spent , spent , тратить	"	
            }	,				
            {					
            id	:	2078	,		
            ru	:	"	spit	"	,
            eng	:	"	spat , spat , плеваться	"	
            }	,				
            {					
            id	:	2079	,		
            ru	:	"	stand	"	,
            eng	:	"	stood , stood , встать, стоять	"	
            }	,				
            {					
            id	:	2080	,		
            ru	:	"	steal	"	,
            eng	:	"	stole , stolen , воровать	"	
            }	,				
            {					
            id	:	2081	,		
            ru	:	"	stick	"	,
            eng	:	"	stuck , stuck , приклеить, застрять 	"	
            }	,				
            {					
            id	:	2082	,		
            ru	:	"	stink	"	,
            eng	:	"	stank , stunk , вонять	"	
            }	,				
            {					
            id	:	2083	,		
            ru	:	"	strike	"	,
            eng	:	"	struck , struck , ударять	"	
            }	,				
            {					
            id	:	2084	,		
            ru	:	"	swear	"	,
            eng	:	"	swore , sworn , клясться/материться 	"	
            }	,				
            {					
            id	:	2085	,		
            ru	:	"	sweep	"	,
            eng	:	"	swept , swept , подметать	"	
            }	,				
            {					
            id	:	2086	,		
            ru	:	"	swim	"	,
            eng	:	"	swam , swum , плавать	"	
            }	,				
            {					
            id	:	2087	,		
            ru	:	"	swing	"	,
            eng	:	"	swung , swung , качаться	"	
            }	,				
            {					
            id	:	2088	,		
            ru	:	"	take	"	,
            eng	:	"	took , taken , брать	"	
            }	,				
            {					
            id	:	2089	,		
            ru	:	"	teach	"	,
            eng	:	"	taught , taught ,  обучать	"	
            }	,				
            {					
            id	:	2090	,		
            ru	:	"	tear	"	,
            eng	:	"	tore , torn , рвать, вырывать	"	
            }	,				
            {					
            id	:	2091	,		
            ru	:	"	tell	"	,
            eng	:	"	told , told , рассказывать	"	
            }	,				
            {					
            id	:	2092	,		
            ru	:	"	think	"	,
            eng	:	"	thought , thought , думать	"	
            }	,				
            {					
            id	:	2093	,		
            ru	:	"	throw	"	,
            eng	:	"	threw , thrown , бросать	"	
            }	,				
            {					
            id	:	2094	,		
            ru	:	"	understand	"	,
            eng	:	"	understood , understood , понимать	"	
            }	,				
            {					
            id	:	2095	,		
            ru	:	"	wake up	"	,
            eng	:	"	woke up , woken up ,  будить, просыпаться	"	
            }	,				
            {					
            id	:	2096	,		
            ru	:	"	wear	"	,
            eng	:	"	wore , worn , носить одежду	"	
            }	,				
            {					
            id	:	2097	,		
            ru	:	"	write	"	,
            eng	:	"	wrote , written , писать	"	
            }	,				
            {					
            id	:	2098	,		
            ru	:	"	weep	"	,
            eng	:	"	wept , wept , хныкать	"	
            }	,				
            {					
            id	:	2099	,		
            ru	:	"	win	"	,
            eng	:	"	won , won , выигрывать	"	
            }	,				
            {					
            id	:	2100	,		
            ru	:	"	misunderstand	"	,
            eng	:	"	misunderstood , misunderstood , неправ. понять	"	
            }	,				
            {					
            id	:	2101	,		
            ru	:	"	misspell	"	,
            eng	:	"	misspelt , misspelt , неправ. написать	"	
            }	,				
            {					
            id	:	2102	,		
            ru	:	"	mistake	"	,
            eng	:	"	mistook , mistaken , ошибаться	"	
            }	,				
            {					
            id	:	2103	,		
            ru	:	"	mishear	"	,
            eng	:	"	misheard , misheard , неправ. услышать	"	
            }	,				
            {					
            id	:	2104	,		
            ru	:	"	oversleep	"	,
            eng	:	"	overslept , overslept , переспать	"	
            }	,				
            {					
            id	:	2105	,		
            ru	:	"	overeat	"	,
            eng	:	"	overate , overeaten , переесть 	"	
            }	,				
            {					
            id	:	2106	,		
            ru	:	"	overpay	"	,
            eng	:	"	overpaid , overpaid , переплатить	"	
            }	,				
            {					
            id	:	2107	,		
            ru	:	"	can	"	,
            eng	:	"	could , могу - мог	"	
            }	,				
            {					
            id	:	2108	,		
            ru	:	"	shall	"	,
            eng	:	"	should , следует	"	
            }	,				
            {					
            id	:	2109	,		
            ru	:	"	may	"	,
            eng	:	"	might , можно / возможно	"	
            }	,				
            {					
            id	:	2110	,		
            ru	:	"	will	"	,
            eng	:	"	would + V ,  в будущем / бы	"	
            }	,				
    ],
}
export default allCards
