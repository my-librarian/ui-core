/*@ngInject*/
export default class SubjectsSvc {

  constructor(AlertsSvc, $http) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
  }

  createSubject(subject) {

    return this.$http
      .post('/api/subject', {subject})
      .then(response => response.data)
      .then(response => this.AlertsSvc.addAlert(`Successfully added subject. Click <a ui-sref="subjects.details({id: ${response.id}})">here</a> to open`));
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
