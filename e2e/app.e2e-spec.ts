import { TodoNgFrontendPage } from './app.po';

describe('todo-ng-frontend App', function() {
  let page: TodoNgFrontendPage;

  beforeEach(() => {
    page = new TodoNgFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
