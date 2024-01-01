const error = (error) => {
    let errorData;

    if (error && error.config) {
        errorData = {
            url: `${error.config.baseURL}${error.config.url}`,
            data: error.config.data
        }
    }

    // Log request info
    if (errorData) console.log(`${error.config.method} ${error.response?.status || 500}`, errorData)
    
    // Handle not found endpoints
    if (typeof (error?.response?.data) === 'string') {
        if (error.response.data.includes('Cannot')) {
            error.response.data = {
                error: `${error.config.method} endpoint for /${error.config.url} does not exist`
            }
        }
    }

    return error.response?.data;
}

export default error 