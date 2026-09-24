import {domain} from './meta.js';

export default {
  top: [
    {
      text: 'Members',
      url: '/members/'
    },
    {
      text: 'SeaWolves',
      url: '#',
      submenu: [
        {
          text: 'SeaWolf IX',
          url: '/seawolves/ix/'
        },
        {
          text: 'SeaWolf VIII',
          url: '/seawolves/viii/'
        },
        {
          text: 'Past SeaWolves',
          url: '/seawolves/past/'
        }
      ]
    },
    {
      text: 'Documentation',
      url: `https://docs.${domain}`
    },
    {
      text: 'Papers',
      url: '/papers/'
    },
    {
      text: 'Calendar',
      url: '/calendar/'
    },
    {
      text: 'Outreach',
      url: '/outreach/'
    },
    {
      text: 'Sponsors',
      url: '#',
      submenu: [
        {
          text: 'Current Sponsors',
          url: '/sponsors/current/'
        },
        {
          text: 'Sponsorship Tiers',
          url: '/sponsors/tiers/'
        },
        {
          text: 'Sponsor Us',
          url: '/sponsors/sponsorUs/'
        }
      ]
    },
    {
      text: 'Blog',
      url: '/blog/'
    },
    {
      text: 'Search',
      url: '/search/'
    }
  ],
  bottom: [
    {
      text: 'Contact Us',
      url: '/contact/'
    },
    {
      text: 'Sustainability',
      url: '/sustainability/'
    },
    {
      text: 'Colophon',
      url: '/colophon/'
    }
  ]
};
