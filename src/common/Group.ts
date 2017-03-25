export default class Group {
  constructor(
    public name: string,
    public address: string,
    public manager: string,
    public parent_group: string,
    public contact: string,
    public phone: string,
    public email: string
  ) {}
}