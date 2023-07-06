import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavItem, NavList, Navigation } from './SharedLayout.module';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem>
              <Link to="/">
                Home<span></span>
              </Link>
            </NavItem>
            <li>
              <Link to="/movies">
                Movies<span></span>
              </Link>
            </li>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
