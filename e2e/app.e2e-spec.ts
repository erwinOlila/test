import { AngPortfolioPage } from './app.po';

describe('ang-portfolio App', () => {
  let page: AngPortfolioPage;

  beforeEach(() => {
    page = new AngPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
