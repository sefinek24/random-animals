declare module '@sefinek/random-animals' {
    interface AnimalApiResponse {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }

    export const cat: () => Promise<AnimalApiResponse>;
    export const dog: () => Promise<AnimalApiResponse>;
    export const fox: () => Promise<AnimalApiResponse>;
    export const fish: () => Promise<AnimalApiResponse>;
    export const alpaca: () => Promise<AnimalApiResponse>;
    export const bird: () => Promise<AnimalApiResponse>;

    export const apiVersion: () => Promise<string>;
    export const cdnVersion: () => Promise<string>;
    export const version: string;
}