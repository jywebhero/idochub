import API_BASE_URL from '../config/api'
import HttpClient from '@/lib/http'

export const http = new HttpClient(API_BASE_URL);