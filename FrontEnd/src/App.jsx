import { useState } from 'react'
import _Editor from "react-simple-code-editor"
const Editor = _Editor.default ?? _Editor        // ✅ CJS/ESM fix

import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/themes/prism-tomorrow.css"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`)

const [review, setReview] = useState(``)

  async function reviewCode(){
 const response = await axios.post('http://localhost:3000/ai/get-review', {code})
  setReview(response.data)
}
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code =>
                Prism.languages.javascript
                  ? Prism.highlight(code, Prism.languages.javascript, "javascript")
                  : code
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                minHeight: "200px",
                width: "100%"
              }}
            />
          </div>
          <div 
          onClick={reviewCode}
          className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
          
          rehypePlugins={[rehypeHighlight]}
          
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App