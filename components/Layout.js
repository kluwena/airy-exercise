import Header from './Header'
import Search from './Search'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Header />
      <h1>Kamar</h1>
      <Search />
      {props.children}
    </div>
  )
}

export default Layout;

