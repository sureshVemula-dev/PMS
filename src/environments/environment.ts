// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // PRODUCTION
  // postalApi: 'https://api.postalpincode.in/pincode/',
  // apiBaseUrl: 'https://misportalapi.sheenlac.com/',
  // taskApi: 'https://api.sheenlac.com/api',
  // apiUrl: 'https://misportalapi.sheenlac.com/',
  // loginUrl: 'https://misportalapi.sheenlac.com/api',
  // attendanceUrl: 'https://misapi.sheenlac.com/',
  // attendanceUrl_SAPpdf: 'https://webdevqas.sheenlac.com:44305/',
  // // vendor portal URL
  // vendorportal: 'https://portalapi.sheenlac.com/',

  // DEVELOPEMENT
  postalApi: 'https://api.postalpincode.in/pincode/',
  apiBaseUrl: 'https://devmisportalapi.sheenlac.com/',
  taskApi: 'https://devapi.sheenlac.com/api',
  apiUrl: 'https://devmisportalapi.sheenlac.com/',
  loginUrl: 'https://devmisportalapi.sheenlac.com/',
  attendanceUrl: 'https://misdevapi.sheenlac.com/',
  attendanceUrl_SAPpdf: 'https://webdevqas.sheenlac.com:44305/',
  //// vendor portal URL
  vendorportal: 'https://devportalapi.sheenlac.com/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.