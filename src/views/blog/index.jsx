import React, { useRef, useState } from 'react'
import { Container, FeildContainer, Download } from '../../styles/view/blog'
import JoditEditor from 'jodit-react'
import { DownloadButton } from '../../styles/component/about';
// import {DownloadBu}


export const ViewsBlog = () => {

  const editor = useRef(null);
  // const [content, setContent] = useState('');
  const [post, setPost] = useState({
    content: '',
  })

  const contentFeild = (data) => {
    // console.log(data)
    setPost({...post, 'content': data})

  }

  const publishContent = (e) => {

    if(post.content.trim() === ''){
      alert("Please Write Something");
      return;
    }  
    console.log(post)

  }


  return (
 
    <Container>
    {JSON.stringify(post)}
    <FeildContainer>
    <JoditEditor
    ref={editor}
    value={post.content}
    // onChange={newContent => setContent(newContent)}
    onChange={contentFeild}
    
    />
    </FeildContainer>
      <Download>

      <DownloadButton  onClick={publishContent}  >Publish</DownloadButton>
      </Download>
    </Container>
  )
}

