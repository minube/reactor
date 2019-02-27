import markdown from './markdown';

const text = 'What is Lorem Ipsum?';
const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

describe('markdown()', () => {
  it('default', () => {
    const value = markdown();
    expect(value.length).toEqual(0);
  });

  it('simple text', () => {
    const value = markdown('hello world');
    expect(value.length).toEqual(1);
  });

  it('including *', () => {
    const value = markdown('hello *world* javi!');
    expect(value.length).toEqual(3);
  });

  it('including * as a group of words', () => {
    const value = markdown('hello *world javi* i am not original');
    expect(value.length).toEqual(3);
  });

  it('including * as first word', () => {
    const value = markdown('*hello* world');
    expect(value.length).toEqual(2);
  });

  it('including * as last word', () => {
    const value = markdown('hello *world*');
    expect(value.length).toEqual(2);
  });

  it('combining * & **', () => {
    const value = markdown('hello *world* i am **javi**');
    expect(value.length).toEqual(4);
  });
});
