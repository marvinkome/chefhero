import { gql } from 'apollo-boost';

export const CartQuery = gql`
    query CartQuery {
        cart {
            id
            totalAmount
            items {
                id
                food {
                    id
                    day
                    name
                    price
                    inCart
                    quantityInCart
                    cartItemId
                    restaurantId
                }
            }
        }
    }
`;
