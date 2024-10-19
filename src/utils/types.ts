export interface InputError {
  message: string;
}
export type InputValidator = (val: string) => InputError | null;
