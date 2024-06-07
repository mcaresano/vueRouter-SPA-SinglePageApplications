import {
  onMounted,
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup 1*');

    const counter = ref(0)

    onMounted(() => {
      console.log('onMounted 1*');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted *');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount 1*');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount *');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked * Solo en dev, cuando hay alguna dependencia');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated * Aparece con el KeepAlive');
    });
    onDeactivated(() => {
      console.log('onDeactivated * Desactiva el componente cuando cambio de link, se usa este porque no se desmonta el componente' );
    });
    return {
      counter
    }
  },
});
