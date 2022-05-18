import { useQuery } from '@apollo/client';
import GET_INFO from '../graphql/queries';

const useData = () => {
  const result = useQuery(GET_INFO);
  return result;
};

export default useData;
