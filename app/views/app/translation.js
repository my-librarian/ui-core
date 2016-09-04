import en from '../../i18n/en';
import sa from '../../i18n/sa';
import ta from '../../i18n/ta';

/*@ngInject*/
export default function translation($translateProvider) {
  $translateProvider.translations('en', en);
  $translateProvider.translations('sa', sa);
  $translateProvider.translations('ta', ta);
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}
