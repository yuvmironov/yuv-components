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
    /* Color styles */
    --black-dark: #333333;
    --black-default: #4F4F4F;
    --black-light: #828282;
    --black-lighter: #BDBDBD;
    --red-dark: #FF0000;
    --red-default: #EB5757;
    --red-light: #E18080;
    --orange: #F2994A;
    --yellow: #F2C94C;
    --green-dark: #219653;
    --green-default: #27AE60;
    --green-light: #6FCF97;
    --blue-dark: #2F80ED;
    --blue-default: #2D9CDB;
    --blue-light: #56CCF2;
    --white-default: #FFFFFF;
    --white-dark: #F8F8F8;
    --white-darker: #EEEEEE;
    --blak-transparent: rgba(0, 0, 0, 0.4);
    --body-large: 16px;
    --body-medium: 14px;
    --bod-small: 12px;

    --label-large: 14px;
    --label-medium: 12px;
    --label-small: 11px;

    --title-large: 22px;
    --title-medium: 16px;
    --title-small: 14px;

    --headline-large: 32px;
    --headline-medium: 28px;
    --headline-small: 24px;

    --display-large: 57px;
    --display-medium: 45px;
    --display-small: 36px;
    }

/* Font size */
body[data-theme='brand'] {
    --primary: #6750A4;
    --primary_opaciti_08: rgba(103, 80, 164, 0.8);
    --primary_opaciti_008: rgba(103, 80, 164, 0.08); 
    --primary_opaciti_005: rgba(103, 80, 164, 0.05);
    --primary_opaciti_012: rgba(103, 80, 164, 0.12);    
    --on-primary: #FFFFFF;
    --promary-container: #EADDFF;
    --on-primary-container: #21005D;
    --secondary: #625B71;
    --on-secondary: #FFFFFF;
    --secondary-container: #E8DEF8;
    --on-secondary-container: #1D192B;
    --tertiary: #7D5260;
    --on-tertiary: #FFFFFF;
    --tertiary-container: #FFD8E4;
    --on-tertiary-container: #31111D;
    --error: #B3261E;
    --on-error: #FFFFFF;
    --error-container: #F9DEDC;
    --on-error-container: #410E0B;
    --background: #FFFBFE;
    --on-backgroud: #1C1B1F;
    --surface: #FFFBFE;
    --on-surface: #1C1B1F;
    --surface-variant: #FFFBFE;
    --on-surface-variant: #49454F;
    --outline: #79747E;
}
body[data-theme='dark'] {
    --primary: #D0BCFF;
    --primary_opaciti_08: rgba(103, 80, 164, 0.8);
    --primary_opaciti_008: rgba(103, 80, 164, 0.08);
    --primary_opaciti_005: rgba(103, 80, 164, 0.05);
    --primary_opaciti_012: rgba(103, 80, 164, 0.12);
    --on-primary: #381E72;
    --promary-container: #4F378B;
    --on-primary-container: #EADDFF;
    --secondary: #CCC2DC;
    --on-secondary: #332D41;
    --secondary-container: #4A4458;
    --on-secondary-container: #E8DEF8;
    --tertiary: #EFB8C8;
    --on-tertiary: #492532;
    --tertiary-container: #633B48;
    --on-tertiary-container: #FFD8E4;
    --error: #F2B8B5;
    --on-error: #601410;
    --error-container: #8C1D18;
    --on-error-container: #F9DEDC;
    --background: #1C1B1F;
    --on-backgroud: #E6E1E5;
    --surface: #1C1B1F;
    --on-surface: #E6E1E5;
    --surface-variant: #49454F;
    --on-surface-variant: #CAC4D0;
    --outline: #938F99;
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
 - <b>size {String}</b> - Размер [S, M, L]
 - <b>label {String}</b> - Имя кнопки
 - <b>leftIcon {String}</b> - Левая иконка (класс иконки из пакета шрифтовых иконок)
 - <b>rightIcon {String}</b> - Правая иконка (класс иконки из пакета шрифтовых иконок)
 - <b>type {String}</b> - Цветовая схема [field, outline, text, elevanted, tonal]
 - <b>fun {Function}</b> - Функция выполняемая по нажатию

Использование в коде
```vue
<yuv-button
    size="M"
    label="Кнопка"
    leftIcon="icon-arrow-left"
    rightIcon="icon-arrow-right"
    type="base"
    :fun="testClick"
/>
```

### yuv-icon-button
Компонент иконочной кнопки

Параметры
- <b>size {String}</b> - Размер [S, M, L] (в разработке)
- <b>icon {String}</b> - Название иконки из списка выше (без icon-)
- <b>type {String}</b> - Цветовая схема [Surface, Primary, Secondary, Tetriary]
- <b>fun {Function}</b> - Функция выполняемая по нажатию

Использование в коде
```vue
<yuv-icon-button
    class="Components-Button"
    :fun="testClick"
    icon="x"
    type="Primary"
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
 - <b>errMessage {String}</b> - Сообщение об ошибке ввода для пользователя

Использование в коде:
```vue
<yuv-input 
    id="id"
    type="text" 
    label="Label" 
    v-model="test"
/>
```

### yuv-notification
Компонент для вывода информационных сообщений

Использует store (vuex). Можно закрыть кликом по сообщению. 

Дополнительное подключение:
```js
// В файле store (index.js)
import Notification from 'yuv-components/src/store/Notification'

modules: {
  Notification
}
```
В файле App.vue
```vue
<yuv-notification/>
```

Вызов сообщения производиться следующим образом:
```js
store.commit('SetNotification', {
  header: 'Ошибка ввода данных',
  body: 'Не все поля ввода заполнены корректно',
  flag: true,
  status: 'error',
  duration: 5000
})
```

Параметры:
 - <b>header</b> - Заголовок сообщения
 - <b>body</b> - Тело сообщения
 - <b>flag</b> - флаг на открытие (true - открыть, false - закрыть)
 - <b>status</b> - ошибка или успех (error или success)
 - <b>duration</b> - задержка перед закрытием (0 - не закрывать автоматически)
 
### yuv-global-loader
Компонент loader закрывающий доступ ко всему контенту

Дополнительное подключение 
```js
// в файле store (index.js)
import GlobalLoader from 'yuv-components/src/store/GlobalLoader'

modules: {
  GlobalLoader
}
```
В файле App.vue
```vue
<yuv-global-loader/>
```
Для показа и скрытия использовать мутацию SetGloaderFlag со значением true или false


### yuv-textarea
Компонент textarea

Параметры:
- <b>id {String}</b> - id поля для ввода (обязательно)
- <b>label {String}</b> - Label вводимого поля
- <b>disabled {Boolean}</b> - идентификатор активного поля ввода (true / false)
- <b>icon {String}</b> - Иконка для поля ввода (Не реализовано)
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
