// src/components/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', {
      name: /Hi, I'm Juan/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
