const BACKEND_URL = 'http://localhost:8080/';

export const generateURL = (service, params='') => {
    return `${BACKEND_URL}${service}${params}`;
}
const UseQuery = async (service, method = 'GET', params, body) => {
    const res = await fetch(
        generateURL(service, params),
        { method: method, body: body }
    );
    switch (res.status){
        case 404:
            return 'Not found.';
        case 500:
            return 'Server error.';
        default:
            return await res.json();
    }
}
export const queryCarList = async () => UseQuery('car/all');