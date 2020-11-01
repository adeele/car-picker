const doFetch = (type, params, callback, errorHandler) => {
    fetch(`http://localhost:8080/api/${type}s?${new URLSearchParams(params)}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                callback(JSON.parse(localStorage.getItem(type)));
                throw new Error("An error occurred. Application may not work properly.");
            }
        })
        .then((response) => {
            localStorage.setItem(type, JSON.stringify(response));
            callback(response);
        })
        .catch(errorHandler);
}

export const getMakes = (callback, errorHandler) => doFetch('make', {}, callback, errorHandler);
export const getModels = (make, callback, errorHandler) =>
    doFetch( 'model', { make }, callback, errorHandler);
export const getVehicles = (make, model, callback, errorHandler) =>
    doFetch('vehicle', { make, model }, callback, errorHandler);
