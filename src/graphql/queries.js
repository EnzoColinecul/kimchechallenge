import { gql } from '@apollo/client';

const GET_INFO = gql`
query {
  countries{
    name
    capital
    emoji
    currency
    continent{
      name
    }
    languages {
      name
    }
  }
}
`;

export default GET_INFO;
