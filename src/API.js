const doFetch = (type, params, retries = 3) => {
    return fetch(`http://localhost:8080/api/${type}s?${new URLSearchParams(params)}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("An error occurred. Application may not work properly.");
            }
        })
        .catch((error) => {
            if (retries) {
                return doFetch(type, params, retries - 1);
            }

            throw error;
        });
}

export const getMakes = () => doFetch('make', {});
export const getModels = (make) => doFetch( 'model', { make });
export const getVehicles = (make, model) => doFetch('vehicle', { make, model });
