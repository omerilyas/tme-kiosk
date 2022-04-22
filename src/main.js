
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
      { url: '20028162201@go.webex.com', name: 'First' },
      { url: 'erica.talking@ivr.vc', name: 'Second' },
      { url: 'erica.talking@ivr.vc', name: 'Third' },
    ],
  });

}

document.addEventListener('alpine:init', setup);

