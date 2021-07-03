export interface Attribute {
	name: string;
	index: number;
	description: string;
	start: number;
	end: number;
	attributes: Array<Attribute>;
	events: Array<number>;
}

export interface Character {
	name: string;
	index: number;
	description: string;
	start: number;
	end: number;
	attributes: Array<Attribute>;
}

export const defaultAttribute = {
	name: "default",
	index: -1,
	description: "default",
	start: 0,
	end: 0,
	attributes:[],
	events:[]
}

export const defaultCharacter = {
	name: "default",
	index: -1,
	description: "default",
	start: 0,
	end: 0,
	attributes:[]
}