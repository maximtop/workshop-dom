import { PairTag, SingleTag } from '../src';

test('PairTag', () => {
  const tag = new PairTag('div', { class: 'big' }, 'test');
  const expected = '<div class="big">test</div>';
  expect(tag.toString()).toBe(expected);
  expect(tag.isShort()).toBeFalsy();

  const simplePairTag = new PairTag('div');
  expect(simplePairTag.toString()).toBe('<div></div>');
  console.log(simplePairTag.toString().length);
  expect(simplePairTag.isShort()).toBeFalsy();
});

test('SingleTag', () => {
  const tag = new SingleTag('img', { src: 'http://test.com' });
  const expected = '<img src="http://test.com">';
  expect(tag.toString()).toBe(expected);
  expect(tag.isShort()).toBeFalsy();

  const simpleSingleTag = new SingleTag('hr');
  expect(simpleSingleTag.toString()).toBe('<hr>');
  expect(simpleSingleTag.isShort()).toBeTruthy();
});
