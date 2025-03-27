const API_URL = 'http://pselmonks.local/wp-json/wp/v2/'

export async function fetchAPI(endpoint: string, parameters: string[]|null = null): Promise<any> {
    if (parameters) {
        endpoint += '?';
        parameters.forEach(param => {
            endpoint += `&${param}`;
        })
    }

    const response = await fetch(API_URL + endpoint)

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json();
}