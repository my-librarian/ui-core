/*@ngInject*/
export default class FilterSvc {

  static getSelected(filters) {

    return filters.filter(filter => filter.selected);
  }

  authorFilter(book, authors, authorAssoc) {

    const selectedAuthors = FilterSvc.getSelected(authors);

    if (!selectedAuthors.length) {
      return true;
    }

    const selectedBooks = new Set(
      selectedAuthors.reduce(
        (set, author) => set.concat(authorAssoc[author.authorid]),
        []
      )
    );

    return selectedBooks.has(book.bookid);
  }

  availabilityFilter(book, availability) {

    switch (availability) {
      case 'borrowed':
        return book.borrowed;
      case 'available':
        return !book.borrowed;
    }

    return true;
  }

  deselect(filter) {

    return {
      ...filter,
      selected: false
    };

  }

  languageFilter(book, languages) {

    const selectedLanguages = FilterSvc.getSelected(languages);

    if (!selectedLanguages.length) {
      return true;
    }

    return selectedLanguages.map(language => language.label).includes(book.language);
  }

  rackFilter(book, racks) {

    const selectedRacks = FilterSvc.getSelected(racks);

    if (!selectedRacks.length) {
      return true;
    }

    const bookRackNo = parseInt(book.rackno.split('-')[1]);

    return selectedRacks.map(rack => rack.label).includes(bookRackNo);
  }

  staticFilter(book, searchString) {

    const query = searchString.toLowerCase();

    return [
      () => book.rackno.replace(/-/g, '').toLowerCase().match(query.replace(/-/g, '')),
      () => book.title.toLowerCase().match(query),
      () => book.accessno.toLowerCase().match(query)
    ].some(condition => condition());
  }

  subjectFilter(book, subjects, subjectAssoc) {

    const selectedAuthors = FilterSvc.getSelected(subjects);

    if (!selectedAuthors.length) {
      return true;
    }

    const selectedBooks = new Set(
      selectedAuthors.reduce(
        (set, subject) => set.concat(subjectAssoc[subject.subjectid]),
        []
      )
    );

    return selectedBooks.has(book.bookid);
  }
}
