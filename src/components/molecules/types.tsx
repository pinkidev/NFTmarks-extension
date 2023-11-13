
export interface Bookmark {
  NAME: string
  URL: string
  ID?: string,
  CATEGORY: string
  USERID: string,
}

export interface Nftmark {
  NAME: string
  BOOKMARKS: string
  ID?: string,
  CATEGORY: string
  USERID: string,
  CHAIN_ADDR: string
}
