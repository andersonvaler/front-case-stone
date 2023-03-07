

# Stone Tech RC - Front-End Challenge


## Primeiros Passos


Olá Dev/Deva! 😃

Você chegou no desafio técnico de Front End 💚

Aqui iremos avaliar suas aptidões técnicas e senso crítico na hora de escrever códigos.

<b>Antes de começar a codar :)</b>

- Esse repositório específico não deve ser alterado
- Esse repositório também não pode ser forkado
- É necessário importar o código desse repo para um novo repositório que você irá criar :) - Segue um [passo a passo](https://docs.github.com/pt/github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer) de como fazer isso
- Configure o novo repositório como private
- Inclua os seguintes users do git como colaboradores: Vitormartins12, arturpfb, muriiloandrade, gustavoalvessouza, e yjunqueira
- No seu repositório, crie sua(s) branch(es) e realize os commits com base nas atividades propostas
- Ao finalizar os commits, suba os pull requests para main e os mantenha abertos (não mergear)


## Sobre o projeto

Você precisa montar a página de uma rede social fictícia que contém alguns posts no feed, usando React.js. Você pode usar o framework que desejar, desde que utilize como base o React. Se preferir desenhar um protótipo no Figma para auxiliar seu processo, é muito bem vindo mas o código é o nosso foco neste desafio.

Ao todo, são 8 postagens no “feed” que devem ser mostradas uma após a outra. O desenho da tela, o estilo, cores, imagens de fundo, fontes escolhidas, entre outros elementos, ficam a seu critério. Iremos avaliar sua capacidade de criar front-ends bonitos e que atendam ao público-alvo.

Para simplificar, o nosso backend irá retornar todas as informações existentes no nosso “banco de dados” de uma só vez ao requisitar para o servidor. Não precisa se preocupar com o efeito de “feed infinito”, por exemplo. Falaremos em mais detalhes como utilizar o “backend” mais adiante.

Abaixo, temos um “desenho conceito” mostrando como o resultado final deve se parecer, mas fique livre para melhorá-lo e dar o seu toque final desde que atenda às regras obrigatórias que iremos discutir a seguir.

![alt text for screen readers](/assets/social_feed_sample.png "Layout sugerido")


## Requisitos obrigatórios


### Entrega

- Código Limpo, de acordo com os padrões
- Bom uso das tecnologias propostas
- Configuração adequada de um repositório front-end
- Otimizações nos fluxos de tela como:
    - Memorização de informações que não mudam com frequência
    - Não fazer ciclos desnecessários de renderização
    - Utilizar o estado de forma inteligente


A tela deve conter duas regiões:

### 1) Região Esquerda: detalhe do usuário “logado agora” na plataforma
- **Foto de Perfil** completa
- **Nome** e **nome de usuário (“@”)**
- **Bio** do usuário
- O user "logado", você consegue obter dinamicamente através da rota “/me” da API
- Sinta-se livre para alterar essa rota localmente e visualizar diversos usuários como o “usuário logado”. Faremos esse teste na sua apresentação.

### 2) Região Direita: feed das postagens
- A altura do feed compreende de uma a duas postagens, **mantendo a proporção original** das imagens e dimensionado-as de acordo com seu gosto  para caber na tela
- As imagens foram tiradas do repositório https://unsplash.com/. Caso tenha algum problema com algum link, fique a vontade para alterar a imagem utilizada localmente
- Os posts tem que aparecer na ordem cronológica de sua criação (do post mais novo para o post mais antigo)
- Cada postagem segue o mesmo padrão, com informações de: 
    - Usuário que postou: Foto do avatar, Nome, Nome de usuário (“@”)
    - Imagem
    - Descrição/ texto
    - Hashtags (somente seus nomes com um #, no final dos textos)
    - Número de “curtidas” e botão para curtir
    - Data de criação
- Cada postagem tem um número total de “curtidas”. As “curtidas” funcionam parecido com botões de “like” ou “gostei”, mas aqui, ao invés de registrar que você deixou apenas um “like”, apenas incrementamos o número total de “curtidas” daquela postagem. Você pode clicar nesse botão quantas vezes quiser, incrementando uma curtida a cada clique.
    - A contagem de likes deve registrada no servidor
    - Se atualizamos a página, queremos ver o número de curtidas incrementado
- No detalhamento da **foto do usuário** da postagem, temos que colocar o avatar do usuário redondo. A url da foto completa vem do nosso “backend”, mas você deve usar a sua criatividade para “cortar” a foto e dimensionar ela com o rosto do usuário em foco, dentro da foto de avatar.
    - Ela deve ter uma dimensão menor, que harmonize com a página
    - A configuração do "corte" que você escolheu pode ser salva no servidor, ou guardar em algum outro local de sua preferência. Imagine que o usuário fez essa configuração quando se cadastrou e "salvou" isso no nosso banco de alguma forma. Fique livre para criar um novo "campo", "rota" ou semelhante
    - Use a criatividade e o CSS para resolver esse problema, temos um link que pode auxiliar nas referências


### Backend

Para simplificar o desafio, utilizamos o **json-server** como ferramenta para o nosso "backend". Ele fornece funções de CRUD básicas de uma forma muito rápida e fácil de configurar para um ambiente de desenvolvimento local. 

Leia a documentação para entender como ele funciona e como você pode fazer alterações no servidor.

O arquivo `/backend/db.json` contém o json com os dados para o nosso servidor local.


## Desafios Extras 

Essas atividades deixam o seu trabalho ainda mais completo e valem mais pontos para sua apresentação!

- Criar uma barra de topo com:
    - Marca / logo (desenho) ou nome da rede social que você escolher, seja criativo!
    - Ferramenta de busca, que filtra apenas os posts no feed que contém as palavras (ou caracteres) digitadas. A busca deve ser feita de uma maneira otimizada e que seja fluida para o usuário
        - A filtragem deve ser feita no front-end 
- Página de "Perfil" dos usuários do feed
    - Ao clicar no "Nome de usuário" ou "avatar" de um usuário criador de um post no feed, você navega para uma página que contém a foto de perfil, nomes, bio (tal qual a Região Esquerda) e os posts que aquele usuário fez
    - Fique livre para desenhar um layout diferente para essa página
    - Importante termos um botão que nos faça "voltar" para a visão de "feed" inicial
- "Dockerizar" a aplicação do front end
- Fique a vontade de trazer melhorias que você identificar e quiser implementar




## Referências e Links de ajuda
https://unsplash.com

https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit#using-object-fit-contain

https://www.npmjs.com/package/json-server
