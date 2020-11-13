import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading />', () => {
  it('should renders the <Loading /> component', () => {
    const { container, getByTestId } = render(
      <Loading src='/images/dimas.png' data-testid='loading' />
    );

    expect(getByTestId('loading')).toBeTruthy();
    expect(getByTestId('loading-picture')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should rendersthe <Loading.ReleaseBody />', () => {
    const { container } = render(<Loading.ReleaseBody />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
