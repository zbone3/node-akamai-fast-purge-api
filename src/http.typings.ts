type GenericObjectsArray = string[]
type GenericObjectPayload = {
  objects: GenericObjectsArray
}
type UrlRequest = GenericObjectPayload
type CpCodeRequest = GenericObjectPayload
type TagRequest = GenericObjectPayload

const enum networkTypes {
  STAGING = 'staging',
  PRODUCTION = 'production'
}

const enum endpointUrls {
  INVALIDATE_BY_URL = 'ccu/v3/invalidate/url',
  INVALIDATE_BY_CP_CODE = 'ccu/v3/invalidate/cpcode',
  INVALIDATE_BY_TAG = 'ccu/v3/invalidate/tag',
  DELETE_BY_URL = 'ccu/v3/delete/url',
  DELETE_BY_CP_CODE = 'ccu/v3/delete/cpcode',
  DELETE_BY_TAG = 'ccu/v3/delete/tag',
}
