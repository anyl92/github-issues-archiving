import { ISSUES_PER_PAGE } from '../utils/constants'
import { Instance } from './instance'

export const getIssues = async (owner: string, repo: string, pageNo: number, perPage = ISSUES_PER_PAGE) => {
  try {
    return await Instance.get(`/repos/${owner}/${repo}/issues?sort=comments`, {
      params: {
        state: 'open',
        sort: 'comments',
        per_page: perPage,
        page: pageNo,
      }
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}
