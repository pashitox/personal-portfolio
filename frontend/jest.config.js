import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';
import About from '../About';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    // Buscamos por función que combine texto de nodos hijos
    const heading = screen.getByText((content, element) =>
      content.includes("Hi, I'm Juan")
    );
    expect(heading).toBeInTheDocument();
  });
});

describe('About Component', () => {
  it('renders the main heading', () => {
    render(<About />);
    const heading = screen.getByText((content) =>
      content.includes('About Me')
    );
    expect(heading).toBeInTheDocument();
  });

  it('renders a paragraph about experience', () => {
    render(<About />);
    const paragraph = screen.getByText((content) =>
      content.includes("Computer Engineer with a Master's Degree")
    );
    expect(paragraph).toBeInTheDocument();
  });
});
