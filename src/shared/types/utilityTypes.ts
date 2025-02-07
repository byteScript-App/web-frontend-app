// Custom Util Types for our Typescript usage:

export type Nullable<T> = {
	[K in keyof T]: T[K] | null;
};
