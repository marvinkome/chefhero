import { gql } from 'apollo-boost';

export const RestaurantQuery = gql`
    query Restaurant($id: ID!) {
        restaurant(id: $id) {
            id
            name
            averageRatings
            isFavourite
            activeMenu {
                id
                foods {
                    id
                    day
                    name
                    price
                }
            }
        }
    }
`;
