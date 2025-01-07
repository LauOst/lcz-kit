declare module 'lcz-kit' {
  import { Ref } from 'vue'

  // useStorage
  export function useStorage<T>(key: string, initialValue: T): [Ref<T>, (value: T) => void]

  // useDate
  export interface DateHookResult {
    formattedDate: string
    isToday: boolean
  }
  export function useDate(date: Date): DateHookResult

  // Add other type declarations as needed
}
