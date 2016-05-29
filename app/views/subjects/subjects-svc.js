export default class SubjectsSvc {

  constructor($http) {

    this.$http = $http;
  }

  getSubjects() {

    return this.$http
      .get('/api/subjects')
      .then(response => response.data);
  }

  getSubject(subjectId) {

    return this.$http
      .get(`/api/subject/${subjectId}`)
      .then(response => response.data);
  }
}
