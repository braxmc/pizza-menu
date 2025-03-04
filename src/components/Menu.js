import Pizza from "./Pizza";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        <Pizza />
      </ul>
    </main>
  );
}