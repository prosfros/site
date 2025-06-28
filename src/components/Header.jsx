import { Link } from 'react-scroll';

export default function Header() {
  const navItems = [
    { label: 'Главная', to: 'home' },
    { label: 'Инструкция', to: 'help' }, // to='end' - для удобства
    { label: 'Помощь', to: '' },
  ];

  // Функция скролла в низ страницы
  const scrollToEnd = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end gap-4">
        {navItems.map((item) =>
          item.label === 'Инструкция' ? (
            <button
              key={item.to}
              onClick={scrollToEnd}
              className="cursor-pointer px-4 py-2 rounded-lg border border-transparent hover:border-white hover:bg-white/10 transition-all bg-transparent text-white"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-window.innerHeight / 2 + 200}
              className="cursor-pointer px-4 py-2 rounded-lg border border-transparent hover:border-white hover:bg-white/10 transition-all"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </header>
  );
}
