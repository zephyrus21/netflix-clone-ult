import React from 'react';

import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

const JumbotronContainer = () => {
  return (
    <Jumbotron.Conatiner>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Conatiner>
  );
};

export default JumbotronContainer;
