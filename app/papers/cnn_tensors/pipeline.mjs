import rehypeDocument from 'rehype-document'
import rehypeKatex from 'rehype-katex'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { read, write } from 'to-vfile'
import { unified } from 'unified'

const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeDocument, {
        // Get the latest one from: <https://katex.org/docs/browser>.
        css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
    })
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(await read('./app/papers/cnn_tensors/input.html'))

file.basename = '../output.html'
await write(file)
