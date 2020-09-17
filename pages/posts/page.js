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
        <meta property="og:image" content="https://assets.lookstyle.com.au/images/category/men675x500.jpg" key="image" />
        <meta property="og:url" content="https://lookstyle.com.au/category/men/" key="url" />
      </Head>
      <h1>Page1</h1>
      <img src="https://assets.lookstyle.com.au/images/category/men675x500.jpg" />
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
