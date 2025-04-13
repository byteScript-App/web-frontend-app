import { AppRoutesProps } from '@/app';

export type Nullable<T> = {
	[K in keyof T]: T[K] | null;
};

// TODO: Route System Types
export type AppRoutesKeys<T extends AppRoutesProps, K = keyof T> = K extends string
	? T[K] extends { children: AppRoutesProps }
		? `${K}.${AppRoutesKeys<T[K]['children']>}` | K
		: K
	: never;

export type AppRouteByDotKey<
	T extends AppRoutesProps,
	K extends string,
> = K extends `${infer R1}.${infer R2}`
	? T[R1] extends { children: AppRoutesProps }
		? AppRouteByDotKey<T[R1]['children'], R2>
		: never
	: K extends keyof T
		? T[K]
		: never;

export type AppRoutePathChunk<T extends string> = T extends `${infer R1}/${infer R2}`
	? R1 | AppRoutePathChunk<R2>
	: T;

export type AppRouteChunksToNames<T extends string> = T extends `:${infer R1}-:${infer R2}`
	? R1 | AppRouteChunksToNames<`:${R2}`>
	: T extends `:${infer R1}`
		? R1
		: never;

export type GetAppRouteParams<T extends AppRoutesProps, U extends string> = {
	[K in AppRouteChunksToNames<AppRoutePathChunk<AppRouteByDotKey<T, U>['path']>>]: number | string;
};
