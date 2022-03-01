# yuv-components
Пакет компонентов

###color
Цвета используемые в пакете
```css
:root {
    --gray---darker: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #C2C9D1;
    --gray---dark: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #C2C9D1;
    --gray---default: rgba(194, 201, 209, 1);
    --gray---light: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #C2C9D1;
    --gray---lighter: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #C2C9D1;
    --black---default: rgba(0, 0, 0, 1);
    --black---light: rgba(0, 0, 0, 0.5);
    --black---lighter: rgba(0, 0, 0, 0.25);
    --white---default: rgba(255, 255, 255, 1);
    --white---light: rgba(255, 255, 255, 0.7);
    --white---lighter: rgba(255, 255, 255, 0.5);
    --primary---darker: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #3E66FB;
    --primary---dark: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #3E66FB;
    --primary---default: rgba(62, 102, 251, 1);
    --primary---light: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #3E66FB;
    --primary---lighter: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #3E66FB;
    --error---darker: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #F03738;
    --error---dark: linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #F03738;
    --error---default: rgba(240, 55, 56, 1);
    --error---light: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #F03738;
    --error---lighter: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), #F03738;
}
```

###yuv-button
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
