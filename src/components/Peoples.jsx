import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  return res.json();
};

const Peoples = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);
  return (
    <>
      <h2>People</h2>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>loading data...</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </>
  );
};

export default Peoples;
