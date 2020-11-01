const API_URL = "http://localhost:8080/api";

const doFetch = (type, params, retries = 3) => {
    return fetch(`${API_URL}/${type}${params ? `?${new URLSearchParams(params)}` : ""}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error("An error occurred. Try again later.");
        })
        .then(data => {
            if (!data || !data.length) {
                throw new Error("Sorry, the vehicle you are looking does not exist.");
            }

            return data;
        })
        .catch((error) => {
            if (retries) {
                return doFetch(type, params, retries - 1);
            }

            throw error;
        });
}

export const getMakes = () => doFetch('makes', {});
export const getModels = (make) => doFetch( 'models', { make });
export const getVehicles = (make, model) => doFetch('vehicles', { make, model });
