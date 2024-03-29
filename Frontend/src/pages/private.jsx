import { useLoaderData } from "react-router-dom";
import { getPrivateContent } from "../functions/getContent";

export async function loader() {
  const data = await getPrivateContent();
  return { data };
}

// Gibt eine Bildschrim Komponente zurück
export default function Private() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>Wilkommen</h1>
      <p>{data}</p>
      <h3>Aufgaben:</h3>
    </>
  );
}
