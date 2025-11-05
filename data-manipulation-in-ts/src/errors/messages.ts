export const HTTP_REQUEST_ERROR_MSG = (
  url: string,
  httpStatus: number
): string => `Error on fetching: ${url} \n HttpStatus: ${httpStatus}`;
