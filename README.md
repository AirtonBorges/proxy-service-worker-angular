# Teste de front end angular com service worker e proxy

- Teste tem o intuito de descobrir se o proxy reverso de um service worker angular é capaz de não cachear as requisições http que passam pelo proxy do service worker

## Passos:
- Dar git clone nesse repositório ou abrir um codespaces

- Após isso, rodar ng build, recomendado usar o watch
```powershell 
ng build --watch
```

- após isso, em outra aba do terminal, no diretório raiz do projeto:
```powershell
cd dist/proxy-service-worker
```

- então:
```powershell
http-server -c-1 --proxy
 "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
``` 

- Editar o versao.ts, e salvar
    - É feito o build, o service worker obtém a nova versão
    - A página é atualizada automáticamente
    - Um novo número aleatório é obtido