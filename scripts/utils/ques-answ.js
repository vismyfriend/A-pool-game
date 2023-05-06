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
}
export default allCards
