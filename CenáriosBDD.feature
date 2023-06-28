Cenário 1: Usuário Loga na Aplicação com dados Válidos
Dado que o usuário esteja na tela de login 
Quando o mesmo inserir o "email " e a "Senha" válidos
E marcar a caixa "não sou um robô"
Então deverá ser possível logar na aplicação 


Cenário 2: Usuário Tenta logar na aplicação com dados Inválidos
Dado que o usuário esteja na tela de login 
Quando o mesmo inserir um "email " ou "Senha" Inválidos
Então a aplicação deverá enviar uma mensagem " Login e/ou senha inválidos" e não será possível logar na aplicação 


Cenário 3: Usuário Loga na Aplicação com Email de API Google
Dado que o usuário esteja na tela de login 
Quando o mesmo clicar no botao " G+ Login com Google" 
Então deverá ser possível logar na aplicação com os dados de e-mail e senha da conta Google

Cenário 4: Usuário esqueceu a senha 
Dado que o usuário esteja na tela de login 
E o mesmo não consegue inserir a senha 
Quando o mesmo clicar no botão "Esqueceu sua Senha?"
Então a aplicação deverá abrir outro formulário para o mesmo inserir o e-mail cadastrado e recuperar a senha

Cenário 5: Testar a performançe de vários usuários logando uma só vez.
Dado que esteja esteja utilizando o Jmeter para teste de performançe
E esteja utilizando um imput de login
Quando o mesmo submeter 10 mil usuários através da ferramenta sendo logados simultaneamente 
Então deverá analisar como irá comportar a aplicação com esse número de acesso de uma vez só