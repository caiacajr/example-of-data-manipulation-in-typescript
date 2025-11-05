import type Transaction from "../../types/transaction.types";

const renderTransactionStatusMap: Record<Transaction["status"], string> = {
  PAID: "Paid",
  AWAITING_PAYMENT: "Awaiting payment",
  DECLINED_BY_THE_CARD_ISSUER: "Declined",
  REVERSED: "Reversed",
};

const renderTransactionPaymentMethodMap: Record<
  Transaction["paymentMethod"],
  string
> = {
  BANK_SLIP: "Bank slip",
  CREDIT_CARD: "Credit card",
};

export default function renderTransactionTable(data: Transaction[]): void {
  const tbody = document.querySelector("#transactionsTable tbody");

  if (tbody && tbody instanceof HTMLTableSectionElement) {
    for (const t of data) {
      const currRow = tbody.insertRow(-1);
      currRow.insertCell().innerText = t.id.toString();
      currRow.insertCell().innerText = renderTransactionStatusMap[t.status];
      currRow.insertCell().innerText = t.name;
      currRow.insertCell().innerText = t.email;
      renderDate(t.date, currRow.insertCell());
      renderValue(t.value, currRow.insertCell());
      currRow.insertCell().innerText =
        renderTransactionPaymentMethodMap[t.paymentMethod];
      currRow.insertCell().innerText = t.newClient ? "Yes" : "No";
    }
  }
}

function renderDate(d: Date, element: HTMLElement): void {
  element.innerText =
    d.getMonth().toString().padStart(2, "0") +
    "-" +
    d.getDay().toString().padStart(2, "0") +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours().toString().padStart(2, "0") +
    ":" +
    d.getMinutes().toString().padStart(2, "0");
}

function renderValue(v: number | null, element: HTMLElement): void {
  if (!v) {
    element.innerText = "-";
    return;
  }

  let val = (v / 100).toString();
  if (val.includes(".")) element.innerText = val;
  else element.innerText = val.padEnd(val.length + 3, ",00");
}
