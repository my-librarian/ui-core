/*@ngInject*/
export default function redirectOnLogin($rootScope) {

  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {

    if (toState.name === 'login') {

      toParams.from = {
        fromState,
        fromParams
      };
    }
  });

};
