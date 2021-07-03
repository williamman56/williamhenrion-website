export interface comicListItem {
	selector: string,
	name: string,
	author: string,
	nameJap: string,
	authorJap: string,
	twitterSrc: string,
	descriptionShort: string,
	descriptionLong: string,
	length: number,
	ongoing: boolean,
	updatedDate: string
}

export const defaultComicListItem = {
	selector: "",
	name: "",
	author: "",
	nameJap: "",
	authorJap: "",
	twitterSrc: "",
	descriptionShort: "",
	descriptionLong: "",
	length: 0,
	ongoing: false,
	updatedDate: ""
}

export const comicsList = [
	{
		"selector":"director-tyranno",
		"name":"Director Tyranno",
		"author":"Ryo Shitara",
		"nameJap":"ティラノ部長",
		"authorJap":"したら領",
		"twitterSrc":"twitter.com/shitara_ryo/",
		"descriptionShort":"A comedic story about office generational gaps told through the lens of a literal dinosaur.",
		"descriptionLong":"Director Tyranno is having difficulty adapting to the changing workplace culture, and he misses the way things were when he was younger. Written by the author of A Sleepless Wolf (眠れないオオカミ), Ryo Shitara publishes this series on his Twitter regularly.",
		"length":3,
		"chapterSize":4,
		"ongoing":true,
		"updatedDate":"June 26, 2021"
	},
		{
		"selector":"ragged-sofa",
		"name":"The Ragged Sofa",
		"author":"No One",
		"nameJap":"ボロボロのソファー",
		"authorJap":"誰でもない",
		"twitterSrc":"twitter.com/daredemonaidare/status/1405451701407023113",
		"descriptionShort":"An old sofa helps reunite two friends.",
		"descriptionLong":"Through the aid of a sofa that finds lost items, Hinami and Sumire are able to re-ignite their friendship after the loss of a precious item tore it apart. Writing under pseudonym \"No One\", this author regularly publishes on Amazon collections of short stories.",
		"length":1,
		"chapterSize":7,
		"ongoing":false,
		"updatedDate":"June 28, 2021"
	}
]