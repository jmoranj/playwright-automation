# playright-automation

Automação com [Playwright](https://playwright.dev/) usando **Sauce Demo** ([saucedemo.com](https://www.saucedemo.com/)) como alvo: login e extração da lista de produtos (nome e preço) para `output/data.json`.

## Requisitos

- Node.js (LTS recomendado)

## Instalação

```bash
npm install
npx playwright install
```

## Configuração

Copie o exemplo do env:

```bash
cp .env.example .env
```


| Variável        | Descrição                                                |
| --------------- | -------------------------------------------------------- |
| `BASE_URL`      | Origem do Sauce Demo (ex.: `https://www.saucedemo.com`)  |
| `USER_NAME`     | Usuário de demonstração (ex.: `standard_user`)           |
| `USER_PASSWORD` | Senha (`secret_sauce` para os usuários listados no site) |


Para testar as falhas troque para valores de`USER_PASSWORD` ou `USER_NAME que vem no .env.example` .

## Execução

Headless (padrão):

```bash
npx playwright test
```

Relatório HTML após a execução:

```bash
npx playwright show-report
```

## Evidências de execução


| Artefato             | Onde fica                   | Como ver                                               |
| -------------------- | --------------------------- | ------------------------------------------------------ |
| Relatório HTML       | `playwright-report/`        | `npx playwright show-report`                           |
| Screenshots em falha | `test-results/` (por teste) | Gerados automaticamente se algum teste falhar          |
| Trace em falha       | `test-results/**/*.zip`     | `npx playwright show-trace test-results/.../trace.zip` |
| Dados extraídos      | `output/data.json`          | Após `tests/extractData.spec.ts` passar                |


## Saída

- `output/data.json` — array de `{ name, price }` dos itens do inventário (após login).

