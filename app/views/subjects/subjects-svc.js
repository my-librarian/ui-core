/*@ngInject*/
export default class SubjectsSvc {

  constructor(AlertsSvc, $http, $q) {

    this.AlertsSvc = AlertsSvc;
    this.$http = $http;
    this.$q = $q;
  }

  createSubject(subject) {

    return this.$http
      .post('/api/subject', {subject})
      .then(response => response.data)
      .then(response => this.AlertsSvc.addAlert(`Successfully added subject. Click <a ui-sref="subjects.details({id: ${response.id}})">here</a> to open`))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to create subject. ${response.message}`, 'error');
        this.$q.reject(response);
      });
  }
  
  deleteSubject(id) {

    return this.$http.delete(`/api/subject/${id}`)
      .then(() => this.AlertsSvc.addAlert('Successfully deleted subject'))
      .catch(response => {
        this.AlertsSvc.addAlert(`Failed to delete subject. ${response.message}`, 'error');
        this.$q.reject(response);
      });
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
