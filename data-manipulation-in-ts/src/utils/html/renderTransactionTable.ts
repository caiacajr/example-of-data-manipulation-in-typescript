import type Transaction from "../../types/transaction.types.js";
import renderCurrencyValue from "./renderCurrencyValue.js";
import renderDate from "./renderDate.js";
import {
  renderTransactionPaymentMethodMap,
  renderTransactionStatusMap,
} from "./transactionMaps.js";

export default function renderTransactionTable(data: Transaction[]): void {
  const tbody = document.querySelector("#transactionsTable tbody");

  if (tbody && tbody instanceof HTMLTableSectionElement) {
    for (const t of data) {
      const currRow = tbody.insertRow(-1);
      currRow.insertCell().innerText = t.id.toString();
      currRow.insertCell().innerText = renderTransactionStatusMap[t.status];
      currRow.insertCell().innerText = t.name;
      currRow.insertCell().innerText = t.email;
      currRow.insertCell().innerText = renderDate(t.date);
      currRow.insertCell().innerText = renderCurrencyValue(t.value);
      currRow.insertCell().innerText =
        renderTransactionPaymentMethodMap[t.paymentMethod];
      currRow.insertCell().innerText = t.newClient ? "Yes" : "No";
    }
  }
}
