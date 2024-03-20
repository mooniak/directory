import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xxl: "1921px",
      xl2: "1601px",
      lg2: "993px",
      md2: "806px",
      sm2: "481px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      sm: "0.8rem",
      sm2: "0.938rem",
      base: "1rem",
      "18px": "1.125rem",
      xl: "1.25rem",
      "20px": "1.25rem",
      "28px": "1.75rem",
      "30px": "1.875rem",
      "50px": "3.125rem",
      "60px": "3.75rem",
      "160px": "5.7rem",
      "4xl": "2.25rem",
      hd3: "3.75rem",
      xxl: "6rem",
      hd4: "10rem",
      xxl1: "13.75rem",
      xxl2: "21.875rem",
      "321px": "20.075rem",
      xxl3: "26.75rem",
      "200px": "12.5rem",
      "70px": "4.375rem",
      "22px": "1.375rem",
      "13vw": "13vw",
      "15vw": "15vw",
    },
    fontFamily: {
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        "12": "3rem",
        "38": "2.375rem",
        "43.57": "2.723rem",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",

        // Complex site-specific column configuration
      },
      gridColumnStart: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
      },
      gridColumnEnd: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
