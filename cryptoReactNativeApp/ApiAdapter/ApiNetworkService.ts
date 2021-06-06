import RequestService from './RequestService';

interface ICategorie {
    uuid : string;
    theme : string;
    description : string; 
}

// ApiService.ts
const BASE_URL = 'http://192.168.1.11:8000/api/v1';

class ApiNetworkService {
    getRandomWord() : Promise<any> {
        let url = `${BASE_URL}/word/random`;

        return RequestService.getRequest(url);
    };
    getRandomWordTheme(theme : string) : Promise<any> {
        let url = `${BASE_URL}/theme/word/random/${theme}`;
    
        return RequestService.getRequest(url);
    };

    getAllTheme() : Promise<ICategorie[] | null> {
        let url = `${BASE_URL}/theme`;

        return RequestService.getRequest(url);
    }
};

export default new ApiNetworkService();