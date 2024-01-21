import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <>
      <h2>Planets</h2>

      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>loading data...</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </>
  );
};

export default Planets;
