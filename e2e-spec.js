
describe('E2E Tests', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should display Logo ', function () {
    expect(element(by.css('div.lead img')).getAttribute('src')).toMatch(/.+logo.jpg$/);
  });

});
