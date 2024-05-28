declare module '@sefinek/random-animals' {
    interface AnimalInfo {
        category: string;
        endpoint: string;
    }

    interface AnimalApiResponse {
        success: boolean;
        status: number;
        info: AnimalInfo;
        message: string;
    }

    /**
     * Fetch random data for a cat from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random cat data or rejects with an error.
     */
    export const cat: () => Promise<AnimalApiResponse>;

    /**
     * Fetch random data for a dog from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random dog data or rejects with an error.
     */
    export const dog: () => Promise<AnimalApiResponse>;

    /**
     * Fetch random data for a fox from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random fox data or rejects with an error.
     */
    export const fox: () => Promise<AnimalApiResponse>;

    /**
     * Fetch random data for a fish from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random fish data or rejects with an error.
     */
    export const fish: () => Promise<AnimalApiResponse>;

    /**
     * Fetch random data for an alpaca from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random alpaca data or rejects with an error.
     */
    export const alpaca: () => Promise<AnimalApiResponse>;

    /**
     * Fetch random data for a bird from the external API.
     * @returns {Promise<AnimalApiResponse>} - A promise that resolves with random bird data or rejects with an error.
     */
    export const bird: () => Promise<AnimalApiResponse>;

    /**
     * Get the API version from the external API.
     * @returns {Promise<string>} - A promise that resolves with the API version or rejects with an error.
     */
    export const apiVersion: () => Promise<string>;

    /**
     * Get the CDN version from the external CDN.
     * @returns {Promise<string>} - A promise that resolves with the CDN version or rejects with an error.
     */
    export const cdnVersion: () => Promise<string>;

    /**
     * Get module version.
     * @returns {string} - Returns this package version.
     */
    export const version: string;
}