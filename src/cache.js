import { unstable_createResource } from 'react-cache';

export function createResourceFetcher(callback) {
  const resource = unstable_createResource(callback);
  return {
    read(...args) {
      return resource.read(...args);
    }
  };
}
