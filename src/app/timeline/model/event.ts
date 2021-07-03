export interface Event {
	name: string;
	index: number;
	description: string;
	occurrence: number;
	time: number;
	characters: Array<number>;
}

export const defaultEvent = {
	name: "default",
	index: -1,
	description: "default",
	occurrence: 0,
	time: 0,
	characters: []
}