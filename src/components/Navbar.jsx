const Navbar = ({ setPage }) => {
  return (
    <>
      <button onClick={() => setPage("planets")}>Planets</button>
      <button onClick={() => setPage("people")}>People</button>
    </>
  );
};
export default Navbar;
