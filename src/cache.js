import { unstable_createResource as createResource } from 'react-cache';

export function createResourceFetcher(callback) {
  const resource = createResource(callback);
  return {
    read(...args) {
      return resource.read(...args);
    }
  };
}
