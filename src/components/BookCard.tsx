import type { Book } from "@/types/book";
import { Link } from "react-router-dom";

interface Props {
  book: Book;
}

export const BookCard = ({ book }: Props) => {
  return (
    <article className="book-card bg-white rounded-lg shadow-md transition-all duration-300 
    hover:-translate-y-1 hover:shadow-xl">
      <div className="book-card__image-wrapper h-48 overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="
            book-card__image
            w-full h-full
            object-cover
          "
        />
      </div>

      <div className="book-card__content p-4">
        <h3 className="book-card__title text-lg font-semibold">
          {book.title}
        </h3>

        <p className="book-card__author text-sm text-gray-600">
          {book.author}
        </p>

        <Link
          to={`/books/${book.id}`}
          className="
            book-card__link
            inline-block mt-3 text-blue-600 hover:underline
          "
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
};