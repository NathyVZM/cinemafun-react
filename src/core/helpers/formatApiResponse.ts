/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movie } from "../models";

export const convertSnakeToCamel = (snake: string) => {
    return snake.replace(/_([a-z0-9])/g, (_match, letter) => letter.toUpperCase());
}

export const formatApiResponse = <T>(response: T): any => {
    if (Array.isArray(response)) {
        return response.map(item => formatApiResponse(item));
    } else if (typeof response === 'object' && response !== null) {
        const formattedItem: any = {};
        for (const key in response) {
            formattedItem[convertSnakeToCamel(key)] = formatApiResponse(response[key]);
        }
        return formattedItem as Movie;
    } else {
        return response as Movie;
    }
}