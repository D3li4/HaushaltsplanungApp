import { useLoaderData } from "react-router-dom";
import { getAdminContent } from "../functions/getContent";

export async function loader() {
  const data = await getAdminContent();
  return { data };
}

// Gibt eine Bildschrim Komponente zurück
export default function Admin() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>Wilkommen</h1>
      <p>Hier sind die Serverdaten: {data}</p>
      <h3>Aufgaben:</h3>
    </>
  );
}
