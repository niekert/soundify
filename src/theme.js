const spaceFactor = 8;

function computeGoldenRatio(spacingFactor, exp) {
  return Math.round(spacingFactor * 1.618 ** exp);
}

export default {
  colors: {
    primaryBackground: '#242429',
    primaryText: '#dfe0e6',
    secondaryText: '#88898c',
    active: '#0095ff',
    secondaryActive: '#3e3e40',
    outline: '#222326',
    cta: '#0095ff',
    reverse: {
      primaryBackground: '#ffffff',
      background: '#f5f5f5',
      primaryText: '#333',
      secondaryText: '#948784',
      outline: '#a5a5a5a5',
    },
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    normal: 400,
    light: 200,
  },
  spacing: {
    space0: `${computeGoldenRatio(spaceFactor, 0)}px`, // 8
    space1: `${computeGoldenRatio(spaceFactor, 1)}px`, // 13
    space2: `${computeGoldenRatio(spaceFactor, 2)}px`, // 21
    space3: `${computeGoldenRatio(spaceFactor, 3)}px`, // 34
    space4: `${computeGoldenRatio(spaceFactor, 4)}px`, // 55
    space5: `${computeGoldenRatio(spaceFactor, 5)}px`, // 89
  },
  fontSize: {
    // heading
    displayLarge: '32px',
    displayMedium: '26px',
    displaySmall: '20px',
    heading: '18px',
    subheading: '16px',
    icon: '24px',
    iconSmall: '16px',

    // body
    body: '17px',
    caption: '15px',
  },
  lineHeights: {
    // heading
    displayLarge: '48px',
    displayMedium: '32px',
    displaySmall: '24px',
    heading: '24px',
    subheading: '24px',

    // body
    body: '24px',
    caption: '24px',
  },
  shadows: {
    depth1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    depth2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    depth3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    depth4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    depth5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
};
