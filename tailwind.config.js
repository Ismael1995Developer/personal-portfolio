/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #4f46e5 0%, #0ea5e9 50%, #10b981 100%)",
        "gradient-cta": "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #18181b 0%, #4f46e5 30%, #18181b 100%)",
      },
    },
  },
  plugins: [],
};
