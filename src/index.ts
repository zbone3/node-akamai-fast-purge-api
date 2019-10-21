import { FastPurgeHTTP } from './http'

export class AkamaiFP {
  private fastPurgeAPI: FastPurgeHTTP

  constructor (apiAuth: APIAuth, networkType: networkTypes = networkTypes.PRODUCTION) {
    this.fastPurgeAPI = new FastPurgeHTTP(apiAuth, networkType)
  }

  async invalidateByUrl (urls: string[]) {
    return this.fastPurgeAPI.invalidateByUrl(urls)
  }

  async invalidateByCpCode (cpCodes: string[]) {
    return this.fastPurgeAPI.invalidateByCpCode(cpCodes)
  }

  async invalidateByTag (tags: string[]) {
    return this.fastPurgeAPI.invalidateByTag(tags)
  }

  async deleteByUrl (urls: string[]) {
    return this.fastPurgeAPI.deleteByUrl(urls)
  }

  async deleteByCpCode (cpCodes: string[]) {
    return this.fastPurgeAPI.deleteByCpCode(cpCodes)
  }

  async deleteByTag (tags: string[]) {
    return this.fastPurgeAPI.deleteByTag(tags)
  }
}
