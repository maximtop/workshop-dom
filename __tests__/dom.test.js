import PairTag from '../src/PairTag';
import SingleTag from '../src/SingleTag';

test('PairTag', () => {
  const tag = new PairTag('div', { class: 'big' }, 'test');
  const expected = '<div class="big">test</div>';
  expect(tag.toString()).toBe(expected);

  const simplePairTag = new PairTag('div');
  expect(simplePairTag.toString()).toBe('<div></div>');
});

test('SingleTag', () => {
  const tag = new SingleTag('img', { src: 'http://test.com' });
  const expected = '<img src="http://test.com">';
  expect(tag.toString()).toBe(expected);

  const simpleSingleTag = new SingleTag('hr');
  expect(simpleSingleTag.toString()).toBe('<hr>');
});
