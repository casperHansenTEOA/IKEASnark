import Bed from "../types/Bed";

async function fetchBeds(): Promise<Bed[]> {
  console.log("fetching beds");
  return [
    { id: 1, temperature: 20 },
    { id: 2, temperature: 22 },
    { id: 3, temperature: 21 },
  ];
}

// function getBeds(): Bed[] {
//   let beds: Bed[] = [];
//   fetchBeds().then((fetchedBeds) => {
//     beds = fetchedBeds;
//   });
//   return beds;
// }


class BedManager {
  private beds: Bed[] = [];

  constructor() {
    this.initializeBeds();
  }

  private initializeBeds() {
    
  }

  public getConnectedBeds(): Bed[] {
    return this.beds;
  }

  private addBed(bed: Bed): void {
    this.beds.push(bed);
  }

  public addBedFromId(bedId: number) {
    fetchBeds().then((beds) => {
      const bed = beds.find((bed) => bed.id === bedId);
      if (bed) {
        this.addBed(bed);
      }
    });
  }
  public removeBedById(bedId: number): void {
    this.beds = this.beds.filter(bed => bed.id !== bedId);
  }

  public updateBedTemperature(bedId: number, temperature: number): void {
    const bed = this.beds.find(bed => bed.id === bedId);
    if (bed) {
      bed.temperature = temperature;
    }
  }
}

const bedManager = new BedManager();

export { fetchBeds,bedManager };
