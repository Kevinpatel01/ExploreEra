import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailMatcher(loggedInuserEmail: string | null): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (loggedInuserEmail && control.value !== loggedInuserEmail) {
      console.log("E-mail is not matching");
      return { emailMismatch: true };
    }
    return null;
  };
}
