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
            id: 2001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 2002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 2003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 2004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 2005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 2006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 2007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 2008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 2009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 2010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 2011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 2012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 2013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 2014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 2015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 2016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 2017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 2018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 2019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 2020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 2021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 2022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 2023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 2024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 2025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 2026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 2027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 2028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 2029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 2030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 2031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 2032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 2033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 2034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 2035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 2036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 2037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 2038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 2039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 2040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 2041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 2042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 2043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 2044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 2045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 2046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 2047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 2048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 2049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
        {
            id: 2050,
            ru: "	let , let , позволять	",
            eng: "	let	"
        },
        {
            id: 2051,
            ru: "	lost , lost , терять	",
            eng: "	lose	"
        },
        {
            id: 2052,
            ru: "	laid , laid , укладывать	",
            eng: "	lay	"
        },
        {
            id: 2053,
            ru: "	lay , lain , лежать	",
            eng: "	lie	"
        },
        {
            id: 2054,
            ru: "	made , made , делать, создавать	",
            eng: "	make	"
        },
        {
            id: 2055,
            ru: "	meant , meant , иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 2056,
            ru: "	met , met , встречаться	",
            eng: "	meet	"
        },
        {
            id: 2057,
            ru: "	paid , paid , платить	",
            eng: "	pay	"
        },
        {
            id: 2058,
            ru: "	put , put , класть	",
            eng: "	put	"
        },
        {
            id: 2059,
            ru: "	read , read , читать	",
            eng: "	read	"
        },
        {
            id: 2060,
            ru: "	rode , ridden , ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 2061,
            ru: "	rang , rung , звенеть	",
            eng: "	ring	"
        },
        {
            id: 2062,
            ru: "	ran , run , бегать	",
            eng: "	run	"
        },
        {
            id: 2063,
            ru: "	rose , risen , подниматься	",
            eng: "	rise	"
        },
        {
            id: 2064,
            ru: "	said , said ,  сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 2065,
            ru: "	saw , seen , (у)видеть	",
            eng: "	see	"
        },
        {
            id: 2066,
            ru: "	sold , sold , продавать	",
            eng: "	sell	"
        },
        {
            id: 2067,
            ru: "	sent , sent , отправлять	",
            eng: "	send	"
        },
        {
            id: 2068,
            ru: "	shook , shaken , трясти	",
            eng: "	shake	"
        },
        {
            id: 2069,
            ru: "	shot , shot , стрелять	",
            eng: "	shoot	"
        },
        {
            id: 2070,
            ru: "	shut , shut , захлопывать	",
            eng: "	shut	"
        },
        {
            id: 2071,
            ru: "	sang , sung , петь	",
            eng: "	sing	"
        },
        {
            id: 2072,
            ru: "	sank , sunk , затонуть	",
            eng: "	sink	"
        },
        {
            id: 2073,
            ru: "	sat , sat , сидеть	",
            eng: "	sit	"
        },
        {
            id: 2074,
            ru: "	slept , slept , спать	",
            eng: "	sleep	"
        },
        {
            id: 2075,
            ru: "	slid , slid , скользить	",
            eng: "	slide	"
        },
        {
            id: 2076,
            ru: "	spoke , spoken , разговаривать	",
            eng: "	speak	"
        },
        {
            id: 2077,
            ru: "	spent , spent , тратить	",
            eng: "	spend	"
        },
        {
            id: 2078,
            ru: "	spat , spat , плеваться	",
            eng: "	spit	"
        },
        {
            id: 2079,
            ru: "	stood , stood , встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 2080,
            ru: "	stole , stolen , воровать	",
            eng: "	steal	"
        },
        {
            id: 2081,
            ru: "	stuck , stuck , приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 2082,
            ru: "	stank , stunk , вонять	",
            eng: "	stink	"
        },
        {
            id: 2083,
            ru: "	struck , struck , ударять	",
            eng: "	strike	"
        },
        {
            id: 2084,
            ru: "	swore , sworn , клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 2085,
            ru: "	swept , swept , подметать	",
            eng: "	sweep	"
        },
        {
            id: 2086,
            ru: "	swam , swum , плавать	",
            eng: "	swim	"
        },
        {
            id: 2087,
            ru: "	swung , swung , качаться	",
            eng: "	swing	"
        },
        {
            id: 2088,
            ru: "	took , taken , брать	",
            eng: "	take	"
        },
        {
            id: 2089,
            ru: "	taught , taught ,  обучать	",
            eng: "	teach	"
        },
        {
            id: 2090,
            ru: "	tore , torn , рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 2091,
            ru: "	told , told , рассказывать	",
            eng: "	tell	"
        },
        {
            id: 2092,
            ru: "	thought , thought , думать	",
            eng: "	think	"
        },
        {
            id: 2093,
            ru: "	threw , thrown , бросать	",
            eng: "	throw	"
        },
        {
            id: 2094,
            ru: "	understood , understood , понимать	",
            eng: "	understand	"
        },
        {
            id: 2095,
            ru: "	woke up , woken up ,  будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 2096,
            ru: "	wore , worn , носить одежду	",
            eng: "	wear	"
        },
        {
            id: 2097,
            ru: "	wrote , written , писать	",
            eng: "	write	"
        },
        {
            id: 2098,
            ru: "	wept , wept , хныкать	",
            eng: "	weep	"
        },
        {
            id: 2099,
            ru: "	won , won , выигрывать	",
            eng: "	win	"
        },
        {
            id: 2100,
            ru: "	misunderstood , misunderstood , неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 2101,
            ru: "	misspelt , misspelt , неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 2102,
            ru: "	mistook , mistaken , ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 2103,
            ru: "	misheard , misheard , неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 2104,
            ru: "	overslept , overslept , переспать	",
            eng: "	oversleep	"
        },
        {
            id: 2105,
            ru: "	overate , overeaten , переесть 	",
            eng: "	overeat	"
        },
        {
            id: 2106,
            ru: "	overpaid , overpaid , переплатить	",
            eng: "	overpay	"
        },
        {
            id: 2107,
            ru: "	could , могу - мог	",
            eng: "	can	"
        },
        {
            id: 2108,
            ru: "	should , следует	",
            eng: "	shall	"
        },
        {
            id: 2109,
            ru: "	might , можно / возможно	",
            eng: "	may	"
        },
        {
            id: 2110,
            ru: "	would + V ,  в будущем / бы	",
            eng: "	will	"
        },
    ],
}
export default allCards
