const getErrorMessage = (status: number): string => {
    switch (status) {
        case 404:
            return 'City not found. Please check the city name.';
        case 401:
            return 'Invalid API key. Please verify your API key.';
        case 500:
            return 'Server error. Please try again later.';
        default:
            return `Unexpected error: ${status}`;
    }
};

export default getErrorMessage;