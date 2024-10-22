import Sensor from "../types/Sensor.ts";

async function fetchSensors(): Promise<Sensor[]> {
  return [
    {
      id: 1,
      name: "Bedroom Sensor",
      connectedToBed: 0,
    },
    {
      id: 2,
      name: "Living Room Sensor",
      connectedToBed: 0,
    },
    {
      id: 3,
      name: "Kitchen Sensor",
      connectedToBed: 0,
    },
  ];
}

// function getLights(): Light[] {
//   let Lights: Light[] = [];
//   fetchLights().then((fetchedLights) => {
//     Lights = fetchedLights;
//   });
//   return Lights;
// }

class SensorManager {
  private Sensors: Sensor[] = [];

  constructor() {
    this.initializeSensors();
  }

  private initializeSensors() {}

  public getConnectedSensors(): Sensor[] {
    return this.Sensors;
  }

  private addSensor(Sensor: Sensor): void {
    this.Sensors.push(Sensor);
  }

  public async addSensorFromId(SensorId: number) {
    await fetchSensors().then((Sensors) => {
      const Sensor = Sensors.find((Sensor) => Sensor.id === SensorId);
      if (Sensor) {
        this.addSensor(Sensor);
      }
    });
  }
  public removeSensorById(SensorId: number): void {
    this.Sensors = this.Sensors.filter((Sensor) => Sensor.id !== SensorId);
  }

  public async updateSensorConnectedToBed(
    SensorId: number,
    connectedToBed: number
  ) {
    const Sensors = this.Sensors;
    const Sensor = Sensors.find((Sensor) => Sensor.id === SensorId);
    // console.log("finding sensor with id: ", SensorId);
    if (Sensor) {
      // console.log("Setting bed id to: ", connectedToBed);
      // console.log(Sensors)
      Sensor.connectedToBed = connectedToBed;
      // this.Sensors.push(Sensor);
    }
  }

  public async getSensorById(SensorId: number) {
    const Sensors = this.Sensors;
    console.log(Sensors);
    return Sensors.find((Sensor) => Sensor.id === SensorId);
  }
}

const sensorManager = new SensorManager();

export { fetchSensors, sensorManager };
