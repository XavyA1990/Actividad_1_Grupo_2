import { useParams, Link } from "react-router-dom";
import { booksMock } from "@/utils/books.mock";
import type { Book } from "@/types/book";

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();

  const book: Book | undefined = booksMock.find(
    (b) => b.id === Number(id)
  );

  if (!book) {
    return (
      <main className="book-detail container mx-auto px-4 py-8">
        <p className="book-detail__not-found text-center text-gray-500">
          Libro no encontrado
        </p>

        <Link
          to="/"
          className="book-detail__back text-blue-600 hover:underline block text-center mt-4"
        >
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="book-detail container mx-auto px-4 py-8">
      <Link
        to="/"
        className="book-detail__back text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Volver
      </Link>

      <section className="book-detail__card bg-white rounded-lg shadow-md overflow-hidden md:flex">
        <img
          src={book.image}
          alt={book.title}
          className="
            book-detail__image
            w-full md:w-1/3 h-80 object-cover
          "
        />

        <div className="book-detail__content p-6">
          <h1 className="book-detail__title text-2xl font-bold mb-2">
            {book.title}
          </h1>

          <h2 className="book-detail__author text-lg text-gray-600 mb-4">
            {book.author}
          </h2>

          <p className="book-detail__description text-gray-700 leading-relaxed">
            {book.description}
          </p>
        </div>
      </section>
      <footer className="home__footer mt-16 text-center text-sm text-gray-400">
        © 2025 Relatos de Papel — Proyecto académico
      </footer>'
    </main>
    
  );
};
export default BookDetail;