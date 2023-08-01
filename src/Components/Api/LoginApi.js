import fetch from 'isomorphic-fetch';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

const apiRootUrl = 'http://localhost:8080';

class LoginApi {
    static getDemo() {
        const apiUrl = '/demo';
        return fetch(apiRootUrl + apiUrl,
            {
                mode: 'no-cors',
                method: 'GET',
                headers: new Headers(headers)
            })
            .then((response) => {
                try{
                    const responseThing = response;
                    return responseThing;
                } catch (e) {
                    return response;
                }
            });
    }
}

export default LoginApi;