import React from 'react'

import ReactQuill from'react-quill'

const Editor = ({value, onChange}) => {
  
    const handleEditorChange = (content) => {
        onChange(content);
      };
    return (
        <div>
            <ReactQuill value={value} theme={'snow'}onChange={handleEditorChange}   />
        </div>
    )
}

export default Editor