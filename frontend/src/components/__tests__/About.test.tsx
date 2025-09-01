// src/components/__tests__/About.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About';

describe('About Component', () => {
  it('renders a paragraph about experience', () => {
    render(<About />);
    
    // Usamos regex para ignorar etiquetas internas
    const paragraph = screen.getByText(/Computer Engineer with a Master's/i);
    
    expect(paragraph).toBeInTheDocument();
  });
});
