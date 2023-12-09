const extractErrorMessage = (error) => {
    let message = 'Something went wrong'
    
    if (error && error && error.response && error.response.data && error.response.data.message)  {
        message = error.response.data.message;
    }

    return message;
}

export default extractErrorMessage 