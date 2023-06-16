import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

async function* count(from: number, to: number) {
  for (let current = from; current <= to; current++) {
    await new Promise((res) => setTimeout(res, 1000));

    yield current;
  }
}

for await (let value of count(1, 5)) {
  console.log(value);
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
