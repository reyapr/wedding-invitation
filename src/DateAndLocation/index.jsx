import React from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import DateImage from '../assets/date.png';
import LocationImage from '../assets/location.png';


import "./styles.scss"

const CheckList = () => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>

const DateAndLocation = () => {
  
  const mamiUnguLocation = 'https://www.google.com/maps/dir//Mamih+Ungu+Cafe+and+Resto,+Jl.+Brawijaya+No.16,+Sriwedari,+Gunungpuyuh,+Sukabumi+City,+West+Java+43123/@-6.9182238,106.919496,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e68482ebe6e327b:0x8e410a1dec0ae9cf!2m2!1d106.9194962!2d-6.9182134';
  
  return (
    <Grid container justifyContent="center">
       <Grid className="date-and-location" >
        <Grid>
          <Typography className="content-title">
              Tanggal & Lokasi
          </Typography>
        </Grid>
        <Grid>
          <Card className="card-section">
            <CardContent className="content-date">
              <img alt="" src={DateImage} width="40px" height="40px"/>
              <h5 className="content">
                <strong>31 Oktober 2021</strong>
              </h5>
              <div>13:00 - 18:00</div>
              <img className="content" alt="" src={LocationImage} width="40px" height="40px"/>
              <div className="content">
                Sukabumi, Mami Ungu,
                Jl. Brawijaya No.16, Sriwidari, Kec. Gunungpuyuh, Kota Sukabumi, Jawa Barat 43123.
              </div>
              <div className="content gmap_canvas" onClick={() => window.location.href=mamiUnguLocation}> 
                <iframe href={mamiUnguLocation} title="location" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Mami%20Ungu%20Sukabumi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
              </div>
              <div className="content alert alert-light">
                <h5 className="alert-heading">Informasi Protokol Kesehatan</h5>
                <ul>
                  <li>
                    <CheckList/>
                    <span>Menggunakan masker selama acara</span>
                  </li>
                  <li>
                    <CheckList/>
                    <span>Selalu bersihkan Tangan</span>
                  </li>
                  <li>
                    <CheckList/>
                    <span>Menjaga jarak</span>
                  </li>
                  <li>
                    <CheckList/>
                    <span>Dianjurkan untuk tidak membawa bayi selama acara</span>
                  </li>
                </ul>
              </div>
              <div className="content">
                <a className="location-button" href={mamiUnguLocation}>ARAHKAN KE LOKASI</a>          
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DateAndLocation;