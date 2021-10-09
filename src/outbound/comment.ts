import axios from 'axios';
import { CommentRequestDto } from '../dto/CommentRequestDto';

const url = process.env.BE_ENDPOINT;
interface Page {
  page: string, 
  limit: string
}

export const createComment = (requestDto: CommentRequestDto) => {
  return axios.post(`${url}/comment`, requestDto)
}

export const getComment = ({ page, limit}: Page) => {
  return axios.get(`${url}/comment?page=${page}&limit=${limit}`)
  .then(res => res.data)
}