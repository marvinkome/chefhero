import { gql } from 'apollo-boost';

export const HomePageQuery = gql`
    query HomePageData {
        favouriteRestaurants {
            id
            name
            averageRatings
        }
        recommendedRestaurants {
            id
            name
            averageRatings
        }
    }
`;
