# Personal Portfolio

[![status](https://img.shields.io/badge/status-active-success?style=flat-square)](#)
[![version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](#versionamento)
[![deploy](https://img.shields.io/badge/deploy-Vercel-000?logo=vercel\&style=flat-square)](https://vercel.com/)
[![tech](https://img.shields.io/badge/stack-Next.js%20%7C%20React%20%7C%20TS%20%7C%20Tailwind-0ea5e9?style=flat-square)](#ferramentas-linguagens-e-frameworks)
[![license](https://img.shields.io/badge/license-MIT-green?style=flat-square)](#licença-do-projeto)

---

## Logo do Projeto

<p align="center">
  <img src="./public/logo.png" alt="Logo do projeto" width="160" />
</p>

<p align="center">
  <a href="./public/logo.png" download="personal-portfolio-logo.png">⬇️ Baixar logo (PNG)</a>
</p>

## Descrição do Projeto

**Personal Portfolio** é um website de apresentação profissional, com foco em:

* **Perfil e bio** do desenvolvedor;
* **Skills e hard skills** (Front-end, boas práticas, acessibilidade, performance, SEO técnico);
* **Showcase de projetos** com cards, links para repositórios e cases;
* **Padrão de codificação** (código limpo, semântico, responsivo);
* **SEO & Open Graph** para melhor visualização em mecanismos de busca e compartilhamento;
* **UI consistente** com componentes acessíveis.

Projeto pensado para **desempenho, acessibilidade e escalabilidade**, seguindo boas práticas do ecossistema React/Next.js.

## Versionamento

* **Versão atual:** `1.0.0` (inicial).
* Padrão **SemVer**: `MAJOR.MINOR.PATCH`.
* Registre mudanças no `CHANGELOG.md`.

## Como instalar o projeto e rodar

> **Acesso Web (produção):** o site será hospedado na **Vercel**.
> **URL:** `https://<SEU-DOMÍNIO>.vercel.app`

```bash
# 1) Clonar o repositório
git clone https://github.com/Ismael1995Developer/personal-portfolio.git
cd

# 2) Instalar dependências
#
npm install

# 3) Rodar em desenvolvimento
npm run dev

# 4) Acessar
# http://localhost:3000
```

> **Build/preview:**

```bash
npm run build
npm run start
```

---

## Como usar o projeto

* Edite o conteúdo em `app/` ou `pages/` (conforme o setup do seu Next.js).
* Cadastre seus **projetos** e **skills** em fontes de dados (JSON/TS) ou CMS, conforme sua preferência.
* Configure **SEO** em `next-seo.config.ts` e utilize `<DefaultSeo />`/`<NextSeo />`.
* Ajuste **tema/estilos** em `tailwind.config.ts` e classes utilitárias.
* Atualize imagens (logo, foto de perfil, thumbs) em `public/`.

---

## Licença do Projeto

Este repositório está licenciado sob a **MIT License**.
Consulte [LICENSE](./LICENSE) para o texto completo.

> **Notas:**
>
> **MIT** recomendado para reuso com crédito.

---

## Bibliotecas utilizadas

* **Next.js** 
* **React** 
* **TypeScript** 
* **Tailwind CSS** 
* **shadcn/ui** 
* **Radix UI** 
* **next-seo** 
* **lucide-react** 

---

## Ferramentas, linguagem e frameworks

* **Linguagem:** TypeScript
* **Frameworks:** Next.js, React
* **Estilos:** Tailwind CSS 
* **Ícones:** lucide-react
* **SEO:** next-seo
* **Controle de versão:** Git
* **Repositório:** GitHub
* **CI/CD & Hosting:** Vercel

## Dependências

### Runtime (`dependencies`)

* `next`
* `react` / `react-dom`
* `next-seo` *(MIT)*
* `lucide-react` *(ISC)*
* **shadcn/ui** *(componentes integrados ao projeto; base Radix)*
* **Radix UI** *(MIT – primitives para acessibilidade)*

### Desenvolvimento (`devDependencies`)

* `typescript`, `@types/react`, `@types/node`
* `tailwindcss`, `postcss`, `autoprefixer`
* `eslint`, `eslint-config-next`, `prettier`

```json
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
## Licenças de Terceiros (avisos)

| Biblioteca / Recurso      | Licença                                                                              | Fonte                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| **next-seo**              | MIT                                                                                  | [https://github.com/garmeeh/next-seo](https://github.com/garmeeh/next-seo)       |
| **Radix UI** (primitives) | MIT                                                                                  | [https://www.radix-ui.com/](https://www.radix-ui.com/)                           |
| **shadcn/ui**             | MIT                                                                                  | [https://ui.shadcn.com/](https://ui.shadcn.com/)                                 |
| **lucide-react**          | ISC — “desde que o aviso de copyright e esta permissão apareçam em todas as cópias.” | [https://github.com/lucide-icons/lucide](https://github.com/lucide-icons/lucide) |
| **Tailwind CSS**          | MIT                                                                                  | [https://tailwindcss.com/](https://tailwindcss.com/)                             |
| **React / React DOM**     | MIT                                                                                  | [https://react.dev/](https://react.dev/)                                         |
| **Next.js**               | MIT                                                                                  | [https://nextjs.org/](https://nextjs.org/)                                       |


## Estrutura de Pastas
```
personal-portfolio/
├─ app/                    # Rotas/Layouts 
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ (projects)/...       # Rotas aninhadas para projetos
├─ components/             # Componentes reutilizáveis 
├─ lib/                    # Utils, configs 
├─ public/                 # Imagens 
├─ styles/                 # globals.css, tailwind utilities
├─ types/                  # Tipagens compartilhadas
├─ data/                   # JSON/TS com lista de projetos/skills
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.js
├─ tsconfig.json
└─ package.json

```
## Acessibilidade, SEO e Performance

* **A11y:** componentes Radix + semântica correta + foco/teclado.
* **SEO:** `next-seo`, metatags OG/Twitter, sitemaps.
* **Performance:** imagens otimizadas (`next/image`), prefetch de rotas, lazy loading.
* **Responsividade:** Tailwind + breakpoints consistentes.


## Autor

**José Ismael Correia**
📧 [ismael1995internacional@gmail.com](mailto:ismael1995internacional@gmail.com)



## Contato e Suporte

* Issues e melhorias: abra uma **Issue** ou **Pull Request** no GitHub.
* Implantação: verifique o painel da **Vercel** e logs de build para troubleshooting.



