declare module 'random-animals' {
    export interface RandomAnimalResponse {
        success: boolean;
        status: number;
        info: {
            category: string;
            endpoint: string;
        };
        message: string;
    }

    export interface ApiVersionResponse {
        success: boolean;
        status: number;
        version: string;
        available: number[];
    }

    export interface CdnVersionResponse {
        success: boolean;
        status: number;
        message: string;
        version: string;
        worker: number;
        contact: string;
        domain: {
            main: string;
            api: string;
            cdn: string;
        };
        path: {
            static: string;
            gitResources: string;
            images: string;
            temp: string;
        };
        other: {
            ssl: boolean;
            proxy: boolean;
        };
    }

    export interface RandomAnimals {
        cat(): Promise<RandomAnimalResponse>;
        dog(): Promise<RandomAnimalResponse>;
        fox(): Promise<RandomAnimalResponse>;
        fish(): Promise<RandomAnimalResponse>;
        alpaca(): Promise<RandomAnimalResponse>;
        bird(): Promise<RandomAnimalResponse>;
        apiVersion(): Promise<ApiVersionResponse>;
        cdnVersion(): Promise<CdnVersionResponse>;
    }

    const randomAnimals: RandomAnimals;

    export default randomAnimals;
}