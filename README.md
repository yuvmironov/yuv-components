# yuv-components
Пакет компонентов

### color
Цвета используемые в пакете
```css
:root {
    --black-dark: rgba(51, 51, 51, 1);
    --black-default: rgba(79, 79, 79, 1);
    --black-light: rgba(130, 130, 130, 1);
    --black-lighter: rgba(189, 189, 189, 1);
    --red-dark: rgba(255, 0, 0, 1);
    --red-default: rgba(235, 87, 87, 1);
    --red-light: rgba(225, 128, 128, 1);
    --orange: rgba(242, 153, 74, 1);
    --yellow: rgba(242, 201, 76, 1);
    --green-dark: rgba(33, 150, 83, 1);
    --green-default: rgba(39, 174, 96, 1);
    --green-light: rgba(111, 207, 151, 1);
    --blue-dark: rgba(47, 128, 237, 1);
    --blue-default: rgba(45, 156, 219, 1);
    --blue-light: rgba(86, 204, 242, 1);
    --white-default: rgba(255, 255, 255, 1);
    --white-dark: rgba(248, 248, 248, 1);
    --white-darker: rgba(238, 238, 238, 1);
}
```

### icons
Список иконок в файле шрифтовых иконок

```text
.icon-alert
.icon-arrow-down
.icon-arrow-left
.icon-arrow-right
.icon-arrow-up
.icon-check
.icon-edit
.icon-list
.icon-log-in
.icon-log-out
.icon-minus
.icon-plus
.icon-repeat
.icon-save
.icon-trash
.icon-user-check
.icon-user-plus
.icon-x
```

### yuv-button
Компонент кнопка

Параметры
 - <b>size {String}</b> - размер (S, M)
 - <b>name {String}</b> - имя кнопки
 - <b>leftIcon {String}</b> - левая иконка (класс иконки из пакета шрифтовых иконок)
 - <b>rightIcon {String}</b> - правая иконка (класс иконки из пакета шрифтовых иконок)
 - <b>type {String}</b> - цветовая схема
 - <b>fun {Function}</b> - функция выполняемая по нажатию

Использование в коде
```vue
<yuv-button
    size="M"
    name="Кнопка"
    leftIcon="icon-arrow-left"
    rightIcon="icon-arrow-right"
    type="base"
    :fun="testClick"
/>
```

### yuv-input
