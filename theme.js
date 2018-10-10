import theme from 'mdx-deck/themes';

export const colors = {
  black: '#030019',
  white: '#fff',
  lightBlue: '#4ca9cd',
};

export const fontSize = { small: '1em', medium: '2.2em', large: '3.5em' };

export default {
  ...theme,
  colors: {
    background: colors.black,
    text: colors.white,
  },
  h1: {
    color: colors.lightBlue,
    fontWeight: 800,
    fontSize: fontSize.large,
  },
  h2: {
    color: colors.white,
    fontWeight: 800,
    fontSize: fontSize.medium,
  },
  ul: {
    color: colors.white,
    fontWeight: 800,
    fontSize: '2em',
  },
  font: 'Heebo',

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
