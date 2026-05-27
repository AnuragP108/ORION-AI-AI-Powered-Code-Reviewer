import { useState } from 'react'
import _Editor from "react-simple-code-editor"
const Editor = _Editor.default ?? _Editor        // ✅ CJS/ESM fix

import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import "prismjs/themes/prism-tomorrow.css"
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`)

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
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  )
}

export default App