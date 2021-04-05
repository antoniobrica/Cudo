import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";
import { IBkps, ICountries, ICountry, Iphases, IUsers, } from "../interfaces/task";

export function useCountrykQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<ICountries>(gqlQuery);
  return { loading, error, data };
}


export function useUsersQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<IUsers>(gqlQuery);
  return { loading, error, data };
}

export function useBkpQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<IBkps>(gqlQuery);
  return { loading, error, data };
}

export function usePhaseQuery(gqlQuery: DocumentNode) {
  const { loading, error, data } = useQuery<Iphases>(gqlQuery);
  return { loading, error, data };
}

