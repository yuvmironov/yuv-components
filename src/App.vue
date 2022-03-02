<template>
  <div id="Home" class="Components">
    <div class="Components-Block">
      <yuv-input id="asd" type="text" label="adasd" v-model="test"/>
    </div>
    <div class="Components-Block">
      <yuv-button
        :fun="testClick"
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
  </div>
  <yuv-notification/>
  <yuv-dialog ref="dialog">
    <template v-slot:body>
      Тело сообщения
    </template>
    <template v-slot:actions>
      <yuv-button
        name="Согласие"
        :fun="acceptDialog"
      />
      <yuv-button
        name="Отклонение"
        :fun="canceledDialog"
      />
    </template>
  </yuv-dialog>
  <router-view/>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const dialog = ref(null)
    const test = ref('')
    const testClick = () => {
      console.log('test click')
      test.value = ''
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

    return {
      dialog,
      test,
      testClick,
      successNoty,
      errNoty,
      openDialog,
      acceptDialog,
      canceledDialog
    }
  }
}
</script>

<style lang="stylus">
#Home
  padding 20px
.Components
  &-Block
    display flex
    justify-content space-between
    padding 10px 0
    border-bottom 1px solid var(--black-dark)
</style>
