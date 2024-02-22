import React, { useState } from 'react';
import '../styles/pages/login.css';
import States from '../components/GetStates';

const Login = () => {
  const [tenantName, setTenantName] = useState('');
  const [tenantRG, setTenantRG] = useState('');
  const [tenantCPF, setTenantCPF] = useState('');
  const [tenantPhone, setTenantPhone] = useState('');
  const [tenantAddress, setTenantAddress] = useState('');
  const [tenantCity, setTenantCity] = useState('');
  const [tenantState, setTenantState] = useState('');

  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyNumber, setPropertyNumber] = useState('');
  const [propertyCity, setPropertyCity] = useState('');
  const [propertyCEP, setPropertyCEP] = useState('');
  const [propertyRentValue, setPropertyRentValue] = useState('');
  const [propertyRentDuration, setPropertyRentDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <>
      <header className="common-header">
        <h1 data-testid="header__title">Adicionar nova Locação</h1>
      </header>
      <section className="user-login-area">
        <h1>Dados do Locatário</h1>
        <form onSubmit={handleSubmit} className='user-login-form'>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="tenantName">Nome:</label>
              <input
                type="text"
                id="tenantName"
                value={tenantName}
                onChange={(e) => setTenantName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="tenantRG">RG:</label>
              <input
                type="text"
                id="tenantRG"
                value={tenantRG}
                onChange={(e) => setTenantRG(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="tenantCPF">CPF:</label>
              <input
                type="text"
                id="tenantCPF"
                value={tenantCPF}
                onChange={(e) => setTenantCPF(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="tenantPhone">Telefone:</label>
              <input
                type="text"
                id="tenantPhone"
                value={tenantPhone}
                onChange={(e) => setTenantPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="tenantAddress">Endereço:</label>
              <input
                type="text"
                id="tenantAddress"
                value={tenantAddress}
                onChange={(e) => setTenantAddress(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="tenantCity">Cidade:</label>
              <input
                type="text"
                id="tenantCity"
                value={tenantCity}
                onChange={(e) => setTenantCity(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <States />
            </div>
          </div>
          <h1>Dados do Imóvel</h1>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="propertyAddress">Endereço:</label>
              <input
                type="text"
                id="propertyAddress"
                value={propertyAddress}
                onChange={(e) => setPropertyAddress(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="propertyNumber">Número:</label>
              <input
                type="text"
                id="propertyNumber"
                value={propertyNumber}
                onChange={(e) => setPropertyNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="propertyCity">Cidade:</label>
              <input
                type="text"
                id="propertyCity"
                value={propertyCity}
                onChange={(e) => setPropertyCity(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="propertyCEP">CEP:</label>
              <input
                type="text"
                id="propertyCEP"
                value={propertyCEP}
                onChange={(e) => setPropertyCEP(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="input-group">
              <label htmlFor="propertyRentValue">Valor do Aluguel:</label>
              <input
                type="text"
                id="propertyRentValue"
                value={propertyRentValue}
                onChange={(e) => setPropertyRentValue(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="propertyRentDuration">Tempo de Locação:</label>
              <input
                type="text"
                id="propertyRentDuration"
                value={propertyRentDuration}
                onChange={(e) => setPropertyRentDuration(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Adicionar Locação</button>
        </form>
      </section>
    </>
  );
};

export default Login;
