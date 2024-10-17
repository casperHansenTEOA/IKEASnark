import Schedule from './Schedule';

type Bed = {
  id: number;
  name?: string;
  temperature: number;
  schedule: Schedule;
};

export default Bed;
