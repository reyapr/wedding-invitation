/* eslint-disable no-useless-escape */
import { Button, Card, CardContent, FormControl, Grid, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react'
import ListWord from '../ListWord';

import './styles.scss'

const persons = [
  {name: 'Reza', words: 'Hi selamat ya '},
  {name: 'Reza', words: 'Hi selamat ya '},
  {name: 'Reza', words: 'Hi selamat ya '},
  {name: 'Reza', words: 'Hi selamat ya '},
  {name: 'Reza', words: 'Hi selamat ya '},
]

interface HandleChange {
  [key: string]: (params: any) => any
}

const Message = () => {
  const [name, setName] = useState({value: '', error: false});
  const [words, setWords] = useState({value: '', error: false});
  const [isPresent, setIsPresent] = useState(false);
  
  const handleChange: HandleChange = {
    name: (newName: string) => {
      let isValid = /^[a-zA-Z\s]+$/.test(newName)
      
      setName({value: newName, error: !isValid})
    },
    words: (newWords: string) => {
      let isValid = /^[a-zA-Z0-9\&\s\,\.\?\"\'\(\)]+$/.test(newWords)
      setWords({value: newWords, error: !isValid})
    },
    present: (isPresent: boolean) => setIsPresent(isPresent),
  }
  
  const mapHandleChange = (e: any) => handleChange[e.target.name](e.target.value)
  
  return (
    <Grid container justifyContent="center" className="message">
      <Grid className="message-detail">
        <Grid xs={12}>
          <Typography className="content-title">
              Pesan & Doa Untuk Kami
          </Typography>
        </Grid>
        <Card elevation={3} className=".paper">
          <CardContent>
            <Grid xs={12} direction="column" className="list-field" container justifyContent="space-around">
              <div className="title-heading">Ucapan & Doa</div>
              <TextField 
                name="name" 
                className="input"
                label="Nama Anda" 
                variant="outlined" 
                value={name.value} 
                onChange={mapHandleChange}
                error={name.error}
                helperText={name.error && "Nama Harus Berupa Huruf"}
              />
              <TextField 
                className="input" 
                name="words"
                label={`Ucapan & 
                Doa Untuk Kedua Mempelai`} 
                multiline 
                rows={4}
                variant="outlined"  
                value={words.value} 
                onChange={mapHandleChange}
                error={words.error}
                helperText={words.error && "Harus Berupa Huruf/Angka/Simbol Untuk Percakapan"}
              />
            </Grid>
            <Grid direction="row" container className="margin-top margin-bottom" justifyContent="space-between">
              <Grid>
                <FormControl >
                  <InputLabel htmlFor="my-input">Kehadiran</InputLabel>
                  <Select
                    name="present"
                    native
                    value={isPresent}
                    onChange={mapHandleChange}
                    inputProps={{
                      name: 'present',
                      id: 'my-input',
                    }}
                  >
                    <option value={1}>Hadir</option>
                    <option value={0}>Tidak Hadir</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid className="flex">
                <Button variant="outlined">Kirim</Button>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container className="list" justifyContent="center">
              <Grid container justifyContent="flex-start">
                <ListWord data={persons}/>
              </Grid>
              <Grid className="margin-bottom">
                <Pagination 
                  size="small" 
                  siblingCount={0} 
                  count={20} 
                  variant="outlined" 
                  shape="rounded"
                  onChange={(e:any, number: any) => {
                    console.log(number, '<===================  ==================');
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}




export default Message;