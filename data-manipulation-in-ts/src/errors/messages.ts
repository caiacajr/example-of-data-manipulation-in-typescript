export const HTTP_REQUEST_ERROR_MSG = (
  url: string,
  httpStatus: number
): string => `Error on fetching: ${url} \n HttpStatus: ${httpStatus}`;

export const INVALID_TRANSACTION_ARRAY_DATA = (
  url: string
): string => `Invalid transaction data got from: ${url}
Example of expected Format:
[
{
    "Status": "Paga",
    "ID": 32323221,
    "Data": "01/09/2022 01:21",
    "Nome": "Owen Hill",
    "Forma de Pagamento": "Cartão de Crédito",
    "Email": "o.hill@email.com",
    "Valor (R$)": "452,00",
    "Cliente Novo": 1
  },
  {
    "Status": "Paga",
    "ID": 32323222,
    "Data": "01/09/2022 01:26",
    "Nome": "Miranda Higgins",
    "Forma de Pagamento": "Boleto",
    "Email": "m.higgins@email.com",
    "Valor (R$)": "120,00",
    "Cliente Novo": 1
  }
]`;
