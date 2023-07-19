import React from 'react';
import './Cards.css';
import CentralParties from '../Parties/CentralParties';
import CardGov from '../Parties/CardGov';
import StateParties from '../Parties/StateParties';
import Layout from '../../Layout/Layout';

const Cards = (props) => {
  const stateData = props.stateData;
  const centralData = props.centralData;
  const govData = props.govData;
  const fun = props.fun;
  
  //[{},{}] central data
  function renderCentralDataToParties() {
    return (
      <div>
        <CentralParties data={centralData} heading={"Central"}></CentralParties>
      </div>
    );
  }

  //[{id name,cites:[{}{}]}]
  const renderStateDataInParties = () => {
    return (
      <div>
        <StateParties data={stateData} heading={"State"}></StateParties>
      </div>
    );
  };

  const renderGovDataInParties = () => {
    return (
      <div>
        <CardGov td={govData.records} heading={"govData"}></CardGov>
      </div>
    );
  };

  function CallStateAndCentral() {
    renderGovDataInParties();
    renderStateDataInParties();
  }
 
  return (
    <Layout>
      <div className='cardsPage'>
        {fun === "renderGovDataInParties" ? (
          <>
            {renderGovDataInParties()}
          </>
        ) : (
          <>
            {renderCentralDataToParties()}
            {renderStateDataInParties()}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cards;
