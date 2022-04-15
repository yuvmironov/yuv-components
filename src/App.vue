<template>
  <div id="Home" class="Components">
    <div class="Components-Block">
      <yuv-input
        id="asd"
        err-message="Данное поле должно быть e-mail"
        type="email"
        label="E mail"
        v-model="testEmail"
      />
      <yuv-input
        id="text"
        err-message="В поле должен быть хоть один символ"
        type="text"
        label="Test text"
        v-model="testText"
      />
      <yuv-input
        id="password"
        err-message="Пароль не соответствует требованиям"
        type="password"
        label="Test password"
        v-model="testPassword"
      />
    </div>
    <div class="Components-Block" style="justify-content: flex-start">
      <yuv-button
        class="Components-Button"
        :fun="testClick"
      />
      <yuv-button
        class="Components-Button"
        type="outline"
        :fun="testClick"
      />
      <yuv-button
        class="Components-Button"
        type="text"
        :fun="testClick"
      />
      <yuv-button
        class="Components-Button"
        type="elevanted"
        :fun="testClick"
      />
      <yuv-button
        class="Components-Button"
        type="tonal"
        :fun="testClick"
      />
    </div>
    <div class="Components-Block" style="justify-content: flex-start">
      <yuv-icon-button
        class="Components-Button"
        :fun="testClick"
        icon="x"
        type="Surface"
      />
      <yuv-icon-button
        class="Components-Button"
        :fun="testClick"
        icon="x"
        type="Primary"
      />
      <yuv-icon-button
        class="Components-Button"
        :fun="testClick"
        icon="x"
        type="Secondary"
      />
      <yuv-icon-button
        class="Components-Button"
        :fun="testClick"
        icon="x"
        type="Tetriary"
      />
    </div>
    <div class="Components-Block">
      <yuv-button
        left-icon="check"
        name="Удачная нотификация"
        :fun="successNoty"
      />
      <yuv-button
        name="Не удачная нотификация"
        type="danger"
        :fun="errNoty"
      />
    </div>
    <div class="Components-Block">
      <yuv-button
        name="Открыть диалог"
        :fun="openDialog"
      />
    </div>
    <div class="Components-Block">
      <yuv-select
        id="select"
        label="Выберете цвет"
        v-model="selectValue"
        :options="
          [
            {
              id: '#ff8080',
              name: 'Красный'
            },
            {
              id: '#f2c94c',
              name: 'Оранжевый'
            },
            {
              id: '#27ae60',
              name: 'Зеленый'
            }
          ]
         "
      />
    </div>
    <div class="Components-Block">
      <yuv-textarea id="asd" label="adasd" v-model="testTextArea"/>
    </div>
  </div>
  <yuv-notification/>
  <yuv-dialog ref="dialog"
    header="Заголовок диалогового окна"
    body="Сообщение для реагирования пользователем"
  >
    <template v-slot:actions>
      <yuv-button
        class="DialogButton"
        label="Согласие"
        type="text"
        :fun="acceptDialog"
      />
      <yuv-button
        class="DialogButton"
        label="Отклонение"
        type="text"
        :fun="canceledDialog"
      />
    </template>
  </yuv-dialog>
  <yuv-global-loader/>
  <router-view/>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const dialog = ref(null)
    const testEmail = ref('')
    const testPassword = ref('')
    const testText = ref('')
    const testTextArea = ref('')
    const testClick = () => {
      console.log('test click')
      testEmail.value = ''
    }
    const successNoty = () => {
      store.commit('SetNotification', {
        header: 'Успех',
        body: 'Описание успешной нотификации',
        flag: true,
        status: 'success',
        duration: 5000
      })
    }
    const errNoty = () => {
      store.commit('SetNotification', {
        header: 'Ошибка',
        body: 'Описание ошибки или сообщение о неудаче действия',
        flag: true,
        status: 'error',
        duration: 5000
      })
    }
    const openDialog = () => {
      dialog.value.onOpen()
    }
    const acceptDialog = () => {
      console.log('Согласие')
      dialog.value.onClose()
    }
    const canceledDialog = () => {
      console.log('Отклонение')
      dialog.value.onClose()
    }

    const selectValue = ref('')

    return {
      dialog,
      testEmail,
      testText,
      testPassword,
      testTextArea,
      testClick,
      successNoty,
      errNoty,
      openDialog,
      acceptDialog,
      canceledDialog,
      selectValue
    }
  }
}
</script>

<style lang="stylus">
#Home
  padding 20px
.DialogButton:not(:last-child)
  margin-right 8px
.Components
  &-Button
    margin-right 10px
  &-Block
    display flex
    justify-content space-between
    padding 10px 0
    border-bottom 1px solid var(--black-dark)
</style>
