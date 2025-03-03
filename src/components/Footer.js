export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!"); else
  // alert("Sorry we're closed")


  return (
    <footer className="footer">{new Date().toLocaleTimeString()}. We're currently open.</footer>
  );
}