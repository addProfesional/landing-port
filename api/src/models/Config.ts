export type Config = {
  lang: string,
  theme: string
  users: 'admin' | 'public',
  showMode: 'static' | 'dynamic',
  enableContactForm: boolean,
  contexts: {name: string, enable: boolean}[],
  providers: {name: string, enable: boolean}[]
};