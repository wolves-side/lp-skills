# Guia de Deploy: Publicando seu Site com a Cloudflare Pages

**Nível de Dificuldade:** Fácil
**Tempo Estimado:** 5-7 minutos

A Cloudflare Pages é uma ótima alternativa para publicar sites, com foco em velocidade e segurança.

---

### **Passo 1: Crie sua Conta na Cloudflare**

1.  Abra o site da Cloudflare: **[dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up )**
2.  Crie sua conta usando um e-mail e senha.
3.  Após criar a conta, no painel principal, procure no menu lateral por **"Workers & Pages"** e clique.

### **Passo 2: Conecte sua Conta GitHub**

1.  Dentro da área "Workers & Pages", clique em **"Create application"** e depois vá para a aba **"Pages"**.
2.  Clique no botão **"Connect to Git"**.
3.  Uma janela de autenticação do GitHub vai aparecer. Escolha sua conta e decida se quer dar acesso a todos os seus repositórios ou apenas ao repositório específico do seu site.
4.  Clique em **"Install & Authorize"**.

### **Passo 3: Selecione o Projeto e Publique**

1.  Após conectar, você verá uma lista dos seus repositórios. Selecione o que você deseja publicar.
2.  Clique em **"Begin setup"**.
3.  Assim como a Vercel, a Cloudflare tentará adivinhar as configurações do seu projeto. Para um site simples (HTML, CSS, JS), você pode deixar as configurações como estão.
4.  Role para baixo e clique em **"Save and Deploy"**.
5.  Aguarde o processo de construção e publicação.
6.  Ao final, a Cloudflare fornecerá o link do seu site publicado.

**Pronto! Seu site está online.** A Cloudflare também irá monitorar seu repositório e atualizar o site automaticamente a cada nova alteração.
