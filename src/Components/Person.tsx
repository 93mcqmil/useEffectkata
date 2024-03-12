import { useEffect, useState } from "react";

type SWPerson = {
  name: string;
  eye_color: string;
  birth_year: string;
  gender: string;
};

const Person = () => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const url = "https://swapi.py4e.com/api/people/1/";
    const fetchLuke = async () => {
      const result = await fetch(url); // result kan heta respons
      const luke = await result.json(); // luke kan heta data
      if (!ignore) {
        setPerson({
          name: luke.name,
          eye_color: luke.eye_color,
          birth_year: luke.birth_year,
          gender: luke.gender,
        });
      }
    };
    // Flagga för att ignorera API-svaret om komponenten tas bort innan svaret är klart
    let ignore = false;
    fetchLuke();
    return () => {
      ignore = true;
    };
  }, []); //  Tom array indikerar att effekten körs endast vid första renderingen

  return (
    <div>
      {/* Name: {""} */}
      {person
        ? `Name: ${person.name}, Eyes: ${person.eye_color}, Birth year: ${person.birth_year}, Gender: ${person.gender}`
        : "Loading..."}
    </div>
  );
};
export default Person;
