import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [form, setForm] = useState({name: "", artist: ""})
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)

    const [nameError, setNameError] = useState("")
    const [nameDirty, setNameDirty] = useState(false)
    const [artistError, setArtistError] = useState("")
    const [artistDirty, setArtistDirty] = useState(false)
    const validation = () => {
    }
    const next = () => {
        if (activeStep === 0) {
            (form.name !== "" && form.artist !== "") && setActiveStep(prevState => prevState + 1)
        }
        if (activeStep === 1) {
            picture !== null && setActiveStep(prevState => prevState + 1)
        }
    }
    const back = () => setActiveStep(prevState => prevState - 1)
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction="column" style={{gap: 20, margin: 20, width: 400}}>

                        <TextField required error={artistError !== ""} helperText="Укажите исполнителя"
                                   label="Исполнитель"/>
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Загрузите обложку</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Загрузите Аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button disabled={activeStep === 2} onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;