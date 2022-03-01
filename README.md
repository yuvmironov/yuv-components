# yuv-components
<b>Разработка производится для vue 3 и не гарантируется работа на более старой версии</b>

Пакет компонентов (проект находится в активной разработке 
и будет дополняться компонентами по мере возможности)

### Подключение 
в файле main.js
```js
import 'yuv-components/src/Styles/Variable.styl'
import 'yuv-components/src/Styles/ResetStyle.styl'
import 'yuv-components/src/Styles/yuv-font.styl'
import Components from 'yuv-components/src/components'

const app = createApp(App)

for (const key in Components) {
  app.component(key, Components[key])
}
```

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
Список иконок в файле шрифтовых иконок и использование в коде
```vue
<span class="icon icon-user-check"/>
```
 - .icon-alert
 - .icon-arrow-down
 - .icon-arrow-left
 - .icon-arrow-right
 - .icon-arrow-up
 - .icon-check
 - .icon-edit
 - .icon-list
 - .icon-log-in
 - .icon-log-out
 - .icon-minus
 - .icon-plus
 - .icon-repeat
 - .icon-save
 - .icon-trash
 - .icon-user-check
 - .icon-user-plus
 - .icon-x

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
Компонент input (со встроенной валидацией вводимых данных)

Валидация типа password производится по следующим параметрам:
 - должны присутствовать цифры
 - должны присутствовать большие буквы
 - должны присутствовать маленькие буквы
 - длинна пароля не менее 8 и не более 64 символов
 - все на английском языке

На данный момент времени реализована поддержка типов (text, password, email)

Параметры:
 - <b>type {String}</b> - Тип поля для ввода (по умолчанию text)
 - <b>id {String}</b> - id поля для ввода (обязательно)
 - <b>label {String}</b> - Label вводимого поля
 - <b>disabled {Boolean}</b> - идентификатор активного поля ввода (true / false)
 - <b>icon {String}</b> - Иконка для поля ввода
 - <b>errMessage {String}</b> - Сообщение об ошибочном вводе (не реализовано)

Использование в коде:
```vue
<yuv-input 
    id="id"
    type="text" 
    label="Label" 
    v-model="test"
/>
```
