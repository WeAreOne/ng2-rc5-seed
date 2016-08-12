import { Ng2Rc5SeedPage } from './app.po';

describe('ng2-rc5-seed App', function() {
  let page: Ng2Rc5SeedPage;

  beforeEach(() => {
    page = new Ng2Rc5SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
