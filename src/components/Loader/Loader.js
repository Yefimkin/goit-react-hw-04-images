import React, { Component } from 'react';

import { Dna } from 'react-loader-spinner';

export default class LoaderSpinner extends Component {
  render() {
    return (
      <Dna
        visible={true}
        height={100}
		    width={100}
        ariaLabel="dna-loading"
        wrapperStyle={{ margin: "auto"}}
        wrapperClass="dna-wrapper"
        
      />
    );
  }
}
