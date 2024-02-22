const error = (error) => {
    let errorData = {};

    if (error?.config) {
        errorData.url = `${error.config.baseURL}${error.config.url}`;
        errorData.method = `${error.config.method} ${error.response?.status || 500}`;
    }

    if (error?.config?.data) {
        errorData.data = error.config.data;
    }

    // Handle not found endpoints
    if (typeof (error?.response?.data) === 'string') {
        if (error.response.data.includes('Cannot')) {
            errorData.error = `${error.config.method} endpoint for /${error.config.url} does not exist`
        }
    }

    console.log("API ERROR", errorData)
    // return errorData;
}

export default error 