# Mock Rappi

A seguinte aplicação, performa algumas funcionalidades de um aplicativo *Ecommerce*, onde se pode utilizar as seguintes funções:
- Adicionar produto ao carrinho;
- Remover produto do carrinho;
- Buscar por produto.

Para buildar o projeto, é necessário seguir os seguintes passos:
- Clonar o projeto na máquina;
- Instalar as dependências do projeto através de um gestor de dependência de sua preferência (yarn, npm ...);
- Instalar o json-server, para mockar a api (https://github.com/typicode/json-server);
- Iniciar o servidor através do comando abaixo, no diretório onde seu arquivo json (com os dados que se encontram no final desse manual) se encontra:
```sh
json-server --watch product.json
```
- Ter o ambiente configurado para React Native (https://facebook.github.io/react-native/docs/getting-started);
- Conectar emulador na máquina, caso esteja usando, com o comando::
```sh
adb connect 127.0.0.1:porta
```
Obs: caso esteja utilizando um dispositivo físico, executar o comando abaixo para dar bind nas portas do dispositivo e da máquina, para uso do json-server:
```sh
adb -s <device name> reverse tcp:8081 tcp:8081
```
- Buildar aplicação React Native, através do comando:
```sh
react-native run-android
```

- Product.json
```
{
  "products": [
    {
      "id": 1,
      "description": "BOMBRIL",
      "image": "https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg",
      "price": 1.69,
      "date": "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)"
    },
    {
      "id": 2,
      "description": "Qualy",
      "image": "https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
      "price": 5.29,
      "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
    },
    {
      "id": 3,
      "description": "Nescau",
      "image": "https://http2.mlstatic.com/relaco-de-produtos-c-eanncmfotos-16-milhoes-de-produtos-D_NQ_NP_808515-MLB25247269155_122016-F.jpg",
      "price": 10.25,
      "date": "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)"
    },
    {
      "id": 4,
      "description": "Leite Italac",
      "image": "https://static.carrefour.com.br/medias/sys_master/images/images/h75/hcb/h00/h00/9688613912606.jpg",
      "price": 11.3,
      "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
    },
    {
      "id": 5,
      "description": "Presunto Sadia",
      "image": "https://superprix.vteximg.com.br/arquivos/ids/171803-600-600/Presunto-Cozido-Sadia-200g.jpg",
      "price": 100.02,
      "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
    }
  ]
}
```

Obs: Versão do React Native em uso é a  **0.61.0-rc.3**.


