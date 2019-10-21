import * as EdgeGrid from 'edgegrid'

const akamaiBaseHTTPConfig = {
  headers: {
    'Content-Type': 'application/json',
  }
}

// Promisifications
EdgeGrid.prototype.authPromise = function (authObject: APIAuth) {
  const ctx = this
  return new Promise((resolve, reject) => {
    ctx.auth(authObject).send((error, response, body) => {
      if (error) {
        reject(error)
      } else {
        if (typeof body === 'string') {
          try {
            body = JSON.parse(body)
          } catch (e) {}
        }
        resolve({ response, body })
      }
    })
  })
}

export class FastPurgeHTTP {
  private edgeGridAPI: EdgeGrid
  private readonly networkType: networkTypes

  constructor (authObject: APIAuth, networkType: networkTypes) {
    const { clientToken, clientSecret, accessToken, baseUri } = authObject
    this.edgeGridAPI = new EdgeGrid(clientToken, clientSecret, accessToken, baseUri)
    this.networkType = networkType
  }

  async sendGenericAPIRequest (objects: string[], endpoint: endpointUrls) {
    const dataObject = this.buildDataObject(objects)
    const payload = this.buildEdgeGridEndpoint(dataObject, endpoint, this.networkType)
    return await this.edgeGridAPI.authPromise(payload)
  }

  async invalidateByUrl (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.INVALIDATE_BY_URL)
  }

  async invalidateByCpCode (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.INVALIDATE_BY_CP_CODE)
  }

  async invalidateByTag (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.INVALIDATE_BY_TAG)
  }

  async deleteByUrl (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.DELETE_BY_URL)
  }

  async deleteByCpCode (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.DELETE_BY_CP_CODE)
  }

  async deleteByTag (objects: string[]) {
    return await this.sendGenericAPIRequest(objects, endpointUrls.DELETE_BY_TAG)
  }

  private buildDataObject (data: string[]): GenericObjectPayload {
    return { objects: data }
  }

  private buildEdgeGridEndpoint (data: GenericObjectPayload, endpointUrl: endpointUrls, env: networkTypes = networkTypes.PRODUCTION) {
    return {
      path: `${endpointUrl}/${env}`,
      method: 'POST',
      headers: akamaiBaseHTTPConfig.headers,
      body: data
    }
  }
}
