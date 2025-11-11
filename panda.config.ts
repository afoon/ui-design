import { defineConfig } from "@pandacss/dev";
import {colors} from './theme/colors'
import {typography, textStyles} from './theme/typography'
import { defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'text',
    lineHeight: '1.5',
    fontSize: '16px',
    fontFamily: 'var(--font-inter-sans)',
  }
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  globalCss,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", './stories/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
      tokens: {colors,
        radii: {
          sm: {value:'4px'},
          md: {value:'8px'}
        },
        ...typography
      },
      extend: {
        textStyles
      }
  },

  // The output directory for your css system
  outdir: "styled-system",
  presets: [],
});
