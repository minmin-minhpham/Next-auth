const isClient = () => typeof window !== "undefined";

const http = {
  get(url, options = {}) {
    return request("GET", url, options);
  },

  post(url, options = {}) {
    return request("POST", url, options);
  },

  put(url, options = {}) {
    return request("PUT", url, options);
  },

  delete(url, options = {}) {
    return request("PUT", url, options);
  },
};

const request = async (method, url, options = { body: "" }) => {
  // let data = "";
  let body = undefined;

  if (options?.body instanceof FormData) {
    body = options.body;
  }

  if (options?.body) {
    body = JSON.stringify(options.body);
  }

  const baseHeaders =
    body instanceof FormData ? {} : { "Content-Type": "application/json" };

  const baseUrl =
    options?.baseUrl === undefined
      ? process.env.NEXT_PUBLIC_API_ENDPOINT
      : options.baseUrl;

  const fullUrl = url.startsWith("/")
    ? `${baseUrl}${url}`
    : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {},
    body,
    method,
  });

  const payload = await res.json();
  const data = {
    status: res.status,
    payload,
  };

  return data;
};

export default http;

// const request = () => {

// };

// const http = () => {};

// export default http;

class HttpError extends Error {
  constructor(statusCode, message, ...args) {
    super(...args);

    this.statusCode = statusCode;
    this.message = message;
  }
}

class EntityError extends HttpError {
  constructor(message = "Unprocessable Entity", ...args) {
    super(422, message, ...args);
  }
}
