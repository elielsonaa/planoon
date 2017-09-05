import { PlanoonPage } from './app.po';

describe('planoon App', () => {
  let page: PlanoonPage;

  beforeEach(() => {
    page = new PlanoonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
