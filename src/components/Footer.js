export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ?
          <p>We're open until {closeHour}:00PM. Come visit us or order online!</p> :
          <p>We're closed. We will open at {openHour}:00AM. Be sure to come visit us or order online!</p>
        }
      </div>
    </footer>
  );
}