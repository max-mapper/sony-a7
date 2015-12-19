// GETs

module.exports.dmsDesc = function () {
return newlinify(`GET /DmsDesc.xml HTTP/1.1
Host: 10.0.0.1:64321
Date: Wed, 16 Dec 2015 23:44:53 GMT
User-Agent: UPnP/1.0
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
`)
}

module.exports.cdsDesc = function () {
return newlinify(`GET /CdsDesc.xml HTTP/1.1
Host: 10.0.0.1:64321
Date: Wed, 16 Dec 2015 23:44:53 GMT
User-Agent: UPnP/1.0
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
`)
}

module.exports.dmsDesc2 = function () {
return newlinify(`GET /DmsDesc.xml HTTP/1.1
Host: 10.0.0.1:64321
Accept: */*
Accept-Language: en-us
Connection: keep-alive
Accept-Encoding: gzip, deflate
User-Agent: PlayMemories%20Mobile/5.4.0 CFNetwork/711.1.16 Darwin/14.0.0
`)
}

module.exports.tn = function (file, id) {
return newlinify(`GET /${file}?%21${id.replace(/_/g, '%5f')}%21http%2dget%3a%2a%3aimage%2fjpeg%3aDLNA%2eORG%5fPN%3dJPEG%5fTN%3bDLNA%2eORG%5fCI%3d1%21%21%21%21%21 HTTP/1.1
Host: 10.0.0.1:60151
Accept: */*
Accept-Language: en-us
Connection: keep-alive
Accept-Encoding: gzip, deflate
User-Agent: PlayMemories%20Mobile/5.4.0 CFNetwork/711.1.16 Darwin/14.0.0
`)
}

module.exports.sm = function (file, id) {
return newlinify(`GET /${file}?%21${id.replace(/_/g, '%5f')}%21http%2dget%3a%2a%3aimage%2fjpeg%3aDLNA%2eORG%5fPN%3dJPEG%5fSM%3bDLNA%2eORG%5fCI%3d1%21%21%21%21%21 HTTP/1.1
Host: 10.0.0.1:60151
Accept: */*
Accept-Language: en-us
Connection: keep-alive
Accept-Encoding: gzip, deflate
User-Agent: PlayMemories%20Mobile/5.4.0 CFNetwork/711.1.16 Darwin/14.0.0
`)
}

module.exports.lrg = function (file, id) {
return newlinify(`GET /${file}?%21${id.replace(/_/g, '%5f')}%21http%2dget%3a%2a%3aimage%2fjpeg%3aDLNA%2eORG%5fPN%3dJPEG%5fLRG%3bDLNA%2eORG%5fCI%3d1%21%21%21%21%21 HTTP/1.1
Host: 10.0.0.1:60151
Accept: */*
Accept-Language: en-us
Connection: keep-alive
Accept-Encoding: gzip, deflate
User-Agent: PlayMemories%20Mobile/5.4.0 CFNetwork/711.1.16 Darwin/14.0.0
`)
}

// POSTs

module.exports.getSystemUpdateID = function () {
return newlinify(`POST /upnp/control/ContentDirectory HTTP/1.1
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
Host: 10.0.0.1:64321
User-Agent: UPnP/1.0 DLNADOC/1.50
Content-Length: 276
Content-Type: text/xml; charset="utf-8"
SOAPACTION: "urn:schemas-upnp-org:service:ContentDirectory:1#GetSystemUpdateID"

<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:GetSystemUpdateID xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"></u:GetSystemUpdateID></s:Body></s:Envelope>`)
}

module.exports.getSortCapabilities = function () {
return newlinify(`POST /upnp/control/ContentDirectory HTTP/1.1
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
Host: 10.0.0.1:64321
User-Agent: UPnP/1.0 DLNADOC/1.50
Content-Length: 280
Content-Type: text/xml; charset="utf-8"
SOAPACTION: "urn:schemas-upnp-org:service:ContentDirectory:1#GetSortCapabilities"

<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:GetSortCapabilities xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"></u:GetSortCapabilities></s:Body></s:Envelope>`)
}

module.exports.getSearchCapabilities = function () {
return newlinify(`POST /upnp/control/ContentDirectory HTTP/1.1
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
Host: 10.0.0.1:64321
User-Agent: UPnP/1.0 DLNADOC/1.50
Content-Length: 284
Content-Type: text/xml; charset="utf-8"
SOAPACTION: "urn:schemas-upnp-org:service:ContentDirectory:1#GetSearchCapabilities"

<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:GetSearchCapabilities xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"></u:GetSearchCapabilities></s:Body></s:Envelope>`)
}

module.exports.getProtocolInfo = function () {
return newlinify(`POST /upnp/control/ConnectionManager HTTP/1.1
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
Host: 10.0.0.1:64321
User-Agent: UPnP/1.0 DLNADOC/1.50
Content-Length: 273
Content-Type: text/xml; charset="utf-8"
SOAPACTION: "urn:schemas-upnp-org:service:ConnectionManager:1#GetProtocolInfo"

<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:GetProtocolInfo xmlns:u="urn:schemas-upnp-org:service:ConnectionManager:1"></u:GetProtocolInfo></s:Body></s:Envelope>`)
}

// 0
// PhotoRoot
// 02_00_0591035880_000000_000000_000000
// 03_01_0591035880_000001_000000_000000
module.exports.browse = function (objectId) {
return newlinify(`POST /upnp/control/ContentDirectory HTTP/1.1
X-AV-Physical-Unit-Info: pa="Network Audio Remote";
X-AV-Client-Info: av=5.0; cn="Sony Corporation"; mn="Network Audio Remote"; mv="v1.0.0";
Host: 10.0.0.1:64321
User-Agent: UPnP/1.0 DLNADOC/1.50
Content-Length: ${438 + objectId.length}
Content-Type: text/xml; charset="utf-8"
SOAPACTION: "urn:schemas-upnp-org:service:ContentDirectory:1#Browse"

<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:Browse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><ObjectID>${objectId}</ObjectID><BrowseFlag>BrowseDirectChildren</BrowseFlag><Filter>*</Filter><StartingIndex>0</StartingIndex><RequestedCount>50000</RequestedCount><SortCriteria></SortCriteria></u:Browse></s:Body></s:Envelope>
`)
}

function newlinify (str) {
  return str.replace(/\n/g, '\r\n')
}
