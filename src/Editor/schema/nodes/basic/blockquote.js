// :: NodeSpec A blockquote (`<blockquote>`) wrapping one or more blocks.
const blockquote = {
    content: 'block+',
    group: 'block',
    defining: true,
    parseDOM: [{tag: 'blockquote'}],
    toDOM: () => ['blockquote', 0],
};

export default blockquote;
