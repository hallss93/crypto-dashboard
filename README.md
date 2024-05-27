# Dashboard de Monitoramento de Criptomoedas

Este é um dashboard web desenvolvido em ReactJS que se conecta à API da Binance para monitorar e exibir em tempo real o último preço e a flutuação percentual dos preços de criptomoedas específicas desde que o dashboard foi aberto.

## Configuração

1. **Clonar o Repositório**: Clone este repositório para o seu ambiente local usando o seguinte comando:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. **Instalar Dependências**: Navegue até o diretório do projeto e instale as dependências usando npm ou yarn:

    ```bash
    cd nome-do-repositorio
    npm install
    # ou
    yarn install
    ```

3. **Configurar Variáveis de Ambiente (Opcional)**: Se necessário, configure variáveis de ambiente para a conexão com a API da Binance. Você pode criar um arquivo `.env` na raiz do projeto e definir as variáveis necessárias.

    ```plaintext
    REACT_APP_BINANCE_API_KEY=SuaChaveDeAPI
    REACT_APP_BINANCE_API_SECRET=SeuSegredoDeAPI
    ```

## Execução

Após instalar as dependências e configurar as variáveis de ambiente, você pode executar o projeto da seguinte maneira:

1. **Desenvolvimento**: Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

    ```bash
    npm start
    # ou
    yarn start
    ```

    Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o projeto em seu navegador padrão.

2. **Produção**: Para construir o projeto para produção, execute o seguinte comando:

    ```bash
    npm run build
    # ou
    yarn build
    ```

    Isso criará uma versão otimizada do projeto na pasta `build`, que pode ser implantada em um servidor web.

## Como Usar

Após iniciar o projeto, você poderá visualizar o dashboard no seu navegador. O dashboard exibirá o último preço em USDT e a flutuação percentual dos preços das criptomoedas Bitcoin (BTC), Ethereum (ETH), Solana (SOL) e Dogecoin (DOGE).

## Contribuindo

Se deseja contribuir com este projeto, por favor, siga estas etapas:

1. Faça um Fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adicionando nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
