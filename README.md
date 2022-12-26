# Inicialização

    1 - Clonar o repositório 
    2 - npm install
    3 - Criar o arquivo .env na raiz, adicionar as chaves DB_USER=, DB_PASS, SECRET
    4 - Acessar o link -> https://account.mongodb.com/account/login?signedOut=true fazer o login com o google
    5 - Criar um projeto no mongoDB Atlas -> new Project -> Project Name -> create Project -> Build a Database -> Shared -> Create -> Create Cluster
    6 - No menu lateral Database Access -> Add New Database User -> Dê um nome para o usuário, em seguida clique em Autogenerate Secure Password -> Clique em SHOW -> copia o usuário e a senha -> no arquivo .env, cole o nome do usuário no DB_USER, e no DB_PASS cole a senha do usuário
    7- No Built-in Role selecione Read and write to any database
    8 - No tempory User duration -> selecione o tempo de duração do usuário, em seguida clique em Add User
    9 - No menu lateral em Network Access, clique em Add Ip Address -> ADD CURRENT IP ADDRESS -> confirm
    10 - No menu lateral em Database -> Connect -> Connect your application -> copia a string -> no arquivo app.js linha 210 cole a string em mongoose.connect(`Cole a string aqui`) -> após mongodb+srv:// adicione o ${dbUser} e no lugar de <password> adicione ${dbPassword}
    11 - No arquivo .env na chave SECRET adicione um secret para a aplicação
    12 - npm start