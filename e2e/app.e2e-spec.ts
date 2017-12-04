import { WechatbackendPage } from './app.po';

describe('wechatbackend App', function() {
  let page: WechatbackendPage;

  beforeEach(() => {
    page = new WechatbackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
