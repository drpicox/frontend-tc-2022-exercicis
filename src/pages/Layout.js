import { Outlet, Link } from "react-router-dom";
import llista from "./llista";

export default function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {llista.map((item) => (
              <li>
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>by David Rodenas</footer>
    </>
  );
}
