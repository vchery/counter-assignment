import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/Counter/i)).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/0/i)).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('+')).toBeInTheDocument()
  expect(screen.getByText(/0/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByText(/1/i)).toBeInTheDocument()
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('-')).toBeInTheDocument()
  expect(screen.getByText(/0/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText('-'))
  expect(screen.getByText(/-1/i)).toBeInTheDocument()
});