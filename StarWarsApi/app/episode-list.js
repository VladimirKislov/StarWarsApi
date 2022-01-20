export function render(data, planets, species) {
  const container = document.createElement('div');
  container.classList.add(
    'container',
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'p-5'
  )

  const episodeCard = document.createElement('div');
  const episodeBody = document.createElement('div');
  const episodeTitle = document.createElement('h1');
  const episodeBtn = document.createElement('a');
  const episodeDescription = document.createElement('p');
  const episodePlanetsTitle = document.createElement('h2');
  const episodePlanetsList = document.createElement('div');
  const episodeSpeciesTitle = document.createElement('h2');
  const episodeSpeciesList = document.createElement('div');
  const episodeDirectorTitle = document.createElement('h2');
  const episodeDirectorItem = document.createElement('p');
  const episodeProducerTitle = document.createElement('h2');
  const episodeProducerItem = document.createElement('p');


  episodeCard.classList.add('card', 'bg-info', 'bg-opacity-25');
  episodeBody.classList.add('card-body', 'px-5');
  episodeTitle.classList.add('h1', 'mb-3');
  episodeBtn.classList.add('btn', 'btn-primary', 'mb-3');
  episodeDescription.classList.add('fs-5', 'px-5');
  episodePlanetsTitle.classList.add('h2', 'mb-3');
  episodePlanetsList.classList.add('planets', 'mb-3', 'px-5');
  episodeSpeciesTitle.classList.add('h2', 'mb-3');
  episodeSpeciesList.classList.add('species', 'mb-3', 'px-5');
  episodeDirectorTitle.classList.add('h2');
  episodeDirectorItem.classList.add('fs-5');
  episodeProducerTitle.classList.add('h2');
  episodeProducerItem.classList.add('fs-5');


  episodeTitle.textContent = data.title;
  episodeBtn.textContent = 'Back to episodes';
  episodeBtn.href = '';
  episodeDescription.textContent = data.opening_crawl;
  episodePlanetsTitle.textContent = 'Planets';
  episodeSpeciesTitle.textContent = 'Species';
  episodeDirectorTitle.textContent = 'Director:';
  episodeDirectorItem.textContent = data.director;
  episodeProducerTitle.textContent = 'Producer:';
  episodeProducerItem.textContent = data.producer;


  episodeCard.append(episodeBody);
  episodeBody.append(episodeTitle);
  episodeBody.append(episodeBtn);
  episodeBody.append(episodeDescription);
  episodeBody.append(episodePlanetsTitle);
  episodeBody.append(episodePlanetsList);
  episodeBody.append(episodeSpeciesTitle);
  episodeBody.append(episodeSpeciesList);
  episodeBody.append(episodeDirectorTitle);
  episodeBody.append(episodeDirectorItem);
  episodeBody.append(episodeProducerTitle);
  episodeBody.append(episodeProducerItem);


  //add planets
  planets.map(data => {
    const wrapper = document.createElement('div');
    const name = document.createElement('span');
    const terrain = document.createElement('span');
    const climate = document.createElement('span');
    const titleName = document.createElement('h4');
    const titleClimate = document.createElement('h4');
    const titleTerrain = document.createElement('h4');
    const titleNameText = document.createElement('p');
    const titleClimateText = document.createElement('p');
    const titleTerrainText = document.createElement('p');

    wrapper.classList.add('container', 'card', 'justify-content-between', 'd-flex', 'flex-wrap', 'p-5', 'mb-2', 'bg-warning', 'bg-opacity-50');
    name.classList.add('d-flex', 'justify-content-between', 'mb-2');
    climate.classList.add('d-flex', 'justify-content-between', 'mb-2');
    terrain.classList.add('d-flex', 'justify-content-between', 'mb-2');
    titleName.classList.add('h4', 'm-0');
    titleClimate.classList.add('h4', 'm-0');
    titleTerrain.classList.add('h4', 'm-0');
    titleNameText.classList.add('fs-6', 'm-0');
    titleClimateText.classList.add('fs-6', 'm-0');
    titleTerrainText.classList.add('fs-6', 'm-0');

    titleName.textContent = 'Name:';
    titleClimate.textContent = 'Climate:';
    titleTerrain.textContent = 'Terrain:';
    titleNameText.textContent = data.name;
    titleClimateText.textContent = data.climate;
    titleTerrainText.textContent = data.terrain;

    wrapper.append(name);
    wrapper.append(climate);
    wrapper.append(terrain);
    name.append(titleName);
    name.append(titleNameText);
    climate.append(titleClimate);
    climate.append(titleClimateText);
    terrain.append(titleTerrain);
    terrain.append(titleTerrainText);
    episodePlanetsList.append(wrapper);
  })

  //add species
  species.map(data => {
    const wrapper = document.createElement('div');
    wrapper.classList.add(
      'container',
      'card',
      'd-flex',
      'flex-wrap',
      'justify-content-between',
      'p-5',
      'mb-2',
      'bg-warning',
      'bg-opacity-50',
    )

    // layout
    const cardName = document.createElement('div');
    const cardClassification = document.createElement('div');
    const cardDesignation = document.createElement('div');
    const cardAverageHeight = document.createElement('div');
    const cardAverageLifespan = document.createElement('div');
    const cardLanguage = document.createElement('div');

    const cardNameTitle = document.createElement('h4');
    const cardNameText = document.createElement('p');

    const cardClassificationTitle = document.createElement('h4');
    const cardClassificationText = document.createElement('p');

    const cardDesignationTitle = document.createElement('h4');
    const cardDesignationText = document.createElement('p');

    const cardAverageHeightTitle = document.createElement('h4');
    const cardAverageHeightText = document.createElement('p');

    const cardAverageLifespanTitle = document.createElement('h4');
    const cardAverageLifespanText = document.createElement('p');

    const cardLanguageTitle = document.createElement('h4');
    const cardLanguageText = document.createElement('p');


    // class
    cardName.classList.add('d-flex', 'justify-content-between', 'align-items-stretch', 'mb-2');
    cardClassification.classList.add('d-flex', 'justify-content-between', 'align-items-stretch', 'mb-2');
    cardDesignation.classList.add('d-flex', 'justify-content-between', 'align-items-stretch', 'mb-2');
    cardAverageHeight.classList.add('d-flex', 'justify-content-between', 'align-items-stretch', 'mb-2');
    cardAverageLifespan.classList.add('d-flex', 'justify-content-between', 'align-items-stretch', 'mb-2');
    cardLanguage.classList.add('d-flex', 'justify-content-between', 'align-items-stretch');

    cardNameTitle.classList.add('h4', 'm-0');
    cardNameText.classList.add('fs-6', 'm-0');

    cardClassificationTitle.classList.add('h4', 'm-0');
    cardClassificationText.classList.add('fs-6', 'm-0');

    cardDesignationTitle.classList.add('h4', 'm-0');
    cardDesignationText.classList.add('fs-6', 'm-0');

    cardAverageHeightTitle.classList.add('h4', 'm-0');
    cardAverageHeightText.classList.add('fs-6', 'm-0');

    cardAverageLifespanTitle.classList.add('h4', 'm-0');
    cardAverageLifespanText.classList.add('fs-6', 'm-0');

    cardLanguageTitle.classList.add('h4', 'm-0');
    cardLanguageText.classList.add('fs-6', 'm-0');

    // textContent
    cardNameTitle.textContent = 'Name:';
    cardClassificationTitle.textContent = 'Classification:';
    cardDesignationTitle.textContent = 'Designation:';
    cardAverageHeightTitle.textContent = 'Average Height:';
    cardAverageLifespanTitle.textContent = 'Average Lifespan:';
    cardLanguageTitle.textContent = 'Language:';

    cardNameText.textContent = data.name;
    cardClassificationText.textContent = data.classification;
    cardDesignationText.textContent = data.designation;
    cardAverageHeightText.textContent = data.average_height;
    cardAverageLifespanText.textContent = data.average_lifespan;
    cardLanguageText.textContent = data.language;

    // append
    wrapper.append(cardName);
    wrapper.append(cardClassification);
    wrapper.append(cardDesignation);
    wrapper.append(cardAverageHeight);
    wrapper.append(cardAverageLifespan);
    wrapper.append(cardLanguage);

    cardName.append(cardNameTitle);
    cardName.append(cardNameText);

    cardClassification.append(cardClassificationTitle);
    cardClassification.append(cardClassificationText);

    cardDesignation.append(cardDesignationTitle);
    cardDesignation.append(cardDesignationText);

    cardAverageHeight.append(cardAverageHeightTitle);
    cardAverageHeight.append(cardAverageHeightText);

    cardAverageLifespan.append(cardAverageLifespanTitle);
    cardAverageLifespan.append(cardAverageLifespanText);

    cardLanguage.append(cardLanguageTitle);
    cardLanguage.append(cardLanguageText);

    episodeSpeciesList.append(wrapper);
  })


  container.append(episodeCard);

  return container;
}
