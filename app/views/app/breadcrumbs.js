function shouldClearHistory(toState, fromState) {

  return !fromState.name ||
    [
      /^admin$/,
      /^authors.list$/,
      /^books.list$/,
      /^home$/,
      /^subjects.list$/
    ].some(name => name.test(toState.name));
}

function canPush(toState, fromState) {

  const admin = /^admin/;

  return !admin.test(fromState.name);
}

/*@ngInject*/
export default function buildBreadcrumbs($rootScope, BreadcrumbsSvc) {

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {

    if (shouldClearHistory(toState, fromState)) {

      BreadcrumbsSvc.clear();
    } else if (canPush(toState, fromState)) {

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
