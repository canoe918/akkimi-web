export class ApiError extends Error {
  error?: any;

  constructor({ message, error }: { message?: string; error?: unknown }) {
    super(message);
    this.error = error;
    this.name = '[API Error] ';
  }
}
