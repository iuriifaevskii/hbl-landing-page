import { Ref } from "vue";

export function useModal() {
  const isOpened: Ref<boolean> = ref(false);

  const setIsOpened = (value: boolean) => {
    isOpened.value = value;
  };
  return { isOpened, setIsOpened };
}
