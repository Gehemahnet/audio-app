import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {useGetAllTracksQuery} from "../../services/tracksApi";

const Index = () => {
    const router = useRouter()
    const {data = [], isLoading, isError} = useGetAllTracksQuery()
    return (
        <MainLayout>
            <Grid container justifyContent="center" style={{width: "100%"}}>
                <Card>
                    <Box>
                        <Grid container justifyContent="space-between">
                            {isLoading && <h1>Загрузка</h1>}
                            {!isLoading &&
                                <>
                                    <h1>Список треков</h1>
                                    <Button onClick={() => router.push('/tracks/create')}>
                                        Загрузить
                                    </Button>
                                </>
                            }
                        </Grid>
                    </Box>
                    <TrackList tracks={data}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;