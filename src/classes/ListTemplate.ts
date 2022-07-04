import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(
    item: HasFormatter,
    heading: string,
    position: "start" | "end",
  ){
    const li = document.createElement("li")
    const head = document.createElement("h4")
    head.innerText = heading
    li.append(head)

    const p = document.createElement("p")
    p.innerText = item.format()
    li.append(p)

    if(position === "start") {
      this.container.prepend(li)
    } else {
      this.container.append(li)
    }
  }
}