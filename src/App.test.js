import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <>{children}</>,
  Routes: ({ children }) => <>{children}</>,
  Route: ({ element }) => element,
  Link: ({ children }) => <>{children}</>,
  useNavigate: () => jest.fn(),
}), { virtual: true });

jest.mock('./components/Loader', () => ({ onFinish }) => (
  <button onClick={onFinish}>Loader</button>
));
jest.mock('./components/MobileWarning', () => () => null);
jest.mock('./ui/OverlayText', () => () => <div>OverlayText</div>);
jest.mock('./ui/CommandMenu', () => () => <div>CommandMenu</div>);
jest.mock('./pages/Blog', () => () => <div>Blog</div>);
jest.mock('./pages/About', () => () => <div>About</div>);

test('renders home route content', () => {
  window.history.pushState({}, 'Test page', '/');
  render(<App />);
  expect(screen.getByText('Loader')).toBeInTheDocument();
});
