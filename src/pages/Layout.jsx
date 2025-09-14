import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({productos, loading, error, children }) {
    return (
    <>
        <Navbar productos={productos} loading={loading} error={error}  />
        <main>{children}</main>
        <Footer />
    </>
    )
}
