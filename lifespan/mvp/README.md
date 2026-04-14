# LifeSpan MVP

Коммерческий лендинг для beta-версии сервиса `LifeSpan MVP`.

## Позиционирование
`LifeSpan MVP` — это не пилот и не внутренняя экспериментальная страница, а beta-услуга для людей, которым нужен внешний контур удержания режима.

## Роль MTLA Healthcare
MTLA Healthcare выступает как партнёр проекта: среда, экспертиза, health-контекст и точка доверия.

## Оффер
- бесплатный test drive;
- beta-доступ к услуге;
- для early adopters — приоритетный доступ к новым функциям и расширенная техподдержка в production-версии.

## Статус funnel
- Пользовательский контур замкнут: `index.html` → `apply.html` → Google Apps Script Web App → Google Sheet.
- Production endpoint Apps Script уже подключён в форме `apply.html`.
- Основные CTA на лендинге ведут на страницу заявки.

## Быстрый smoke test
1. Открой `index.html` и нажми CTA `Получить бесплатный test drive`.
2. Убедись, что переход идёт на `apply.html`.
3. Отправь тестовую заявку.
4. Проверь success-сообщение на форме и новую строку в Google Sheet.

## GitHub Pages-ready checklist
- Все ссылки внутри `lifespan/mvp/` используют относительные пути.
- В `apply.html` нет placeholder endpoint.
- Сценарий `landing → apply → submit` проходит без ошибок в браузере.

## Операционный runbook
- Где смотреть лиды: Google Sheet `LifeSpan MVP — заявки на участие`, лист `Sheet1`.
- Что делать после лида: первичный контакт в Telegram/Email и фиксация статуса обработки.
- Как обновлять Apps Script: правки в скрипте → `Deploy / New deployment (Web app)` → при новом URL обновить `FORM_ENDPOINT` в `apply.html`.

## Содержимое
- `index.html` — основная продающая страница;
- `apply.html` — страница формы заявки;
- `form.css` — стили формы;
- `styles.css` — стили лендинга;
- `google-apps-script.gs` — пример обработчика для записи в Google Sheet;
- `SETUP_SIGNUP.md` — пошаговый setup и операционные заметки.
