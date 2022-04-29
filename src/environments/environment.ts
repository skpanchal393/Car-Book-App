// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  admin : 'admin',
  adminDashboard : 'admin/dashboard',
  adminSignIn : 'admin/login',
  adminProfile : 'admin/profile',
  bokkingList : 'admin/booking-list',
  adminStting : 'admin/setting',
  adminHome : 'admin/page/home',
  adminCreateHome : 'admin/page/home/create',
  adminEditHome : 'admin/page/home/edit/:homeId',
  adminAbout: 'admin/page/about',
  adminCreateAbout : 'admin/page/about/create',
  adminEditAbout : 'admin/page/about/edit/:aboutId',
  adminService: 'admin/page/service',
  adminCreateService : 'admin/page/service/create',
  adminEditService : 'admin/page/service/edit/:serviceId',
  adminContact: 'admin/page/contact',
  adminCreateContact : 'admin/page/contact/create',
  adminEditContact : 'admin/page/contact/edit/:contactId',
  adminPrivacy: 'admin/page/privacy',
  adminCreatePrivacy : 'admin/page/privacy/create',
  adminEditPrivacy : 'admin/page/privacy/edit/:privacyId',
  home : '/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
