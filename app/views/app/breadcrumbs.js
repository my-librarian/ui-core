function shouldClearHistory(toState) {

  return [
    /^authors.list$/,
    /^books.list$/,
    /^subjects.list$/
  ].some(name => name.test(toState.name));
}

/*@ngInject*/
export default function buildBreadcrumbs($rootScope, BreadcrumbsSvc) {

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {

    if (!fromState.name || shouldClearHistory(toState)) {

      BreadcrumbsSvc.clear();
    } else {

      BreadcrumbsSvc.push(
        {
          from: fromState,
          params: fromParams
        },
        {
          from: toState,
          params: toParams
        }
      );
    }
  });
}
