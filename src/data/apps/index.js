import { nearby } from "./nearby";
import { whatsupfire } from "./whatsupfire";
import { velocityTrack } from "./velocity-track";
import { youtubeFullscreenFocus } from "./youtube-fullscreen-focus";
import { reacttube } from "./reacttube";

// All apps data indexed by slug for easy lookup
export const APPS_DATA = {
    nearby,
    whatsupfire,
    "velocity-track": velocityTrack,
    "youtube-fullscreen-focus": youtubeFullscreenFocus,
    reacttube,
};

// List of all apps for the apps listing page
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
        slug: reacttube.slug,
        name: reacttube.name,
        description: reacttube.description,
        icon: reacttube.icon,
    },
];

// Re-export individual apps for direct imports if needed
export { nearby, whatsupfire, velocityTrack, youtubeFullscreenFocus, reacttube };
