import { TuiPage } from './app.po';

describe('tui App', () => {
  let page: TuiPage;

  beforeEach(() => {
    page = new TuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
