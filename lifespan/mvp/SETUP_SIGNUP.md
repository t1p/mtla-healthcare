# LifeSpan MVP — setup формы заявки

## Что уже подготовлено
- `apply.html` — страница формы;
- `form.css` — стили формы;
- `google-apps-script.gs` — обработчик `doPost(e)` для записи в Google Sheet;
- Google Sheet для заявок: `LifeSpan MVP — заявки на участие`.
- Production endpoint уже подключён в `apply.html`:

```text
https://script.google.com/macros/s/AKfycbwAkrjQ-R3ThtjJBSydJ2RvMSm46JI3nayySICohUKyyux_S37fkkoroAJu6bqjWKPg5g/exec
```

## Как поддерживать в рабочем состоянии

### 1. Проверка, куда падают заявки
- Открой Google Sheet `LifeSpan MVP — заявки на участие`.
- Новые заявки должны появляться в `Sheet1`.
- Поля приходят в следующем порядке: дата, имя, Telegram, email, город/страна, ответы анкеты, source, user_agent.

### 2. Что делать после нового лида
- Проверь контакт (Telegram в приоритете, затем Email).
- Отправь первичное сообщение по beta/test drive сценарию.
- Зафиксируй статус лида в соседней колонке в той же таблице (например: `new`, `contacted`, `scheduled`, `declined`).

### 3. Как перепубликовать Apps Script при изменениях
- Открой `script.google.com`.
- Внеси изменения в код (например, по образцу из `google-apps-script.gs`).
- `Deploy` → `New deployment`.
- Тип: `Web app`.
- Execute as: `Me`.
- Who has access: `Anyone`.
- Нажми `Deploy`.
- Если Google выдаст новый URL web app, обнови `FORM_ENDPOINT` в `lifespan/mvp/apply.html`.

## Smoke test (минимум перед beta-трафиком)
1. Открой `lifespan/mvp/index.html`.
2. Нажми hero CTA `Получить бесплатный test drive` — должен открыться `./apply.html`.
3. Заполни форму тестовыми данными и отправь.
4. На странице должен появиться success-статус с текстом про следующий шаг.
5. В Google Sheet должна появиться новая строка с данными заявки.
6. Повторная отправка той же формы в текущем сеансе должна быть заблокирована.

## GitHub Pages-ready проверка
- Все CTA в `lifespan/mvp/index.html` ведут на относительные ссылки (`./apply.html` или якоря), без локальных путей.
- Форма в `lifespan/mvp/apply.html` использует production endpoint и не содержит плейсхолдера.
- После деплоя Pages проверить сценарий полностью: `landing → apply → submit → Google Sheet row created`.
