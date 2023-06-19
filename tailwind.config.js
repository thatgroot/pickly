/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkgray: "#b4b4b4",
        gray: {
          "100": "#8b8b8b",
          "200": "#272727",
          "300": "#212121",
          "400": "#191919",
          "500": "#101010",
          "600": "#030303",
        },
        darkslategray: {
          "100": "#363636",
          "200": "#313131",
          "300": "#2e2e2e",
        },
        palegoldenrod: "#efffb5",
        whitesmoke: "#f2f2f2",
        yellowgreen: {
          "100": "#dffe71",
          "200": "#d4fa57",
          "300": "#abe956",
          "400": "#75be24",
        },
        khaki: "#e2fd7e",
        greenyellow: "#98eb30",
      },
      fontFamily: {
        "khmer-mn": "'Khmer MN'",
        srisakdi: "Srisakdi",
        papyrus: "Papyrus",
        luminari: "Luminari",
        "lores-9-plus-ot": "'LoRes 9 Plus OT'",
        herculanum: "Herculanum",
      },
    },
    fontSize: {
      "18xl": "37px",
      "11xl": "30px",
      "21xl": "40px",
      "41xl": "60px",
      "31xl": "50px",
      "16xl": "35px",
      "51xl": "70px",
      "131xl": "150px",
      "8xl": "27px",
      "6xl": "25px",
      "27xl": "46px",
      "81xl": "100px",
      "20xl": "39px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
