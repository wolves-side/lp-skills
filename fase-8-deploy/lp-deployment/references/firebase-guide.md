# Guia de Deploy: Publicando seu Site com o Firebase Hosting

**Nível de Dificuldade:** Intermediário
**Tempo Estimado:** 10-15 minutos

O Firebase é uma plataforma poderosa do Google. O processo é um pouco diferente, mas ainda muito acessível. Este guia foca no deploy manual, que é mais simples para iniciantes.

---

### **Passo 1: Prepare seu Projeto**

1.  No seu computador, tenha uma pasta com todos os arquivos do seu site prontos (ex: `index.html`, `style.css`, etc.).
2.  **Importante:** O arquivo principal da sua página inicial **deve** se chamar `index.html`.

### **Passo 2: Crie um Projeto no Firebase**

1.  Vá para o site do Firebase: **[console.firebase.google.com](https://console.firebase.google.com )**
2.  Faça login com sua conta do Google.
3.  Clique em **"Add project"** (Adicionar projeto).
4.  Dê um nome ao seu projeto (ex: "meu-site-incrivel") e siga os passos (você pode desativar o Google Analytics para simplificar).
5.  Aguarde a criação do projeto.

### **Passo 3: Acesse o "Hosting" (Hospedagem)**

1.  Dentro do painel do seu novo projeto, no menu à esquerda, procure por **"Build"** e clique em **"Hosting"**.
2.  Na tela de Hosting, clique no botão **"Get started"**.
3.  O Firebase mostrará uns passos que envolvem linha de comando. **Vamos ignorá-los por enquanto** e usar a interface gráfica. Clique em "Next" algumas vezes até ver o painel principal do Hosting.

### **Passo 4: Publique seu Site (Deploy Manual)**

1.  No painel do Hosting, você verá um card com o domínio do seu site (algo como `seunome.web.app`).
2.  Procure por uma opção que diz **"Drag and drop"** ou um botão **"Upload"**.
3.  **Arraste a pasta** com os arquivos do seu site do seu computador para dentro da área indicada no navegador.
4.  O Firebase fará o upload dos arquivos. Em poucos segundos, seu site estará no ar no link fornecido!

**Pronto!** Esta é a maneira mais simples. Toda vez que você quiser atualizar o site, basta arrastar a nova versão da pasta para o mesmo lugar.
