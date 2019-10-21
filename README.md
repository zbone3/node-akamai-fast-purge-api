# node-akamai-fast-purge-api
A simple unofficial Akamai Fast Purge v3 API wrapper for NodeJS

## Installation

``npm i akamai-fast-purge``
## Prerequisites
In order to access Akamai's Fast Purge API (CCU v3), you must first create an API key on https://control.akamai.com and authorize it to access Open CCU / Fast Purge APIs.

To do this follow these instructions:
1) On Akamai Control portal, access _Identity and Access Management_ -> _User and API Client_.
2) Click *New API client for me*
    1. Select the groups you would like to authorize, and click next.
    2. **Important**: In the filter be sure to select the *Open CCU / Fast Purge APIs* option. Then select CCU APIs in **Service name** and choose *READ-WRITE* under **Grant scopes**
3) After creating the API Client, click *New Credential* in the API client. Click and download the credentials as txt file.

### Credentials
You should obtain a credentials file in this format
```
client_secret = abcdefghijk12ID/abcdefghijk12h44YwDw=

host = akab-XXXXXXXXXXXXXXXX-XXXXXXXXXXXXXXXX.luna.akamaiapis.net

access_token = akab-XXXXXXXXXXXXXXXX-XXXXXXXXXXXXXXXX

client_token = akab-XXXXXXXXXXXXXXXX-XXXXXXXXXXXXXXXX
```

## Usage
Example usage
```javascript
    import AkamaiFP from 'node-akamai-fast-purge-api'
    
    // Set credentials from the credentials file you received from Akamai Control Center
    const config = {
      clientSecret: '<client_secret>',
      baseUri: '<host>',
      accessToken: '<access_token>',
      clientToken: '<client_token>'
    }
    
     // Example of an async self executing function
    (async () => {
      const AkamaiAPI = new AkamaiFP(config)
      const results = await AkamaiAPI.invalidateByUrl(['https://files.my-hosted-cdn.com/file1.js', 'https://files.my-hosted-cdn.com/file22.js'])
    })()
```
