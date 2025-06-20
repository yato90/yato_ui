<template>
  <button
    :class="[
      'my-button',
      primary ? 'my-button--primary' : 'my-button--secondary'
    ]"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: 'Button' },
  primary: { type: Boolean, default: false },
  alertMessage: { type: String, default: '' },
});

const emit = defineEmits(['click']);

function onClick() {
  if (props.alertMessage) {
    alert(props.alertMessage); // 🆕 показ alert, если задано сообщение
  }
  emit('click');
}
</script>

<style>
.my-button {
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.my-button--primary {
  background-color: #1e90ff;
  color: white;
}

.my-button--secondary {
  background-color: #e0e0e0;
  color: black;
}
</style>
