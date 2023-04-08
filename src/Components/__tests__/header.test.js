import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'
import Footer from "../Footer";

afterEach(() => {
  cleanup();
})
test('renders footer component', () => {
  render(<Footer/>);
  const headerElement = screen.getByTestId("footer-test");
  expect(headerElement).toBeInTheDocument();
});
test('renders footer', () => {
  render(<Footer/>);
  const headerElement = screen.getByTestId("footer-test");
  expect(headerElement).toMatchSnapshot();
});


