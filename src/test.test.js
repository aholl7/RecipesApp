import { render, screen } from '@testing-library/react';
import add from './test';


test('adds two numbers correctly', () => {
    var sum = add(3, 6);
    expect(sum).toBe(9);
  });
  