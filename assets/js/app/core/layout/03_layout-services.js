/**
 * This file contains all necessary Angular service definitions for 'frontend.core.layout' module.
 *
 * Note that this file should only contain services and nothing else.
 */
(function() {
  'use strict';

  // Generic service to return all available menu items for main level navigation.
  angular.module('frontend.core.layout')
    .factory('HeaderNavigationItems', [
      'AccessLevels','AuthService','$rootScope','UserService',
      function factory(AccessLevels,AuthService,$rootScope,UserService) {

        return [
          {
            state: 'dashboard',
            icon : 'mdi-view-dashboard',
            show : function() {
              return AuthService.isAuthenticated()
            },
            title: __('Dashboard'),
            access: AccessLevels.user
          },
          {
            state: 'routes',
            show : function() {
              return AuthService.isAuthenticated() && $rootScope.Gateway
            },
            title: __('Routes'),
            icon : 'mdi-cloud-outline',
            access: AccessLevels.user
          },
          {
            state: 'services',
            show : function() {
              return AuthService.isAuthenticated() && $rootScope.Gateway
            },
            title: __('Services'),
            icon : 'mdi-cloud-outline',
            access: AccessLevels.user
          },
          {
            state: 'apis',
            show : function() {
              return AuthService.isAuthenticated() && $rootScope.Gateway
            },
            title: __('APIs'),
            icon : 'mdi-cloud-outline',
            access: AccessLevels.user
          },
          {
            state: 'consumers',
            show : function() {
              return AuthService.isAuthenticated() && $rootScope.Gateway
            },
            title: __('Consumers'),
            icon : 'mdi-account-outline',
            access: AccessLevels.user
          },
          {
            state: 'plugins',
            icon : 'mdi-power-plug',
            show : function() {
              return AuthService.isAuthenticated() && $rootScope.Gateway
            },
            title: __('Plugins'),
            access: AccessLevels.anon
          },
          {
            state: 'upstreams',
            icon : 'mdi-shuffle-variant',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node && $rootScope.Gateway && $rootScope.Gateway.version.indexOf("0.10.") > -1
            },
            title: __('Upstreams'),
            access: AccessLevels.anon
          },
          {
            state: 'certificates',
            icon : 'mdi-certificate',
            show : function() {
              return AuthService.isAuthenticated() && UserService.user().node && $rootScope.Gateway && $rootScope.Gateway.version.indexOf("0.10.") > -1
            },
            title: __('Certificates'),
            access: AccessLevels.anon
          }
        ];
      }
    ])
  ;
}());
