import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import { latin } from '@bbc/gel-foundations/scripts';
import { azeri as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/Asia/Baku';

const service = {
  lang: `az-AZ`,
  articleAuthor: `https://www.facebook.com/pages/bbc-azeri/347501767628`,
  articleTimestampPrefix: 'Updated',
  atiAnalyticsAppName: 'news-azeri',
  atiAnalyticsProducerId: '6',
  brandName: 'BBC News Azərbaycanca',
  product: 'BBC News Azərbaycanca',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/azeri.png',
  defaultImageAltText: 'BBC News Azərbaycanca',
  dir: `ltr`,
  externalLinkText: ', external',
  imageCaptionOffscreenText: 'Image caption, ',
  videoCaptionOffscreenText: 'Video caption, ',
  audioCaptionOffscreenText: 'Audio caption',
  defaultCaptionOffscreenText: 'Caption, ',
  imageCopyrightOffscreenText: 'Image source, ',
  locale: `az-AZ`,
  datetimeLocale: `az-AZ`.toLowerCase(),
  service: 'azeri',
  serviceName: 'News Azərbaycanca',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@bbcazeri',
  twitterSite: '@bbcazeri',
  noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
  script: latin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  translations: {
    seeAll: 'See all',
    home: 'Xəbərlər',
    currentPage: 'Current page',
    skipLinkText: 'Mətnə keçid',
    error: {
      404: {
        statusCode: '404',
        title: '404 - Səhifə tapılmadı',
        message:
          'Ola bilər ki, internet səhifəsinin ünvanını səhv yazmısınız. Zəhmət olmasa ünvanı və yazılışını bir də yoxlayın',
        solutions: [
          'Double checking the url',
          'Hitting the refresh button in your browser',
          'Searching for this page using the BBC search bar',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC Ana Səhifəsi',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/azeri',
      },
      500: {
        statusCode: '500',
        title: '500 - səhv',
        message: 'Bu səhvdir. Lütfən səhifəni təzələyin.',
        solutions: [
          'Hitting the refresh button in your browser',
          'Coming back again later',
        ],
        callToActionFirst: 'Alternatively, please visit the ',
        callToActionLinkText: 'BBC Ana Səhifəsi',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/azeri',
      },
    },
    consentBanner: {
      privacy: {
        title: "We've updated our Privacy and Cookies Policy",
        description: {
          uk: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              "We've made some important changes to our Privacy and Cookies Policy and we want you to know what this means for you and your data.",
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'OK',
        reject: "Find out what's changed",
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Let us know you agree to cookies',
        description: {
          uk: {
            first: 'We use ',
            linkText: 'cookies',
            last:
              ' to give you the best online experience. Please let us know if you agree to all of these cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first: 'We and our partners use technologies, such as ',
            linkText: 'cookies',
            last:
              ', and collect browsing data to give you the best online experience and to personalise the content and advertising shown to you. Please let us know if you agree.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Yes, I agree',
        reject: 'No, take me to settings',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      audio: 'Audio',
      photogallery: 'Fotoqalereya',
      video: 'Video',
    },
  },
  brandSVG,
  footer: {
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Read about our approach to external linking.',
    },
    links: [
      {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Why you can trust the BBC',
      },
      {
        href: 'https://www.bbc.com/terms',
        text: 'Terms of Use',
      },
      {
        href: 'https://www.bbc.co.uk/aboutthebbc/',
        text: 'About the BBC',
      },
      {
        href: 'https://www.bbc.com/privacy/',
        text: 'Privacy Policy',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.com/accessibility/',
        text: 'Accessibility Help',
      },
      {
        href: 'https://www.bbc.com/contact/',
        text: 'Contact the BBC',
      },
    ],
    copyrightText: 'BBC. BBC kənar saytların məzmunu üçün məsuliyyət daşımır',
  },
  fonts: [],
  timezone: 'Asia/baku',
};

export default service;
