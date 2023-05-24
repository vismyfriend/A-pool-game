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
    IrrV_all: [
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
}
export default allCards
