export interface Arc {
	name: string;
	index: number;
	description: string;
	start: number;
	end: number;
	characters: Array<number>;
	events: Array<number>;
}

export const defaultArc = {
	name: "default",
	index: -1,
	description: "default",
	start: 0,
	end: 0,
	characters:[],
	events:[]
}