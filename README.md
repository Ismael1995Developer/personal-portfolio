# Personal Portfolio

<p align="center">
  <img src="./public/logo.png" alt="Logo do projeto" width="160" />
</p>

## 📖 Descrição do Projeto

**Personal Portfolio** é um website de apresentação profissional, com foco em:

- Perfil e bio do desenvolvedor;  
- Skills e hard skills (Front-end, boas práticas, acessibilidade, performance, SEO técnico);  
- Showcase de projetos com cards, links para repositórios e cases;  
- Padrão de codificação (código limpo, semântico, responsivo);  
- SEO & Open Graph para melhor visualização em mecanismos de busca e compartilhamento;  
- UI consistente com componentes acessíveis.  

### Projeto pensado para **desempenho, acessibilidade e escalabilidade**, seguindo boas práticas do ecossistema **React/Next.js**.


## 🚀 Como instalar o projeto e rodar

### 🔗 Acesso Web (produção)
O site está hospedado na **Vercel**.  
URL [https://personal-portfolio-topaz-eight.vercel.app/]

## 📂 Estrutura de Pastas 
```bash
personal-portfolio/
├─ app/                    # Rotas/Layouts (se usar App Router)
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ (projects)/...       # Rotas aninhadas para projetos
├─ components/             # Componentes reutilizáveis (shadcn/ui + custom)
├─ lib/                    # Utils, configs (ex.: next-seo.config.ts)
├─ public/                 # Imagens (logo, fotos, favicons, og-images)
├─ styles/                 # globals.css, tailwind utilities
├─ types/                  # Tipagens compartilhadas
├─ data/                   # JSON/TS com lista de projetos/skills
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.js
├─ tsconfig.json
└─ package.json
```

## ♿ Acessibilidade, SEO e Performance

A11y: componentes Radix + semântica correta + foco/teclado.

SEO: next-seo, metatags OG/Twitter, sitemaps.

Performance: imagens otimizadas (next/image), prefetch de rotas, lazy loading.

Responsividade: Tailwind + breakpoints consistentes.

## 🗂 Versionamento

Versão atual: 1.0.0 (inicial)

# 👤 Autor

*José Ismael Correia*

📧 ismael1995internacional@gmail.com

## 📞 Contato e Suporte

Issues e melhorias: abra uma Issue ou Pull Request no GitHub.

Implantação: verifique o painel da Vercel e logs de build para troubleshooting. 


### 💻 Execução local 

```bash
# 1) Clonar o repositório
git clone https://github.com/<seu-usuario>/<seu-repo>.git
cd <seu-repo>

# 2) Instalar dependências
npm install
# ou
yarn
# ou
pnpm install

# 3) Rodar em desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

# 4) Acessar
http://localhost:3000

npm run build
npm run start

```
## 📌 Como usar o projeto

Edite o conteúdo em app/ ou pages/ (conforme o setup do seu Next.js).

Cadastre seus projetos e skills em fontes de dados (JSON/TS) ou CMS.

Configure SEO em next-seo.config.ts e utilize <DefaultSeo /> / <NextSeo />.

Ajuste tema/estilos em tailwind.config.ts e classes utilitárias.

Atualize imagens (logo, foto de perfil, thumbs) em public/.

## 📜 Licença do Projeto

Este repositório está licenciado sob a MIT License.
Consulte o arquivo LICENSE

## 💡 Notas:



## 📚 Libs utilizadas

**Next.js**
 – framework React para web moderna

**React**
 – biblioteca UI

**TypeScript**
 – tipagem estática

**Tailwind CSS**
 – estilização utilitária

**shadcn/ui**
 – camada de componentes pronta, sobre Radix

**Radix UI**
 – primitives acessíveis

**next-seo**
 – helpers para SEO

**lucide-react**
 – ícones

## 🛠 Ferramentas, linguagem e frameworks

Linguagem: TypeScript

Frameworks: Next.js, React

Estilos: Tailwind CSS + shadcn/ui

Ícones: lucide-react

SEO: next-seo

Controle de versão: Git + GitHub

CI/CD & Hosting: Vercel

Qualidade de código: ESLint + Prettier

## 📦 Dependências
Runtime (dependencies)

next

react / react-dom

next-seo (MIT)

lucide-react (ISC)

shadcn/ui

Radix UI (MIT)

Desenvolvimento (devDependencies)

typescript, @types/react, @types/node

tailwindcss, postcss, autoprefixer

eslint, eslint-config-next, prettier

```bash
{
  "name": "personal-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next-seo": "^6.1.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.2.5"
  }
}

```

## 📄 Licenças de Terceiros (avisos)
Biblioteca / Recurso	Licença	Fonte
next-seo	MIT	GitHub

Radix UI (primitives)	MIT	radix-ui.com

shadcn/ui	MIT	ui.shadcn.com

lucide-react	ISC	GitHub

Tailwind CSS	MIT	tailwindcss.com

React / React DOM	MIT	react.dev

Next.js	MIT	nextjs.org



