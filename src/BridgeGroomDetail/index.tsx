import { Grid } from '@material-ui/core';
import React from 'react';

import './styles.scss'

interface IBridgeGroomDetail {
  imageUrl: string,
  textTitle: string,
  textDetail: string
}

const BrideGroomDetail = ({ imageUrl, textTitle, textDetail }: IBridgeGroomDetail ) => {
  return (
    <Grid container className="bride-groom-detail" justifyContent="center" direction="column">
      <Grid container className="image">
        <Grid>
          <img src={imageUrl} alt=""/>
        </Grid>
      </Grid>
      <Grid className="detail">
        <h2>{textTitle}</h2>
        <p>{textDetail}</p>
      </Grid>
    </Grid>
  )
}

export default BrideGroomDetail;