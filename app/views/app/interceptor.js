export default function interceptor($httpProvider) {

  $httpProvider.interceptors.push(function ($q, LoaderSvc) {

    let count = 0;

    function capCount() {

      if (count <= 0) {

        count = 0;
        LoaderSvc.loading.state = false;
      }
    }

    function request(config) {

      count += 1;

      LoaderSvc.loading.state = true;

      return config;
    }

    function response(data) {

      count -= 1;

      capCount();

      return data;
    }

    function responseError(data) {

      count -= 1;

      capCount();

      return $q.reject(data);
    }

    return {
      request,
      response,
      responseError
    };
  });

}
