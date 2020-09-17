import Link from 'next/link'
import fetch from "isomorphic-unfetch"
import Head from 'next/head'

function Page({ data }) {

  if(data.success)
  {
    console.log(data)
    return  (
      <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

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

export default Page
