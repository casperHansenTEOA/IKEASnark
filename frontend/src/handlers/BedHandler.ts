import Bed from "../types/Bed";

async function fetchBeds(): Promise<Bed[]> {
  console.log("fetching beds");
  return [
    { id: 1, temperature: 20, schedule:{"":0} },
    { id: 2, temperature: 22,schedule:{"01:22": 20 , "02:40":18} },
    { id: 3, temperature: 21, schedule:{"01:22": 20} },
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

  public  addEntryToScheduleFromId(bedId: number, time: string, temperature: number) {
    const bed = this.beds.find(bed => bed.id === bedId);
    if (bed) {
      console.log("Adding entry to schedule");
      bed.schedule = {...bed.schedule, [time]: temperature};
    }

  }
public getScheduleFromId(bedId: number): string[] {
  const bed = this.beds.find(bed => bed.id === bedId);
  if (bed) {
    return Object.keys(bed.schedule);
  }
  return [];

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
