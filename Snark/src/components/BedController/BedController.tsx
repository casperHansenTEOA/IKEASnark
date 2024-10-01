import { useEffect } from "react";
import Bed from "../../types/Bed";
import Card from "../Card/Card";

type Props = {
  bed: Bed;
};

const BedController = ({ bed }: Props) => {
  useEffect(() => {
    console.log("Bed temperature is now: ", bed.temperature);
  }, [bed.temperature]);

  return (
    <Card>
      <div className="horizontal">
        <button>
          <b>-</b>
        </button>
        <p>{bed.temperature} °C</p>
        <button>
          <b>+</b>
        </button>
      </div>
    </Card>
  );
};

export default BedController;
