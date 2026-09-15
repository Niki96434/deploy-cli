# deploy-cli - утилита для автоматического деплоя

## Описание

Консольная утилита, которая автоматически билдит проект, подключается к VPS и копирует папку с готовым билдом на сервер

## Кодстайл

- [.vscode/settings.json](https://github.com/Niki96434/deploy-cli/blob/main/.vscode/settings.json) - общие настройки
- [eslint.config.js](https://github.com/Niki96434/deploy-cli/blob/main/eslint.config.js) - линтер
- [.prettierrc](https://github.com/Niki96434/deploy-cli/blob/main/.prettierrc) - форматирование

## Быстрый старт:

### Запуск утилиты

#### Установка зависимостей

```
npm install
```

#### Сборка утилиты

```
npm run build
```

### Сборка вашего проекта (Node.js/SPA)

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

#### Что в себя включает подключение к серверу:

1. Вход на удаленный сервер по ssh.\n
   Нужны:\n

- имя пользователя удаленной машины.
- hostname(имя удаленной машины) или IP-адрес(сетевой идентификатор машины).
- приватный ключ

В папке /home/<username>/.ssh/ создаем конфиг для сервера:\n

```
mkdir .space-cli
cd .space-cli
touch config.json
```

Пример создания конфига находится в [config.example.json](https://github.com/Niki96434/deploy-cli/blob/main/config.example.json)

### Копировать билд проекта на сервер

```
orbit --deploy
```

или

```
orbit -d
```
