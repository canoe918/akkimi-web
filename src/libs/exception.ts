export class ApiException extends Error {
  error?: any;

  constructor({ message, error }: { message?: string; error?: unknown }) {
    super(message);
    this.error = error;
    this.name = "[ApiException] ";
  }
}

export class ThirdPartyAuthException extends Error {
  error?: any;

  constructor({ message, error }: { message?: string; error?: unknown }) {
    super(message);
    this.error = error;
    this.name = "[ThirdPartyAuthException] ";
  }
}
