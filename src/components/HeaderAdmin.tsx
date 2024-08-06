import { Link } from 'react-router-dom'


const HeaderAdmin = () => {
  return (
    <header className="lg:fixed w-full z-50">
      <section className="bg-yellow-600 flex justify-between text-white font-semibold text-xl px-4 py-2">
        <div className="flex justify-center items-center gap-2">
          <i className="bi bi-cup-hot-fill "></i>
          <p>tailoi</p>
        </div>
        <Link to="/">
          {" "}
          <i className="bi bi-box-arrow-right pr-1"></i>Out
        </Link>
      </section>
    </header>
  )
}

export default HeaderAdmin