import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const StandardWrapperLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Rama League</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.standings()}>standings</Link>
            </li>
            <li>
              <Link to={routes.weekly()}>weekly</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StandardWrapperLayout
