'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');


const ngRoute = require('angular-route');





import {routeConfig} from './app.config';


import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';



import './app.css';

angular.module('yoApp', [
  ngCookies,
  ngResource,
  ngSanitize,


  ngRoute,
  navbar,
  footer,
  main,
  constants,

  util
])
  .config(routeConfig)
;

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['yoApp'], {
      strictDi: true
    });
  });
