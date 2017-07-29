import { AngularServiceAndRoutingPage } from './app.po';

describe('angular-service-and-routing App', () => {
  let page: AngularServiceAndRoutingPage;

  beforeEach(() => {
    page = new AngularServiceAndRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
