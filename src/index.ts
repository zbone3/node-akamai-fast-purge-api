import { FastPurgeHTTP } from './http'

export class AkamaiFP {
  private fastPurgeAPI: FastPurgeHTTP

  constructor (apiAuth: APIAuth, networkType: networkTypes = networkTypes.PRODUCTION) {
    this.fastPurgeAPI = new FastPurgeHTTP(apiAuth, networkType)
  }

  invalidateByUrl (urls: string[]) {
    this.fastPurgeAPI.invalidateByUrl(urls)
  }

  invalidateByCpCode (cpCodes: string[]) {
    this.fastPurgeAPI.invalidateByCpCode(cpCodes)
  }

  invalidateByTag (tags: string[]) {
    this.fastPurgeAPI.invalidateByTag(tags)
  }

  deleteByUrl (urls: string[]) {
    this.fastPurgeAPI.deleteByUrl(urls)
  }

  deleteByCpCode (cpCodes: string[]) {
    this.fastPurgeAPI.deleteByCpCode(cpCodes)
  }

  deleteByTag (tags: string[]) {
    this.fastPurgeAPI.deleteByTag(tags)
  }
}
