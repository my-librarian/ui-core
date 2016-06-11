export default class SubjectsSvc {

  constructor($http) {

    this.$http = $http;
  }

  createSubject(subject) {

    return this.$http
      .post('/api/subject', {subject})
      .then(response => response.data);
  }
  
  deleteSubject(id) {

    return this.$http.delete(`/api/subject/${id}`);
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
