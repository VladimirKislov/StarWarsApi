const appContainer = document.getElementById('container');
const searchParams = new URLSearchParams(location.search);
const episodeId = searchParams.get('stageId');

const cssPromises = {};

function loadRecourse(src) {
  if (src.endsWith('.js')) {
    return import(src);
  }

  if (src.endsWith('.css')) {
    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      cssPromises[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve());
      })
      document.head.append(link);
    }
    return cssPromises[src];
  }

  return fetch(src).then(res => res.json());
}

function renderPage(module, api, css) {
  Promise.all([module, api, css].map(src => loadRecourse(src)))
    .then(([pageModule, data]) => {
      appContainer.innerHTML = '';
      appContainer.append(pageModule.render(data));
      document.querySelectorAll('.link').forEach(element => {
        element.addEventListener('click', (item) => {
          item.preventDefault();
          const urlUp = element.getAttribute('href');
          history.pushState(null, '', urlUp);
          const id = urlUp.replace(/[^0-9]/g, '');
          renderEpisode(
            './episode-list.js',
            `https://swapi.dev/api/films/${id}`,
            'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
          );
        });
      })
    })
}

function renderEpisode(module, api, css) {
  Promise.all([module, api, css].map(src => loadRecourse(src)))
    .then(([pageModule, pageData]) => {
      Promise.all([
        Promise.all(pageData.planets.map((url) => fetch(url).then(res => res.json()))),
        Promise.all(pageData.species.map((url) => fetch(url).then(res => res.json()))),
      ]).then(responses => {
        const dataResponses = responses.map(data => {
          return data;
        })
        const planets = dataResponses[0];
        const species = dataResponses[1];

        appContainer.innerHTML = '';
        appContainer.append(pageModule.render(pageData, planets, species));


        document.querySelector('.btn').addEventListener('click', (event) => {
          event.preventDefault();
          const prom = new Promise(resolve => {
            renderPage(
              './film-list.js',
              'https://swapi.dev/api/films/',
              'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
            );
            resolve();
          })
          prom.then(() => {
            const replaceUrl = location.href.split('?', 1)[0];
            history.replaceState('null', '', replaceUrl);
          })
        })
      })
    })
}

if (episodeId) {
  renderEpisode(
    './episode-list.js',
    `https://swapi.dev/api/films/${episodeId}`,
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  );
} else {
  renderPage(
    './film-list.js',
    'https://swapi.dev/api/films/',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  );
}
