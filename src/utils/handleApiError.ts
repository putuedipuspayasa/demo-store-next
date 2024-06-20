export function handleApiError(error: any): string {
  if (error.isAxiosError && error.response) {
    const errorResponse: ErrorResponse = error.response.data;
    throw new Error(errorResponse.message);
  } else if (error.isAxiosError && error.request) {
    return "No response from server";
  } else {
    return "Request failed";
  }
}
