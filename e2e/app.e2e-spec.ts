import { Ng4ReduxExamplePage } from './app.po';

describe('ng4-redux-example App', () => {
  let page: Ng4ReduxExamplePage;

  beforeEach(() => {
    page = new Ng4ReduxExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
