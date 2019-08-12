import ApolloClient from 'apollo-boost';
import { graphqlEndpoint as uri } from 'src/config';

export const client = new ApolloClient({
    uri,
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcnZpbmtvbWVAZ21haWwuY29tIiwiaWQiOiI1ZDI4YWUwNzkzYzY0ZTNhMzZiNjg3YjYiLCJleHAiOjE1NjgxMzEwNzkuNDg0LCJpYXQiOjE1NjI5NDcwNzl9.uVZwm6SAtKmiXBTTRaLWt3GIWMqJjVnaotKXB46ebug'
    }
});
