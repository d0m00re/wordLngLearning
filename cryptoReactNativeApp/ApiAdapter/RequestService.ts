//-----------------
// RequestService.ts
class RequestService {
    async getRequest(url : string) {
        let data = await (await fetch(url)
                            .then(res => res.json())
                            .catch(err => console.log(err)));
        return data;
    }
};

export default new RequestService();