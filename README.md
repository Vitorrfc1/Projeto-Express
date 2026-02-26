# Projeto-Express
Projeto em Express Vitor Rodrigues - 2320595

Versão da Node - v20.20.0
Versão do Prisma - 6.19.2
Versão do Express - 4.22.1

Como Rodar o Projeto 

Guia de Execução
1. Preparação do Ambiente

Bash

# Clonar repositório e acessar pasta

git clone url

cd Projeto-Express-main

# Instalar dependências

npm install

2. Configuração do Banco de Dados

Crie um arquivo .env na raiz do projeto com a seguinte variável:
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"

4. Inicialização do Prisma e Servidor

Bash

# Gerar o Prisma Client
npx prisma generate

# Sincronizar tabelas com o PostgreSQL
npx prisma db push

# Iniciar servidor (Desenvolvimento ou Produção)

npm run dev

Verificação de Status

URL: http://localhost:3000/

Método: GET

Resposta esperada: "API funcionando"

Gerenciamento de Usuários (Postman/Insomnia)
Criar Usuário

Método: POST

URL: http://localhost:3000/usuarios

Corpo (JSON):

JSON
{
  "nome": "Vitor",
  "email": "vitor@email.com",
  "senha": "123456",
  "perfil_nome": "Admin"
}
Listar Usuários

Método: GET

URL: http://localhost:3000/usuarios

Descrição: Retorna a lista completa de usuários e seus respectivos perfis mapeados.

http://localhost:3000/usuarios

Retorna todos os usuários cadastrados com seus perfis.
