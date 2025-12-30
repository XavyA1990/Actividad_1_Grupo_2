import { useState } from "react";
import { booksMock } from "@/utils/books.mock";
import { BookList } from "@/components/BookList";
import { SearchBar } from "@/components/SearchBar";

export const Home = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksMock.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

return (
  <>
    <header className="home__header mb-10">
      <div
        className="
          home__header
          bg-gradient-to-r from-gray-600 to-blue-500
          rounded-xl p-8 text-white
        "
      >
        <h1 className="home__title text-3xl font-bold mb-2">
          Relatos de Papel
        </h1>

        <p className="home__subtitle text-indigo-200 max-w-xxl">
          Explora historias que permanecen, descubre autores y encuentra tu próxima lectura.
        </p>
      </div>
    </header>

    <main className="home container mx-auto px-4 py-8">
      <SearchBar value={search} onChange={setSearch} />

      <BookList books={filteredBooks} />
    </main>
    <footer className="home__footer mt-16 text-center text-sm text-gray-400">
        © 2025 Relatos de Papel — Proyecto académico
    </footer>
  </>
);
};

export default Home;