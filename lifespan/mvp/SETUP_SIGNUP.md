# LifeSpan MVP — setup формы заявки

## Что уже подготовлено
- `apply.html` — страница формы;
- `form.css` — стили формы;
- `google-apps-script.gs` — обработчик `doPost(e)` для записи в Google Sheet;
- Google Sheet для заявок: `LifeSpan MVP — заявки на участие`.

## Что осталось сделать
### 1. Создать Apps Script проект
- Открой `script.google.com`.
- Создай новый проект.
- Вставь код из `google-apps-script.gs`.
- Сохрани проект.

### 2. Задеплоить как Web App
- `Deploy` → `New deployment`.
- Тип: `Web app`.
- Execute as: `Me`.
- Who has access: `Anyone`.
- Нажми `Deploy`.
- Скопируй URL веб-приложения.

## 3. Подключить endpoint в форме
Открой `lifespan/mvp/apply.html` и замени строку:

```js
const FORM_ENDPOINT = 'REPLACE_WITH_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
```

на реальный URL web app.

## 4. Ссылка для пользователей
После этого форма заработает по адресу:
- `lifespan/mvp/apply.html`

При желании затем можно добавить ссылку на неё из основного `lifespan/mvp/index.html`.
