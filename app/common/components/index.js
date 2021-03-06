import angular from 'angular';

import AlertsSvc from './alerts/alerts-svc';
import BreadcrumbsSvc from './breadcrumbs-svc';
import LoaderSvc from './loader/loader-svc';
import TitleSvc from './title-svc';
import alerts from './alerts/alerts';
import attribute from './attribute';
import authorInput from './typeahead/author-input';
import autofocus from './autofocus';
import breadcrumbs from './breadcrumbs';
import buttonGoToTop from './button-go-to-top';
import checkbox from './checkbox';
import compile from './compile';
import labeledInput from './labeled-input';
import languageInput from './typeahead/language-input';
import loader from './loader/loader';
import subjectInput from './typeahead/subject-input';
import switchDirective from './switch';
import radio from './radio';
import title from './title';

import './typeahead/input.less';

export default angular.module('common.components', [])
  .directive(...alerts)
  .directive(...attribute)
  .directive(...authorInput)
  .directive(...autofocus)
  .directive(...breadcrumbs)
  .directive(...buttonGoToTop)
  .directive(...checkbox)
  .directive(...compile)
  .directive(...labeledInput)
  .directive(...languageInput)
  .directive(...loader)
  .directive(...subjectInput)
  .directive(...switchDirective)
  .directive(...radio)
  .directive(...title)
  .service('AlertsSvc', AlertsSvc)
  .service('BreadcrumbsSvc', BreadcrumbsSvc)
  .service('LoaderSvc', LoaderSvc)
  .service('TitleSvc', TitleSvc)
  .name;
