/*@ngInject*/
export default class UrlSvc {

  constructor($state) {

    this.$state = $state;
  }

  static getAvailability(availability) {

    return availability === 'all' ? '' : availability.slice(0, 1);
  }

  static getSelectedCheckboxList(items, field = 'label') {

    return items
      .filter(item => item.selected)
      .map(item => item[field])
      .join(',');
  }

  static setAvailability(code) {

    const availability = {
      a: 'available',
      b: 'borrowed'
    };

    return availability[code] || 'all';
  }

  static setSelectedCheckboxList(items, params = '', field = 'label') {

    const ids = params.split(',');

    return items.map(item => {

      if (ids.indexOf((item[field]).toString()) >= 0) {

        item.selected = true;
      }

      return item;
    });

  }

  parseUrl(filters) {

    const {params} = this.$state;

    filters.authors = UrlSvc.setSelectedCheckboxList(filters.authors, params.a, 'authorid');
    filters.availability = UrlSvc.setAvailability(params.b);
    filters.currentPage = params.p || 1;
    filters.languages = UrlSvc.setSelectedCheckboxList(filters.languages, params.l);
    filters.racks = UrlSvc.setSelectedCheckboxList(filters.racks, params.r);
    filters.searchString = params.q || '';
    filters.subjects = UrlSvc.setSelectedCheckboxList(filters.subjects, params.s, 'subjectid');

    return filters;
  }

  updateUrl(filters) {

    const query = {
      a: UrlSvc.getSelectedCheckboxList(filters.authors, 'authorid'),
      b: UrlSvc.getAvailability(filters.availability),
      l: UrlSvc.getSelectedCheckboxList(filters.languages),
      p: filters.currentPage,
      q: filters.searchString,
      r: UrlSvc.getSelectedCheckboxList(filters.racks),
      s: UrlSvc.getSelectedCheckboxList(filters.subjects, 'subjectid')
    };

    this.$state.go(this.$state.current.name, query, {
      notify: false,
      reload: false
    });
  }
}
