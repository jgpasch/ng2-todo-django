export default class Todo {
  constructor(
    public title: string,
    public note: string,
    public owner: string,
    public number?: number,
    public completed?: boolean,
    public id?: number
  ) {}
}