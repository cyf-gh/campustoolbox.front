// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseApi = "/api/";

const ppdomain = ".campustoolbox.cn";

const api_login = baseApi + "account/login";
const api_reflect_account_by_token = baseApi + "token/reflect-account";

const api_get_supplies = baseApi + "trade/supplies";
const api_get_demands = baseApi + "trade/demands";

export const environment = {
  production: false,
  regx_number: /^[0-9]*$/,
  regx_except_number: /[\D]+/,
  regx_list: /^[/s/S]*,/,
  regx_space: /\s+/,
  regx_email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  regx_phone: /^([1][3,4,5,6,7,8,9])\d{9}$/,

  domain: ppdomain,
  apiLogin: api_login,
  apiReflectAccountByToken: api_reflect_account_by_token,
  apiGetSupplies: api_get_supplies,
  apiGetDemands: api_get_demands,
  httpOptions:  {
    withCredentials: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
