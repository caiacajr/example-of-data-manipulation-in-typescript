import { INVALID_TRANSACTION_ARRAY_DATA } from "./messages";

export default class InvalidTransactionArrayData extends Error {
  readonly url: string;
  readonly data: any;

  constructor(url: string, data: any, msg?: string) {
    super((msg ? msg : "") + INVALID_TRANSACTION_ARRAY_DATA(url));
    this.url = url;
    this.data = data;
  }
}
