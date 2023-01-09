// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import StandardWrapperLayout from 'src/layouts/StandardWrapperLayout/StandardWrapperLayout'
const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Results" titleTo="results" buttonLabel="New Result" buttonTo="newResult">
          <Route path="/admin/results/new" page={ResultNewResultPage} name="newResult" />
          <Route path="/admin/results/{id:Int}/edit" page={ResultEditResultPage} name="editResult" />
          <Route path="/admin/results/{id:Int}" page={ResultResultPage} name="result" />
          <Route path="/admin/results" page={ResultResultsPage} name="results" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Players" titleTo="players" buttonLabel="New Player" buttonTo="newPlayer">
          <Route path="/admin/players/new" page={PlayerNewPlayerPage} name="newPlayer" />
          <Route path="/admin/players/{id:Int}/edit" page={PlayerEditPlayerPage} name="editPlayer" />
          <Route path="/admin/players/{id:Int}" page={PlayerPlayerPage} name="player" />
          <Route path="/admin/players" page={PlayerPlayersPage} name="players" />
        </Set>
      </Private>
      <Set wrap={StandardWrapperLayout}>
        <Route path="/weekly" page={WeeklyPage} name="weekly" />
        <Route path="/standings" page={StandingsPage} name="standings" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
