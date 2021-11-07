import React from 'react';
import Home from '../../pages';
import { render } from '../utils';

test('ホームページ', () => {
  const { container } = render(<Home />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="css-0"
      >
        <h1
          class="css-tq928n"
        >
          Hello World!
        </h1>
      </div>
    </div>
  `);
});
