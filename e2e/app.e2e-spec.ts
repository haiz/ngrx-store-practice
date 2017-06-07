import { Ngrxstore2Page } from './app.po';

describe('ngrxstore2 App', () => {
  let page: Ngrxstore2Page;

  beforeEach(() => {
    page = new Ngrxstore2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
