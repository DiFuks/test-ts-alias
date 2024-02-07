### Описание способа:

- Используются [нативные алиасы](https://habr.com/ru/articles/738132/) для путей из nodejs на уровне package.json

### Плюсы:

- Можно использовать одинаковые алиасы путей в рамках каждого воркспейса
- Нет привязки к tsconfig или webpack
- TM ничего не должен знать об алиасах внутри frontendReact
- Алиасы при импорте frontendReact из TM работают корректно
- Символ `#` у меня больше ассоциируется с чем-то внутренним, чем `@` или `~`

### Минусы:

- Нужно начинать все алиасы с `#` - это официальная конвенция nodejs
- Для более корректной работы автоимпортов, нужно всё-таки продублировать алиас в tsconfig.json
