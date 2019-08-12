function envKeys(prod, dev) {
    if (process.env.NODE_ENV === 'production') {
        return prod;
    }

    return dev;
}

export const baseUrl = envKeys('', 'http://localhost:7070');
export const graphqlEndpoint = envKeys('', 'http://localhost:7070/graphql');
