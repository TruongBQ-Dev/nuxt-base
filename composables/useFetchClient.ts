import { $fetch } from "ofetch";

const createFetchRequest = (
  method: string,
  url: string,
  options: {
    params?: Record<string, unknown>;
    body?: object;
  } = {},
) => {
  const config = useRuntimeConfig();
  const token = useCookie("authToken");
  return $fetch(url, {
    method,
    baseURL: config.public.apiBaseUrl as string,
    timeout: 5000,
    ...options,
    onRequest({ options: requestOptions }) {
      if (token.value) {
        requestOptions.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },
  });
};

/**
 * A utility object for making HTTP requests.
 *
 * @remarks
 * This object provides methods for making GET, POST, PUT, and DELETE requests.
 * Each method returns a promise that resolves with the response of the request.
 *
 * @example
 * ```typescript
 * const response = await useFetchClient.get('/api/data');
 * const postResponse = await useFetchClient.post('/api/data', { key: 'value' });
 * ```
 *
 * @public
 */
export const useFetchClient = {
  get: (url: string, params?: Record<string, unknown>) => {
    return createFetchRequest("GET", url, { params });
  },
  post: (url: string, body?: object) => {
    return createFetchRequest("POST", url, { body });
  },
  put: (url: string, body?: object) => {
    return createFetchRequest("PUT", url, { body });
  },
  delete: (url: string, body?: object) => {
    return createFetchRequest("DELETE", url, { body });
  },
};
