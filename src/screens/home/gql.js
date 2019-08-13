import { gql } from 'apollo-boost';

export const HomePageQuery = gql`
    query HomePageData {
        favouriteRestaurants {
            id
            name
            averageRatings
            priceRange {
                min
                max
            }
        }
        recommendedRestaurants {
            id
            name
            averageRatings
            priceRange {
                min
                max
            }
        }
    }
`;

export const SearchQuery = gql`
    query SearchQuery($keyword: String!) {
        searchRestaurant(keyword: $keyword) {
            id
            name
            averageRatings
            priceRange {
                min
                max
            }
        }
    }
`;
