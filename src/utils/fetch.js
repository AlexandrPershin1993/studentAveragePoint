const baseUrl = 'https://httpbin.org';

const fetch = async ({method = 'POST', headers = {}, body, url = ''}) => {
  url = `${baseUrl}/${url}`;
  return window.fetch(url, {
    headers: {...headers},
    body: body,
    method: method
  })
}

export default fetch;