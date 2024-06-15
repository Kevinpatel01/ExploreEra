import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class date {
  static dateNotinPast(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const today = new Date();
      const selectedDate = new Date(control.value);
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        return { dateinPast: true };
      }
      return null;
    };
  }

  static enddateAfterstartDate(startDateControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(startDateControl.value);
      const endDate = new Date(control.value);
      if(endDate <= startDate){
        return { enddateBeforeStartDate:  true};
      }
      return null;
    }
  }

  // static maxDate(maxDate: Date): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     if (!control.value) {
  //       return null;
  //     }
  //     const selectedDate = new Date(control.value);
  //     return selectedDate > maxDate ? { dateExceedmax: true } : null;
  //   };
  // }

  // static minDuration(minDuration: number): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const formGroup = control.parent;
  //     if (!formGroup) return null;

  //     const startDateControl = formGroup.get('startdate');
  //     if (!startDateControl) return null;

  //     const startDate = new Date(startDateControl.value);
  //     const endDate = new Date(control.value);

  //     if ((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) < minDuration) {
  //       return { durationTooShort: true };
  //     }

  //     return null;
  //   };
  // }
}
