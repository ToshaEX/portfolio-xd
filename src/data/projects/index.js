import { bloggerApp } from './bloggerApp';
import { salonLk } from './salonLk';
import { resumeTracker } from './resumeTracker';
import { secureFrontend } from './secureFrontend';
import { filmpire } from './filmpire';
import { portfolio } from './portfolio';
import { amazonClone } from './amazonClone';
import { symphony } from './symphony';
import { ssmAdmin } from './ssmAdmin';
import {cashCollection} from './cashCollection'

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
