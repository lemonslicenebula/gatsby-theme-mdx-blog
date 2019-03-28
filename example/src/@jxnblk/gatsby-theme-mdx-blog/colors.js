
// imports seem to be broken
// import * as gtmdx from '@jxnblk/gatsby-theme-mdx-blog'

import colors from '@jxnblk/gatsby-theme-mdx-blog/src/colors'

// Colors for the theme can be configured by shadowing this file
export default {
  ...colors,
  modes: {
    dark: colors.modes.dark,
    book: {
      text: '#321',
      background: '#fefdf6',
      primary: '#a20',
      secondary: '#810',
      muted: '#f0f0e6',
    }
  }
  // text: 'tomato',
  // background: '#f6f6ff',
  // primary: 'black',
  // secondary: 'navy',
  // muted: '#eee',
}
