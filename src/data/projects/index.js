import { amazonClone } from './amazonClone';
import { bloggerApp } from './bloggerApp';
import { cashCollection } from './cashCollection';
import { filmpire } from './filmpire';
import { portfolio } from './portfolio';
import { resumeTracker } from './resumeTracker';
import { salonLk } from './salonLk';
import { secureFrontend } from './secureFrontend';
import { ssmAdmin } from './ssmAdmin';
import { symphony } from './symphony';

export const projects = [
  {
    id: 0,
    ...cashCollection,
  },
  {
    id: 1,
    ...ssmAdmin,
  },
  {
    id: 2,
    ...symphony,
  },
  {
    id: 3,
    ...bloggerApp,
  },

  {
    id: 4,
    ...salonLk,
  },
  {
    id: 5,
    ...resumeTracker,
  },
  {
    id: 6,
    ...secureFrontend,
  },
  {
    id: 7,
    ...filmpire,
  },
  {
    id: 8,
    ...portfolio,
  },
  {
    id: 9,
    ...amazonClone,
  },
];
