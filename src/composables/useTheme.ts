import { useDark, useToggle } from '@vueuse/core'

export function useTheme() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class', 
    storageKey: 'theme-preference', // se guarda en localStorage
    valueDark: 'dark',
    valueLight: '',
  })

  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
}
