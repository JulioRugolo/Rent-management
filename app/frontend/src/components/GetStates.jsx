import React, { useState, useEffect } from 'react';
import axios from 'axios';

const States = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        // Ordena os estados em ordem alfabética pelo nome
        const sortedStates = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
        setStates(sortedStates);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  return (
    <div>
      <h1>Select de Estados</h1>
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Selecione um estado</option>
        {states.map((state) => (
          <option key={state.id} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </select>
    </div>
  );
};

export default States;
