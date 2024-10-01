import Bed from "../types/Bed";

async function fetchBeds(): Promise<Bed[]> {
  return [
    { id: 1, temperature: 20 },
    { id: 2, temperature: 22 },
    { id: 3, temperature: 21 },
  ];
}

function getBeds(): Bed[] {
  let beds: Bed[] = [];
  fetchBeds().then((fetchedBeds) => {
    beds = fetchedBeds;
  });
  return beds;
}

export { fetchBeds, getBeds };
