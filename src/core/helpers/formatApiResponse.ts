/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from "../models";

export const convertSnakeToCamel = (snake: string) => {
    return snake.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
}

export const formatApiResponse = (response: any[]) => {
    return response.map(item => {
        const formattedItem: any = {};
        for (const key in item) {
            formattedItem[convertSnakeToCamel(key as keyof Movie)] = item[key];
        }
        return formattedItem as Movie;
    });
}