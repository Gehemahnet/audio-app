import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";
import {ReactNode} from "react";

interface StepWrapperProps {
    activeStep: number,
    children: ReactNode
}

const steps = ["Информация о треке", "Загрузите обложку", "Загрузите трек"]
const StepWrapper = ({activeStep, children}: StepWrapperProps) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step key={index} completed={activeStep > index}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center">
                <Card>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;