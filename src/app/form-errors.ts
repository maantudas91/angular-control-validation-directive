
import { InjectionToken } from '@angular/core';


export const defaultErrors = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`,
  maxlength: (params) => 'The max allowed number of characters is ' + params.requiredLength,
  pattern: (params) => 'The required pattern is: ' + params.requiredPattern,
  years: (params) => params.message,
  countryCity: (params) => params.message,
  uniqueName: (params) => params.message,
  telephoneNumbers: (params) => params.message
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});


