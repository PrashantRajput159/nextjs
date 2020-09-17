import Link from 'next/link'
import fetch from "isomorphic-unfetch"
import Head from 'next/head'

function Page2({ data }) {

  if(data.success)
  {
    console.log(data)
    return  (
      <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title2" key="title" />
      </Head>
      <h1>Page2</h1>
      <ul>
        {data.response.map(item=>
          <li>
            {item['HTMLForAllCategories'] }
          </li>
        )}
      </ul>
      </>
      )
  }
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.lookstyle.com.au/categories')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page2
