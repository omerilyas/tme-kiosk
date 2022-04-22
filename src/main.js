
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
    services: [
      { url: 'oilyas@cisco.com', name: 'First' },
      { url: 'kebarrow@cisco.com', name: 'Second' },
      { url: 'omer.ilyas@boldbetz.com', name: 'Third' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

