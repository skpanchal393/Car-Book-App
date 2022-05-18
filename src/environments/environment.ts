// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL : 'http://localhost:5000/api/',
  admin : 'admin',
  adminDashboard : 'admin/dashboard',
  adminSignIn : 'admin/login',
  adminProfile : 'admin/profile',
  bookingList : 'admin/booking-list',
  adminStting : 'admin/setting',
  adminPages : 'admin/pages',
  adminPagesCreate : 'admin/pages/create',
  adminPagesEdit : 'admin/pages/edit',
  adminBlogsCreate : 'admin/blog/create',
  adminBlogsEdit : 'admin/blog/edit',
  adminBlogs : 'admin/blog',
  home : '/',
  about : 'about',
  service : 'service',
  contactUS : 'contact',
  blog:'blog',
  privacy:'privacy'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
