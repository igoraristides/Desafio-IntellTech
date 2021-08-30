1º - Arquivo Banco.sql contém o banco com alguns diretórios e formas já cadastrados.

2º - O arquivo ScriptDesafio.sql é o script de criação do banco sem nenhuma forma ou diretório cadastrado.
(OBS: quando executar o backEndAPI irá criar dois diretórios iniciais no banco, pois usei para popular para testes, caso
 prefira que não crie é so retirar o arquivo  InicializaBD.cs dos arquivos e a linha "InicializaBD.Initialize(contexto);"
do arquivo Startup(linha 78) que o banco continuará vazio.

3º - O arquivo ModeloERparaCriacao.mwb contém o modelo ER usado para criação dos scripts.

4º - Possívelmente haverá necessidade de alterar a "connectionString" em appsettings.json e appsettings.Development 
para dados do mysql instalado na máquina que irá testar.

Obrigado pela atenção,

Igor A. Amaral dos Santos