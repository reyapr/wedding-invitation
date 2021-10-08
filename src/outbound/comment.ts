import axios from 'axios';
import { CommentRequestDto } from '../dto/CommentRequestDto';

interface Page {
  page: string, 
  limit: string
}

export const createComment = (requestDto: CommentRequestDto) => {
  return axios.post('http://localhost:3001/comment', requestDto)
}

export const getComment = ({ page, limit}: Page) => {
  return axios.get(`http://localhost:3001/comment?page=${page}&limit=${limit}`)
  .then(res => res.data)
}