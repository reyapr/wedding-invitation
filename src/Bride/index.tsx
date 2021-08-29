import React from 'react';
import { Grid } from '@material-ui/core';
import BrideGroomDetail from '../BridgeGroomDetail';
import us from '../assets/us.jpg'


import './styles.scss';

const BrideGroom = () => {
  
  const brideName = 'Ulfah Rahmah Fauziah'
  const brideParentName = 'Putri dari Bapak Darma Saputra & Ibu Evie Safta Martini';
  
  const groomName = 'Renal Apriansyah'
  const groomParentName = "Putra dari Bapak H. Deden Zaenal Ali & Hj. Ibu Handayati";
  
  return (
    <Grid container className="bride-groom" justifyContent="center" alignItems="center">
        <Grid container xs={12} className="title" justifyContent="center">
          Mempelai
        </Grid>
        <Grid container xs={12} justifyContent="center">
          <Grid container xs={10} direction="row" alignItems="center" justifyContent="space-around">
            <Grid container md={5} sm={8}>
              <BrideGroomDetail imageUrl={us} textTitle={brideName} textDetail={brideParentName}/>
            </Grid>
            <Grid container md={5} sm={8} className="bride-groom-section-2">
              <BrideGroomDetail imageUrl={us} textTitle={groomName} textDetail={groomParentName}/>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default BrideGroom;