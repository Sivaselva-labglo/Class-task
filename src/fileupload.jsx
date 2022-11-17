import React,{useState} from "react";

export default function Fileupload() {
    const [storeFile,setStoreFile] = useState('')
    const [view,setView] = useState(false)

    const uploadFile = (e) => {
        setStoreFile(e.target.files[0])
        // console.log(<img
        //     style={{ width: "50%" }}
        //     src={ImagePath === "" ? "" : URL.createObjectURL(ImagePath)}
        //   />)
          console.log('storeFile ', URL.createObjectURL(storeFile))
    }

    const viewFile = (e) => {
        e.preventDefault()
        setView(true)
        console.log('uploadedFile ', storeFile)
    }
    return(
        <div>
            <p>File Upload</p> <br/> <br/>
            
            <form encType='multipart/form-data'>
            <p>Browse and upload a file</p> <br/> <br/>
            <input type='file'  name='file' onChange={uploadFile}/>
            <button type='submit' onClick={viewFile}>Submit</button>
            </form>

            {
                (view) ? 
                <img
              style={{ width: "50%" }}
              src={storeFile === "" ? "" : URL.createObjectURL(storeFile)} 
            /> : <> No img</>
            }
        </div>
    )
}