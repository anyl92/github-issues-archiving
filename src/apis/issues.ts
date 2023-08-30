import { Instance } from './instance'

export const getIssues = async (owner: string, repo: string) => {
  try {
    return await Instance.get(`/repos/${owner}/${repo}/issues?sort=comments`,)
  } catch (err) {
    console.error(err)
    throw err
  }
}
