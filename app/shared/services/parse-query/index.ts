export function parseQuery(queryString: string) {
  let query: any = {};
  let pairs = (
    queryString[0] === '?' ? queryString.substr(1) : queryString
  ).split('&');
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(
      pair[1] || ''
    ).replaceAll('+', ' ');
  }
  return query;
}
