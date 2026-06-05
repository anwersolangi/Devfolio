// data/apps/index.js

import { nearby } from "./nearby";
import { whatsupfire } from "./whatsupfire";
import { velocityTrack } from "./velocity-track";
import { youtubeFullscreenFocus } from "./youtube-fullscreen-focus";
import { reacttube } from "./reacttube";
import { convertiX } from "./convertix";
import { tapMeal } from "./tapmeal";

export const APPS_DATA = {
  nearby,
  whatsupfire,
  "velocity-track": velocityTrack,
  "youtube-fullscreen-focus": youtubeFullscreenFocus,
  reacttube,
  convertix: convertiX,
  tapmeal: tapMeal,
};

export const APPS_LIST = [
  {
    slug: nearby.slug,
    name: nearby.name,
    description: nearby.description,
    icon: nearby.icon,
  },
  {
    slug: whatsupfire.slug,
    name: whatsupfire.name,
    description: whatsupfire.description,
    icon: whatsupfire.icon,
  },
  {
    slug: velocityTrack.slug,
    name: velocityTrack.name,
    description: velocityTrack.description,
    icon: velocityTrack.icon,
  },
  {
    slug: youtubeFullscreenFocus.slug,
    name: youtubeFullscreenFocus.name,
    description: youtubeFullscreenFocus.description,
    icon: youtubeFullscreenFocus.icon,
  },
  {
    slug: convertiX.slug,
    name: convertiX.name,
    description: convertiX.description,
    icon: convertiX.icon,
  },
  {
    slug: reacttube.slug,
    name: reacttube.name,
    description: reacttube.description,
    icon: reacttube.icon,
  },
  {
    slug: tapMeal.slug,
    name: tapMeal.name,
    description: tapMeal.description,
    icon: tapMeal.icon,
    externalUrl: tapMeal.externalUrl,
  },
];

export {
  nearby,
  whatsupfire,
  velocityTrack,
  youtubeFullscreenFocus,
  reacttube,
  convertiX,
  tapMeal,
};
