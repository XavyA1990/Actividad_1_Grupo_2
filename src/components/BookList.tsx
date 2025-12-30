import type { Book } from "@/types/book";
import { BookCard } from "./BookCard";

interface Props {
  books: Book[];
}

export const BookList = ({ books }: Props) => {
  if (books.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No se encontraron libros
      </p>
    );
  }

  return (
    <section className="book-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};