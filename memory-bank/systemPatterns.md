# System Patterns

Этот файл документирует архитектурные и кодовые паттерны, используемые в проекте.
2026-05-13 00:11:00 - Последняя редакция базового описания.

## Правила редактирования

* Записи в разделах должны быть отсортированы в обратном хронологическом порядке.
* Каждая запись должна начинаться с даты редакции в формате ГГГГ-ММ-ДД ЧЧ:ММ:СС.
2026-05-13 00:11:00 - Последняя редакция правил редактирования.

## CSS-переменные (Design System)

2026-05-12 15:40:00 - Задокументирована полная таблица переменных из circle/styles.css:

| Переменная | Значение | Назначение |
|---|---|---|
| `--bg` | `#08111f` | Основной фон страницы |
| `--bg-alt` | `#0d1728` | Альтернативный фон (section-alt) |
| `--surface` | `rgba(255,255,255,0.08)` | Фон карточек |
| `--surface-strong` | `rgba(255,255,255,0.12)` | Более контрастные поверхности |
| `--text` | `#e5eefc` | Основной текст |
| `--muted` | `#a6b6d4` | Приглушённый текст |
| `--line` | `rgba(255,255,255,0.12)` | Цвет границ |
| `--primary` | `#69e2c2` | Основной accent (бирюзовый) |
| `--primary-strong` | `#35c8a2` | Усиленный primary |
| `--secondary` | `#8cb4ff` | Вторичный accent (голубой) |
| `--shadow` | `0 20px 60px rgba(0,0,0,0.28)` | Основная тень |
| `--radius` | `24px` | Border-radius карточек |
| `--radius-sm` | `16px` | Border-radius метрик |
| `--container` | `1160px` | Ширина контейнера |

**Дополнительные элементы:**
- `--bg-glow-1`: `rgba(105,226,194,0.24)` — зелёный glow (top-left)
- `--bg-glow-2`: `rgba(140,180,255,0.18)` — голубой glow (right)

## Повторяющиеся HTML-структуры

2026-05-12 15:47:18 - Документированы общие классы и структуры:

**Hero-секция:**
```html
<section class="hero section">
  <div class="hero-grid">
    <div class="hero-copy">
      <!-- text, actions, points -->
    </div>
    <div class="hero-card card soft-shadow">
      <!-- metric-grid with 4 items -->
    </div>
  </div>
</section>
```

**Карточка пилота:**
```html
<article class="card accent-card pilot-card">
  <div class="pilot-card-content">
    <div class="badge">...</div>
    <h3>Название</h3>
    <p>Описание</p>
    <ul class="check-list compact">...</ul>
    <div class="touch-meter"><!-- 4 bars --></div>
  </div>
  <a href="./apply.html" class="button button-primary">...</a>
</article>
```

**Форма заявки:**
```html
<form id="signup-form" class="form-grid" method="post" action="[Google Apps Script endpoint]">
  <div class="form-field">
    <label class="form-label">Имя</label>
    <input class="form-input" />
  </div>
  <!-- fields for Telegram, Email, etc. -->
  <input type="hidden" name="source" value="lifespan-[Pilot]-apply-page" />
  <button class="button button-primary" type="submit">Отправить</button>
</form>
```

## Навигационные паттерны

2026-05-12 22:57:00 - Описана трёхуровневая навигация:

1. **Уровень 1: Сводная страница** (`lifespan/index.html`)
   - Header навигация: `#overview`, `#pilots`, `#compare`, `#faq`
   - Карточки пилотов → `./pilot/`
   - CTA-блок → `./pilot/apply.html`

2. **Уровень 2: Страница пилота** (`./pilot/index.html`)
   - Header навигация: специфична для пилота
   - Hero-кнопка CTA → `./apply.html`
   - Footer ссылки → `../` (назад на сводную)

3. **Уровень 3: Форма заявки** (`./pilot/apply.html`)
   - Header ссылка на `./index.html` (назад к пилоту)
   - Form отправляется в Google Sheet
   - JavaScript обработчик: disable button + "Отправляем..."

## Responsive Breakpoints

2026-05-12 15:47:18 - Задокументированы основные breakpoints:

- **960px:** Grid collapse (hero-grid, 2-column, 3-up → 1fr)
- **640px:** Дополнительное сжатие (padding, button-width: 100%)
- **Form-specific:** grid-template-columns: 1fr на 720px

##색 Badge Классы

2026-05-12 15:40:00 - Для визуального разделения пилотов на сводной странице:

- `.badge-soft`: `rgba(105,226,194,0.14)` + `var(--primary)` — Circle
- `.badge-commit`: `rgba(140,180,255,0.16)` + `var(--secondary)` — Operator
- `.badge-advisor`: `rgba(140,180,255,0.16)` + `var(--secondary)` — Advisor
- Custom badge на карточках MVP и Operator

## Touch-Meter (визуальный индикатор интенсивности)

2026-05-12 22:44:07 - На каждой карточке пилота есть `.touch-meter`:

```html
<div class="touch-meter">
  <span class="touch-meter-bar active"></span>
  <span class="touch-meter-bar active-secondary"></span>
  <span class="touch-meter-bar"></span>
  <span class="touch-meter-bar"></span>
</div>
```

- Advisor: 1/4 active (low-touch)
- Circle: 2/4 active (medium)
- MVP: 3/4 active (high)
- Operator: 4/4 active (very high)
