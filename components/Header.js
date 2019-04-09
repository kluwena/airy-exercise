import Link from 'next/link';
import Head from 'next/head';

const linkStyle = {
  marginRight: 15
}

const Header = () => {
  return (
    <div>
      <Head>
        <title>airy twitter search</title>
        
      </Head>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <style jsx>{`
        body{
          color: blue;
        }
        .tweet-container{
          width: 300px;
          border: 15px solid green;
          padding: 50px;
          margin: 20px;
        }
      `}</style>
    </div>
  )
}

export default Header;
