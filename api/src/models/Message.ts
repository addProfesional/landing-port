export type Message = {
  id: number,
  title: string,
  msj: string,
  type: 'contact' | 'request_github' | 'request_cv',
  emailRequester: string,
  createdAt: string,
  company: string,
  phone: string,
  country: string,
  state: string,
  name: string
};