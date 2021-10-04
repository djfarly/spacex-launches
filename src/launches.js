export const getLaunchesHtml = ({ launchesList = [], currentPage = 0 }) => {
  // TODO: loop over pokemon and render cards

  let cardHtml = '';

  for (const { name, links, flight_number } of launchesList) {
    cardHtml =
      cardHtml +
      `
  <article class="card">
    <h2>${name}</h2>
    <img src="${links.flickr.original[0]}" height="200" width="400" />
    <dl>
      <dt>Flight Number</dt>
      <dd>${flight_number}</dd>
      <dt>Weight</dt>
      <dd>40</dd>
    </dl>
  </article>
  `;
  }

  return `
    <section class="cards">
      ${cardHtml}
    </section>
  `;
};
