import React from "react";
import Card from "../Card";

import "./styles.css";

function Soma() {
  return (
    <Card Purple Title="Soma dos numeros">
      <div>
        <span>
          <span>Resultado:</span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  );
}

export default Soma;
