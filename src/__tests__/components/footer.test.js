import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer />', () => {
  it('renders the <Footer /> with populated data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href='#'>FAQ</Footer.Link>
            <Footer.Link href='#'>Investor Relations</Footer.Link>
            <Footer.Link href='#'>Way to Watch</Footer.Link>
            <Footer.Link href='#'>Corporate Information</Footer.Link>
            <Footer.Link href='#'>Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href='#'>Help Center</Footer.Link>
            <Footer.Link href='#'>Jobs</Footer.Link>
            <Footer.Link href='#'>Terms of Use</Footer.Link>
            <Footer.Link href='#'>Contact Us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href='#'>Account</Footer.Link>
            <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
            <Footer.Link href='#'>Privacy</Footer.Link>
            <Footer.Link href='#'>Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href='#'>Media Center</Footer.Link>
            <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
            <Footer.Link href='#'>Cookie Preferences</Footer.Link>
            <Footer.Link href='#'>Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United Kingdom</Footer.Text>
      </Footer>
    );

    expect(getByText('Questions? Contact us.')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Investor Relations')).toBeTruthy();
    expect(getByText('Way to Watch')).toBeTruthy();
    expect(getByText('Corporate Information')).toBeTruthy();
    expect(getByText('Netflix Originals')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
