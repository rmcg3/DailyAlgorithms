function domainName(url){
  url = url.replace("http://", " ").replace("https://", " ").replace("www."," ").trim()
  url = url.substr(0, url.indexOf("."));
  return url
}
console.log(domainName("http://google.co.com"))
console.log(domainName("http://www.google.com"))
console.log(domainName("www.xakep.ru"))
