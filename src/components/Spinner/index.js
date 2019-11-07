import React from 'react';
import { connect } from 'react-redux';

import spinner from '../../assets/images/spinner.gif';

import { Container } from './styles';

function Spinner({ isLoading }) {
  return isLoading ? (
    <Container style={{ textAlign: 'center' }}>
      <img src={spinner} alt="loading spinner"/>
    </Container>
  ) : null;
}

const mapStateToProps = state => ({
  isLoading: state.loading
});

export default connect(mapStateToProps)(Spinner);
