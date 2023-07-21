import { toggleBackground } from "./toggleBackground.js";

export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    // Não permite a página ir atrás do href quando os links forem clicados
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    // Busca o pathname da página que estamos
    const { pathname } = window.location;
    const route = this.routes[pathname];

    // Depois de receber a rota do routes vai atrás dos dados da rota capturando o html atráves do .text()
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("page-content").innerHTML = html;
        toggleBackground(html);
      });
  }
}
