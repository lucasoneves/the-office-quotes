export default async function cmsService({query}) {
  const token = 'd4ebd57ef3b04d4696b7d0de1a02f8';
  const pageContent = await fetch(' https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query
    })
  }).then((async (resp) => {
    const body = await resp.json();
    return body
  }))
  return {
    data: {
      pageContent
    }
  }
}