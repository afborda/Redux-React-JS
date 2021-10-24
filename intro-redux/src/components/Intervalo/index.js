import React from "react";
import Card from "../Card";

import "./styles.css";

function Intervalo() {
  return (
    <Card Red Title="Intervalo de Números">
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Maximo</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
}

export default Intervalo;
