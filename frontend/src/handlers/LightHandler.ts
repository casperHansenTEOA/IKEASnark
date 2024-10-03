import Light from "../types/Light.ts";

async function fetchLights(): Promise<Light[]> {
  return [
    {
      id: 1,
      name: "Bedroom Light",
  
      color: "white",
      connectedToBed: 0,

    },
    {
      id: 2,
      name: "Living Room Light",

      color: "white",
      connectedToBed: 0,

    },
    {
      id: 3,
      name: "Kitchen Light",
 
      color: "white",
      connectedToBed: 0,
 
    }
  ];
}

// function getLights(): Light[] {
//   let Lights: Light[] = [];
//   fetchLights().then((fetchedLights) => {
//     Lights = fetchedLights;
//   });
//   return Lights;
// }


class LightManager {
  private Lights: Light[] = [];

  constructor() {
    this.initializeLights();
  }

  private initializeLights() {
    
  }

  public getConnectedLights(): Light[] {
    return this.Lights;
  }

  private addLight(Light: Light): void {
    this.Lights.push(Light);
  }

  public async  addLightFromId(LightId: number) {
    await fetchLights().then((Lights) => {
      const Light = Lights.find((Light) => Light.id === LightId);
      if (Light) {
        this.addLight(Light);
      }
    });
  }
  public removeLightById(LightId: number): void {
    this.Lights = this.Lights.filter(Light => Light.id !== LightId);
  }

  public updateLightColor(LightId: number, color: string): void {
    const Light = this.Lights.find(Light => Light.id === LightId);
    if (Light) {
      Light.color = color;
    }
  }

  public async updateLightConnectedToBed(LightId: number, connectedToBed: number){
    const Lights = this.Lights;
    const Light = Lights.find(Light => Light.id === LightId);
    // console.log("finding light with id: ", LightId);
    if (Light) {
      // console.log("Setting bed id to: ", connectedToBed);
      // console.log(Lights)
      Light.connectedToBed = connectedToBed;
      // this.Lights.push(Light);
    }
  }

  public async getLightById(LightId: number) {
    const Lights = this.Lights
    console.log(Lights);
    return Lights.find(Light => Light.id === LightId);
  }
}

const lightManager = new LightManager();

export { fetchLights,lightManager };
