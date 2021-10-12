import React from 'react';
import ImageList from '../ImageList/index';

import jas1 from '../assets/jas-1.jpeg';
import jas2 from '../assets/jas-2.jpg';
import jas3 from '../assets/jas-3.jpg';

import blue1 from '../assets/blue-1.jpg';
import blue2 from '../assets/blue-2.jpg';
import blue3 from '../assets/blue-3.jpg';

import black1 from '../assets/black-1.jpg';
import black2 from '../assets/black-2.jpg';
import black3 from '../assets/black-3.jpg';
import { Grid } from '@material-ui/core';

const jasImages = [
  {
    img: jas3,
    tittle: '',
    author: ''
  },
  {
    img: jas1,
    tittle: '',
    author: ''
  },
  {
    img: jas2,
    tittle: '',
    author: ''
  }
]

const blueImages = [
  {
    img: blue3,
    tittle: '',
    author: ''
  },
  {
    img: blue2,
    tittle: '',
    author: ''
  },
  {
    img: blue1,
    tittle: '',
    author: ''
  }
]

const blackImages = [
  {
    img: black1,
    tittle: '',
    author: ''
  },
  {
    img: black2,
    tittle: '',
    author: ''
  },
  {
    img: black3,
    tittle: '',
    author: ''
  }
]

const Images = () => {
  return (
    <Grid >
      <ImageList images={blueImages}/>
      <ImageList images={jasImages}/>
      <ImageList images={blackImages}/>
    </Grid>
  )
}

export default Images;