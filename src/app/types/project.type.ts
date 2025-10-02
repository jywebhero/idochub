export type Project = {
  id: number,
  owner: string,
  repo: string,
  title: string,
  description: string,
  logo: string,
  language: LangType,
  readme?: string,
  status: number,
  star_count: number,
  updated_at: string,
  base_path: string,
  tags?: string[],
  docs_url?: string
}

export type LangType = 'Python' | 'Java' | 'C++' | 'Go' | 'Rust' | 'PHP' | 'Ruby' | 'C' | 'TypeScript' | 'JavaScript'

export type Tag = {
  id: number,
  name: string
}