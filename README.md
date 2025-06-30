# Qa-test-playwright

Este reposítorio contém um teste automatizado de interface utilizando o framework de automação Playwright para validar a página de Dicionário de Gírias do site qual é a gíria. 

# :mag_right: O que será testado?
- Fluxo de acesso da página principal
- A pesquisa da página inicial
- O acesso ao Dicionário de gírias no menu
- A pesquisa em ordem alfabetica no Dicionário A-Z
- Verificação do botão "saiba+"
- A pesquisa em ordem alfabetica no Menu lateral do Dicionário A-Z (web)
- Verificação do botão "ver mais gírias"
- Verificação do botão "ver classificação completa"
- Verificação do botão "adicionar gíria"

# :books: Tecnologias usadas
<img src="https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    
# :open_file_folder: Como instalar?
Primeiro, clone o repositório para seu ambiente:
> git clone https://github.com/Imlenna/qa-test-playwright.git

 Depois, entre no repositório clonado e no diretório correspondente ao que quer testar. Logo após, insira os seguintes comandos no seu terminal para rodar:
> cd qa-test-playwright
Instala todas as dependências
> yarn install or npm install

# :arrows_counterclockwise: Como executar os testes?
Web:
> npx playwright test


Mobile:
-IOS: 
>npx playwright test --project="Mobile Safari"


-Android:    
>npx playwright test --project="Mobile Chrome"

## Visualização do relatório após a execução:
> npx playwright show-report


# Estrutura do Projeto

```tree
.
├── test-result/                <- Resultado testes 
├── tests/                      <- Testes
│   ├── .private-gherkin/       <- Pasta de Gherkins reais
│   │   └──bdd-teste.feautures  <- Casos de teste      
│   ├── gherkin/                <- Pasta de Gherkins de exemplo
│   │   └── exemplo.feautures   <- Exemplo para o projeto
│   └── pages/                  <- Testes de paginas
│       └── main.spec.ts        <- Pagina Principal
│       └── dicionario.spec.ts  <- Dicionarios A-Z
└── README.md                   <- Este arquivo
```

## Testes automatizados
Os testes automatizados estão na pasta `/tests`, escritos com Playwright.

## Documentação BDD
- Exemplos públicos de cenários em Gherkin estão na pasta `/gherkin`
- Cenários reais completos estão disponíveis apenas após o clone, na pasta `.private-gherkin/`

# O Projeto

 - Existem formas melhores de fazer a automação de testes, esse caso foi feito da forma mais "simples" para mostrar tanto os erros quanto os fluxos do site que estão funcionando
 - A abordade utilizando POM (Page Object Model) seria melhor em um projeto real.
