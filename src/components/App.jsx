import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const NavHeader = styled.header`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: grey;
    color: white;
  }

  &.active {
    color: blue;
    text-decoration: underline;
  }
`;

export default function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Suspense fallback={<div>Loading...</div>}>
        <NavHeader>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
