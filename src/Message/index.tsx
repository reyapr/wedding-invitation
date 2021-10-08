/* eslint-disable no-useless-escape */
import { Button, Card, CardContent, FormControl, Grid, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react'
import CommentResponseDto from '../dto/CommentResponseDto';
import ListWord from '../ListWord';
import { createComment, getComment } from '../outbound/comment';

import './styles.scss'

interface HandleChange {
  [key: string]: (params: any) => any
}

const Message = () => {
  const search = window.location.search
  const queryParams = new URLSearchParams(search)
  const defaultPage = queryParams.get('page') || "1";
  const defaultLimit = "4";
  const defaultPageObj = {page: defaultPage, limit: defaultLimit};
  const defaultName = {value: '', error: false};
  const defaultWords = {value: '', error: false};
  
  const [name, setName] = useState(defaultName);
  const [words, setWords] = useState(defaultWords);
  const [page, setPage] = useState(defaultPageObj)
  const [isPresent, setIsPresent] = useState(false);
  const [comments, setComments] = useState<object[]>([]);
  const [count, setCount] = useState(1);
  const [refresh, setResfresh] = useState(false);
  
  useEffect(() => {
    getComment({
      page: String(Number(page.page) - 1),
      limit: page.limit
    })
    .then((data: CommentResponseDto) => {
      setComments([...data.comments]);
      setCount(Math.ceil(data.total/Number(defaultLimit)))
    });
  }, [page, refresh])
    
  const sendComment = () => {
    createComment({ name: name.value, present: isPresent, description: words.value})
    setName(defaultName);
    setWords(defaultWords);
    updatePage('1')
    setResfresh(!refresh)
  } 
  
  const updatePage = (pageParam: string) => {
    if(window.history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?page=${pageParam}`;
      window.history.pushState({path: newurl}, '', newurl)
    }
    setPage({page: pageParam, limit: defaultLimit})
  }
  
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
                <Button 
                  disabled={name.error || words.error} 
                  variant="outlined" 
                  onClick={() => sendComment()}
                >
                  Kirim
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          {
            comments.length > 0 &&
            <CardContent>
              <Grid container className="list" justifyContent="center">
                <Grid container justifyContent="flex-start">
                  <ListWord data={comments}/>
                </Grid>
                <Grid className="margin-bottom">
                  <Pagination 
                    size="small" 
                    siblingCount={0} 
                    count={count} 
                    variant="outlined" 
                    shape="rounded"
                    page={Number(page.page)}
                    onChange={(e:any, number: any) => {
                      updatePage(number)
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          }
        </Card>
      </Grid>
    </Grid>
  )
}




export default Message;