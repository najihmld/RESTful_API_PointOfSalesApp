module.exports = {
    response: (response, status, data, pagination) => {
        const result = {}
        result.status = status || 200;
        result.data = data;
        
        return response.status(result.status).json(result)
    }
}
