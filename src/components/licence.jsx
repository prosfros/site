import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black p-4 text-center text-sm mt-auto">
      © {new Date().getFullYear()} Авто Мероприятия. Все права защищены.
    </footer>
  );
}
