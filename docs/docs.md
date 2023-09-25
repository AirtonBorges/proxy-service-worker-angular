# Teste de front end angular com service worker e proxy

- Teste tem o intuito de descobrir se o proxy reverso de um service worker angular é capaz de não cachear as requisições http que passam pelo proxy do service worker

- Usada biblioteca http-server para realizar o teste
- Comando:
```sql

  "dataGroups": [
    {
      "name": "default",
      "urls": [],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 0,
        "maxAge": "0u"
      }
    }
  ]
``` 
