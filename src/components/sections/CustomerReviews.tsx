import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react';

const reviews = [
  {
    name: "Хуан Карлос Перес",
    date: "4 дня назад",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Vitacaps помог мне справиться с дискомфортом, который мешал активной жизни. Прекрасное средство с натуральным составом!",
    rating: 5,
  },
  {
    name: "Мария Хименес",
    date: "3 дня назад",
    image: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
    text: "С Vitacaps я смогла вернуться к привычной жизни. Теперь дискомфорт и боль в прошлом.",
    rating: 5,
  },
  {
    name: "Карлос Ортега",
    date: "6 дней назад",
    image: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
    text: "После долгих поисков нашел Vitacaps — препарат действительно работает! Очень рекомендую.",
    rating: 5,
  },
  {
    name: "Анна Лопес",
    date: "5 дней назад",
    image: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
    text: "Натуральный состав и отсутствие побочных эффектов для меня были важными факторами. Vitacaps справился на ура!",
    rating: 5,
  },
  {
    name: "Роберто Гонсалес",
    date: "3 дня назад",
    image: "https://sun9-16.userapi.com/impg/rtcikau-Vf6XMUxhadMB_iHa4ipNaNz9Mw4Aag/hyiIxSEGx9Y.jpg?size=1024x1024&quality=96&sign=a4ecce19a72d198b508c67650648d638&type=album",
    text: "Vitacaps помог справиться с проблемой за считаные недели. Огромное спасибо за это средство!",
    rating: 5,
  },
  {
    name: "Лусия Фуэнтес",
    date: "2 дня назад",
    image: "https://sun9-59.userapi.com/impg/zdKaEej6dQbeDSC3-U_wrS6T--h1bYCjDSknuw/a_psc-KavB0.jpg?size=736x736&quality=96&sign=cce26bae4d64e6b25625b4fbecf4bc00&type=album",
    text: "Уже после первой недели использования я заметила улучшения. Боль ушла, снова чувствую себя хорошо.",
    rating: 5,
  },
  {
    name: "Фелипе Варгас",
    date: "сегодня",
    image: "https://sun9-26.userapi.com/impg/LCBtdjBhJT97LiqnqstbYIdUIAa1DakjPQDCIg/CYkOLiuj33o.jpg?size=751x751&quality=96&sign=d3931cae661815c315fab4db6b1dc541&type=album",
    text: "Этот препарат изменил мою жизнь к лучшему. Забыл, что такое постоянный дискомфорт.",
    rating: 5,
  },
  {
    name: "Алехандро Диас",
    date: "2 дня назад",
    image: "https://sun9-80.userapi.com/impg/a7BShcyFj13BaTFekenzWkewzTRqKAXkQrmU1A/dVsKnwWJCBQ.jpg?size=751x751&quality=96&sign=1497ed830843afdc13b599661440bf93&type=album",
    text: "Vitacaps — это не просто облегчение, это возвращение к полноценной жизни. Спасибо!",
    rating: 5,
  },
  {
    name: "Кармен Рохас",
    date: "вчера",
    image: "https://sun9-16.userapi.com/impg/wusxaqDwqoroVjCKC0K7Ktow/2q5p-GfdW7g.jpg?size=1024x1024&quality=96&sign=9a4c0d5f2523173b34eacaea9cb3a219&type=album",
    text: "С Vitacaps я вернулась к активной жизни без боли и дискомфорта. Отличный продукт!",
    rating: 5,
  }
];


const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Отзывы клиентов</h2>
      <div className="flex flex-col items-center gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold flex items-center justify-center mb-2">
              <Check size={16} className="text-green-500 mr-2" /> {review.name}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{review.date}</p>
            <p className="text-gray-700">{review.text}</p>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < review.rating ? "text-yellow-500" : "text-gray-300"} // Закрашенные звезды
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
