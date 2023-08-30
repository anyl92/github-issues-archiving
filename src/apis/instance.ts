import axios from 'axios'

export const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const BASE_URL = "https://api.github.com"

export const Instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GITHUB_TOKEN}`, "Accept": "application/vnd.github+json" },
})
