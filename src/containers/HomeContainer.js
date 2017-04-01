import React from 'react';
import { Redirect } from 'react-router-dom';

// TODO: Don't redirect here
const HomeContainer = () => (
  <Redirect to="/s/likes" />
);

export default HomeContainer;
