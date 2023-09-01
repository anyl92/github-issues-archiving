import { ISSUES_PER_PAGE } from '../utils/constants'
import { IssuesResponse } from '../utils/types'
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

export const getIssueDetail = async (owner: string, repo: string, issueNo: string) => {
  const { data } = await Instance.get<IssuesResponse>(`/repos/${owner}/${repo}/issues/${issueNo}`)

  return data
}
