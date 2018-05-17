import { configureViewport } from '@storybook/addon-viewport';



configureViewport({
  defaultViewport: 'iPhone 6',

  viewports: {

    iphone6: {
      name: 'iPhone 6',
      styles: {
        border: 'none',
        height: '667px',
        width: '375px',
      },
      type: 'mobile',
    },

    iphone5: {
      name: 'iPhone 5',
      styles: {
        border: 'none',
        height: '568px',
        width: '320px',
      },
      type: 'mobile',
    },

    iphoneX: {
      name: 'iPhone X',
      styles: {
        border: 'none',
        height: '812px',
        width: '375px',
      },
      type: 'mobile',
    },

    ipad: {
      name: 'iPad',
      styles: {
        border: 'none',
        height: '1024px',
        width: '768px',
      },
      type: 'tablet',
    },

    desktop: {
      name: 'Desktop',
      styles: {
        width: '100%',
        height: '100%',
        border: 'none',
        display: 'block',
        margin: '0',
        boxShadow: 'none',
      },
      type: 'desktop',
    },
  },
});

configureViewport({
  defaultViewport: 'iPhone 6',
});
