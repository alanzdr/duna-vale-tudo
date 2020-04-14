import React from 'react';

import './styles.css';

const Optionals = ({info}) => (
  <div id="optionals-container">
    <h2>Opcionais</h2>
    <div className="itens">
      {info.data.opts.map((opt, i) => (
        <div key={i.toString()} className="item">
          <p>{opt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Optionals;
