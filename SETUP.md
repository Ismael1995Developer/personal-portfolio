# Configuração do Portfólio

## 🚀 Próximos Passos para Deploy

### 1. Configurar Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma nova propriedade para o site
3. Copie o ID de rastreamento (formato: G-XXXXXXXXXX)
4. Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-SEU_ID_AQUI
```

### 2. Configurar Formulário de Contato

O formulário está configurado com validação, mas você precisa implementar o envio real:

#### Opção 1: EmailJS (Recomendado para começar)

```bash
npm install @emailjs/browser
```

#### Opção 2: Resend (Profissional)

```bash
npm install resend
```

#### Opção 3: API Route do Next.js

Criar `src/app/api/contact/route.ts`

### 3. Deploy na Vercel

1. Conecte o repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_GA_ID`
3. Deploy automático

### 4. Configurações Adicionais

#### Domínio Personalizado

- Configure DNS para apontar para a Vercel
- Atualize URLs nos metadados SEO

#### Otimizações

- Adicionar imagens reais dos projetos
- Configurar sitemap.xml
- Configurar robots.txt

## 📱 Informações Atualizadas

- **Telefone**: (49) 99961-487
- **Email**: ismael1995internacional@gmail.com
- **Projetos**:
  - UltraTech Sistemas: https://www.ultratechsistemas.com.br
  - Karine Paulino Advocacia: https://karinepaulinoadvocacia.com.br
  - Emagreça Comigo: https://www.emagrecacomigo.com.br

## 🎯 Funcionalidades Implementadas

✅ Informações de contato reais
✅ Projetos reais com links funcionais
✅ Formulário com validação (Zod + React Hook Form)
✅ Google Analytics configurado
✅ Layout responsivo corrigido
✅ SEO otimizado
✅ TypeScript sem erros
✅ Linting configurado

## 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Lint
npm run lint

# Type check
npm run typecheck

# Formatar código
npm run format
```
