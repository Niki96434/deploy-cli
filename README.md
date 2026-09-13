# deploy-cli - утилита для автоматического деплоя

## Описание

Консольная утилита, которая автоматически билдит проект, подключается к VPS и копирует папку с готовым билдом на сервер

## Кодстайл

- [.vscode/settings.json](https://github.com/Niki96434/deploy-cli/blob/main/.vscode/settings.json) - общие настройки
- [eslint.config.js](https://github.com/Niki96434/deploy-cli/blob/main/eslint.config.js) - линтер
- [.prettierrc](https://github.com/Niki96434/deploy-cli/blob/main/.prettierrc) - форматирование

## Быстрый старт:

### Сборка проекта

```
orbit --build
```

или

```
orbit -b
```

### Подключиться к серверу

```
orbit --connect
```

или

```
orbit -c
```

### Копировать билд проекта на сервер

```
orbit --deploy
```

или

```
orbit -d
```
