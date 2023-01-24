import {ChangeEvent, ReactNode, useRef} from "react";

interface FileUploadProps {
    setFile: Function,
    accept: string,
    children: ReactNode
}

const FileUpload = ({setFile, accept, children}: FileUploadProps) => {
    const ref = useRef<HTMLInputElement>(null)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }
    return (
        <div onClick={() => ref.current?.click()}>
            <input
                type="file"
                accept={accept}
                style={{display: "none"}}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;