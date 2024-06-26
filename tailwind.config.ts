import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'comparison-pattern': "linear-gradient(to right bottom, rgba(227, 244, 255, 0.9), rgba(255, 255, 255, 1)), url('/images/comparison-bg-pattern.svg')",
      },
      blur:{
        '2px':'2px',
      },
      colors: {
        placeholder: '#9ca3af',
        // TIP: DEFAULT is 09
        primary: {
          '12': '#255FFF',
          '11': '#008FC9',
          '10': '#00A3E6',
          DEFAULT: '#02B5FF',
          '01': '#E6F8FF',
          '00': '#F5F7FC',
          '001': '#F4FCFF',
          '002': '#E3F4FF'
        },
        secondary: {
          '17': '#191919',
          '11': '#696969',
          '10': '#787878',
          DEFAULT: '#858585',
          '08': '#919191',
          '06': '#ADADAD',
          '03': '#D6D6D6',
          '02': '#F2F2F2',
          '002':'#FAFAFA',
          '01': '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFCC02',
          '01': '#FFFAE8',
          '00': '#FFFAEB'
        },
        error: {
          DEFAULT: '#FF001E',
          '01': '#FFEDEF',
        },
        warning: {
          DEFAULT: '#FF8A00',
          '01': '#FFF6ED'
        },
        success: {
          '10': '#00A600',
          DEFAULT: '#00C400',
          '01': '#E8FFE8',
          '03':'#BBFFBB'
        },
      },
      spacing: {
        '2%': '2%',
        '4%': '4%',
        '15%': '15%',
        '30%': '30%',
        '18': '72px',
        '112': '448px',
        '100': '400px',
        '162': '648px',
        '275': '1100px',
        '200': '800px',
        '130': '520px',
        'inherit': 'inherit',
        'fit':'fit-content',
        'screen-30vh': '30vh',
        'screen-60vh': '60vh',
        'screen-28vw': '28vw',
        'screen-70': 'calc(100vh - 70px)',
        'screen-72': 'calc(100vh - 72px)',
        'screen-100': 'calc(100vh - 100px)',
        'screen-120': 'calc(100vh - 120px)',
        'screen-160': 'calc(100vh - 160px)',
        'screen-190': 'calc(100vh - 190px)',
        'screen-300': 'calc(100vh - 300px)',
        'screen-390': 'calc(100vw - 390px)',
        'screen-530': 'calc(100vh - 530px)',
        'screen-550': 'calc(100vh - 550px)'
      },
      fontSize: {
        xxs: '.65rem',
      },
      borderWidth:{
        '3': '12px'
      }
    },
  }
};
export default config;
