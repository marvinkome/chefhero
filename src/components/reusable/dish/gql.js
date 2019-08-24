import { gql } from 'apollo-boost';

export const AddItemMutation = gql`
    mutation AddToCart($foodId: ID!) {
        addToCart(foodId: $foodId) {
            id
            totalAmount
            items {
                id
                food {
                    id
                    inCart
                    quantityInCart
                    cartItemId
                }
            }
        }
    }
`;

export const IncreaseItemMutation = gql`
    mutation IncreaseCartItem($cartItemId: ID!) {
        increaseCartItem(cartItemId: $cartItemId) {
            id
            totalAmount
            items {
                id
                food {
                    id
                    quantityInCart
                }
            }
        }
    }
`;

export const DecreaseItemMutation = gql`
    mutation DecreaseCartItem($cartItemId: ID!) {
        decreaseCartItem(cartItemId: $cartItemId) {
            id
            totalAmount
            items {
                id
                food {
                    id
                    inCart
                    quantityInCart
                }
            }
        }
    }
`;
