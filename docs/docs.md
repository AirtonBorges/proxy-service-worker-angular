# Teste de front end angular com service worker e proxy

- Teste tem o intuito de descobrir se o proxy reverso de um service worker angular é capaz de não cachear as requisições http que passam pelo proxy do service worker

- Usada biblioteca http-server para realizar o teste
- Comando:
```powershell
http-server -c-1 --proxy
 "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
``` 
