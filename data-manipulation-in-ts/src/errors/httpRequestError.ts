import { HTTP_REQUEST_ERROR_MSG } from "./messages";

export default class HttpRequestError extends Error {
  readonly url: string;
  readonly status: number;

  constructor(url: string, status: number) {
    super(HTTP_REQUEST_ERROR_MSG(url, status));
    this.url = url;
    this.status = status;
  }
}
