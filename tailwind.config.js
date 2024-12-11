/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',  
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#000000',  // Background principal
        foreground: '#333333',  // Texto principal
        card: {
          DEFAULT: '#ffffff',  // Cor padrão de card (branca)
          foreground: '#333333',  // Cor do texto dentro de um card
        },
        popover: {
          DEFAULT: '#ffffff',  // Popover de fundo branco
          foreground: '#333333',  // Texto no popover
        },
        primary: {
          DEFAULT: '#4A90E2',  // Azul claro moderno
          foreground: '#ffffff',  // Texto em botões ou elementos primários
        },
        secondary: {
          DEFAULT: '#D3E97A',  // Verde suave
          foreground: '#ffffff',  // Texto em elementos secundários
        },
        muted: {
          DEFAULT: '#0d1027',  // Cinza médio para elementos suaves
          foreground: '#ffffff',  // Texto de elementos muted
        },
        accent: {
          DEFAULT: '#F5A623',  // Laranja para destaques
          foreground: '#ffffff',  // Texto em elementos de destaque
        },
        destructive: {
          DEFAULT: '#B0C4DE',  // Vermelho de alerta
          foreground: '#ffffff',  // Texto em elementos de alerta
        },
        border: '#1A1A1A',  // Borda padrão cinza claro
        input: '#ffffff',  // Fundo de input branco
        ring: '#4A90E2',  // Azul claro para foco de elementos
        chart: {
          '1': '#4A90E2',  // Azul para gráficos
          '2': '#50E3C2',  // Verde para gráficos
          '3': '#F5A623',  // Laranja para gráficos
          '4': '#9B9B9B',  // Cinza médio
          '5': '#D0021B',  // Vermelho de gráficos
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
