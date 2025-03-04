export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;

  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!"); else
  // alert("Sorry we're closed")


  return (
    <footer className="footer">
      <p>
        We are {isOpen ? 'Open' : 'closed'}.
      </p>
    </footer>
  );
}