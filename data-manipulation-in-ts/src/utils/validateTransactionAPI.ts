import type TransactionAPI from "../types/TransactionAPI.js";
import {
  PAYMENT_METHODS,
  STATUSES,
  type TransactionAPIPaymentMethod,
  type TransactionAPIStatus,
} from "../types/TransactionAPI.js";

export const DATE_REGEXP = /^(\d{2})\/(\d{2})\/(\d{4})\s(\d{2}):(\d{2})$/;

function isTransactionAPIDate(date: unknown): boolean {
  return typeof date === "string" && DATE_REGEXP.test(date);
}

function isTransactionAPIValue(value: unknown): boolean {
  return (
    typeof value === "string" &&
    (value === "-" ||
      !Number.isNaN(Number(value.replaceAll(".", "").replace(",", "."))))
  );
}

function isTransactionAPIStatus(
  status: unknown
): status is TransactionAPIStatus {
  return (
    typeof status === "string" &&
    STATUSES.includes(status as TransactionAPIStatus)
  );
}

function isTransactionAPIPaymentMethod(
  paymentMethod: unknown
): paymentMethod is TransactionAPIPaymentMethod {
  return (
    typeof paymentMethod === "string" &&
    PAYMENT_METHODS.includes(paymentMethod as TransactionAPIPaymentMethod)
  );
}

function isValidEmail(email: unknown): boolean {
  const emailRegexp = /^[\w.-]+@[\w-]+\.[\w-.]+$/i;
  return typeof email === "string" && emailRegexp.test(email);
}

export default function isTransactionAPI(obj: unknown): obj is TransactionAPI {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;

  const o = obj as Record<string, unknown>;

  return (
    isTransactionAPIStatus(o["Status"]) &&
    typeof o["ID"] === "number" &&
    isTransactionAPIDate(o["Data"]) &&
    typeof o["Nome"] === "string" &&
    isTransactionAPIPaymentMethod(o["Forma de Pagamento"]) &&
    isValidEmail(o["Email"]) &&
    isTransactionAPIValue(o["Valor (R$)"]) &&
    typeof o["Cliente Novo"] === "number" &&
    (o["Cliente Novo"] === 0 || o["Cliente Novo"] === 1)
  );
}

export function isArrayOfTransactionAPI(obj: unknown): obj is TransactionAPI[] {
  if (obj && Array.isArray(obj)) {
    return obj.every((o) => isTransactionAPI(o));
  } else {
    return false;
  }
}
