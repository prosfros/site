import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const features = [
    {
      title: "Создание мероприятий",
      desc: "Создайте встречу, укажите город, дату и описание — и дайте старт новому событию в пару шагов.",
    },
    {
      title: "Регистрация автомобилей",
      desc: "Участники добавляют авто и подают заявки за секунды, без лишней бюрократии и ожиданий.",
    },
    {
      title: "Управление заявками",
      desc: "Организаторы получают заявки, просматривают карточки участников и принимают решения мгновенно.",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 bg-gradient-to-b from-blue-50 to-white py-20"
    >
      {/* Верхний блок */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: -30 }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <h1
          className="
            block
            font-extrabold
            italic
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-yellow-400
            via-pink-500
            to-purple-600
            leading-normal
            pb-1
            relative
            z-10
            text-6xl
            text-center 
            px-4
          "
        >
          Автомероприятия с Telegram-ботом
        </h1>
        <p className="mt-7 text-lg max-w-2xl mx-auto text-gray-800">
          Создавайте уникальные события, объединяйте автолюбителей и управляйте встречами — всё прямо из Telegram.
        </p>
        <a
          href="https://t.me/your_autobot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Перейти в бота
        </a>
      </motion.div>

      {/* Добро пожаловать */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="relative rounded-2xl p-[2px] overflow-hidden animate-border">
          <div className="absolute inset-0 z-0 bg-[conic-gradient(from_180deg_at_50%_50%,#FF6B6B,#FFD93D,#6BCB77,#4D96FF,#FF6B6B)] animate-spin-slow blur-sm"></div>
          <div className="relative z-10 bg-white text-black rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Добро пожаловать!</h2>
            <p className="text-gray-700 text-center">
              Наш Telegram-бот поможет вам легко создавать мероприятия, регистрировать автомобили и управлять заявками. Всё просто, удобно и интуитивно понятно.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Карточки */}
      <div className="mb-10 w-full max-w-6xl px-4 flex flex-col md:flex-row justify-center gap-6">
        {features.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3"
          >
            <h3 className="text-lg font-bold text-blue-800 mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="h-[30px]" />
    </section>
  );
}
