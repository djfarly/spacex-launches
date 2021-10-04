import { getLaunchesList } from './api.js';
import { getLaunchesHtml } from './launches.js';
import { render } from './render.js';

const launchesList = await getLaunchesList({ limit: 20 });
render(getLaunchesHtml({ launchesList }));
