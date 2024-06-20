// utils/debounce.ts

let timeoutId: NodeJS.Timeout | null = null;

export const debounceToast = (callback: () => void, delay: number) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    callback();
    timeoutId = null;
  }, delay);
};
