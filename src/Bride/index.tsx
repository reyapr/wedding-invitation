import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import BrideGroomDetail from '../BridgeGroomDetail';
import renal from '../assets/renal-kua.jpeg';
import ulfah from '../assets/ulfah-kua.jpeg';


import './styles.scss';

const BrideGroom = () => {
  
  const brideName = 'Ulfah Rahmah Fauziah'
  const brideParentName = 'Putri dari Bapak Darma Saputra & Ibu Evie Safta Martini';
  
  const groomName = 'Renal Apriansyah'
  const groomParentName = "Putra dari Bapak H. Deden Zaenal Ali & Hj. Ibu Handayati";
  
  return (
    <Grid container className="bride-groom" justifyContent="center" alignItems="center">
        <Grid container className="title" justifyContent="center">
          Mempelai
        </Grid>
        <Grid container xs={12} justifyContent="center" className="content">
          <Grid container xs={10} md={8} direction="row" alignItems="center" justifyContent="space-around">
            <Grid md={5} sm={8}>
              <Card>
                <CardContent>
                  <BrideGroomDetail imageUrl={ulfah} textTitle={brideName} textDetail={brideParentName}/>
                </CardContent>
              </Card>
            </Grid>
            <Grid md={5} sm={8} className="bride-groom-section-2">
              <Card>
                <CardContent>
                  <BrideGroomDetail imageUrl={renal} textTitle={groomName} textDetail={groomParentName}/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default BrideGroom;