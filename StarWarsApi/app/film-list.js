export function render(data) {

  const container = document.createElement('div');
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'p-5'
  )

  for (const card of data.results) {
    const wrapperCard = document.createElement('a');
    const cardBody = document.createElement('div');
    const episode = document.createElement('h3');
    const title = document.createElement('h2');

    wrapperCard.style.width = '30%';
    wrapperCard.style.minHeight = '250px';
    wrapperCard.classList.add('card', 'bg-success', 'mb-5', 'p-4', 'btn', 'btn-primary', 'border', 'border-4', 'border-warning', 'link');
    cardBody.classList.add('card-body');
    episode.classList.add('h3', 'mb-4');
    title.classList.add('h2');

    wrapperCard.append(cardBody);
    cardBody.append(episode);
    cardBody.append(title);

    const id = card.url.replace(/[^0-9]/g, '');

    wrapperCard.href = `?stageId=${id}`;
    episode.textContent = `Episode: ${card.episode_id}`;
    title.textContent = card.title;

    container.append(wrapperCard);
  }

  return container;

}
