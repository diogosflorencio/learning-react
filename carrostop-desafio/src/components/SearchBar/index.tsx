import './styles.css';

export default function SearchBar() {
  return (
    <>
      <div className="search-bar-containter">
            <form action="POST">
                <input type="text" placeholder="Digite sua busca" />
                <button type="submit">BUSCAR</button>
            </form>
      </div>
    </>
  );
}
