import React from 'react';
import {Box, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {attemptLogin} from "../../state/actions/user/userSlice";
import LoadingButton from "../../assets/global/button/loadingButton/LoadingButton";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleTest = () => {
        dispatch(attemptLogin())
    }

    return (
        <>
            <Box textAlign={'center'} p={2}>
                <Typography component={'h1'} p={2}>Test Saga!</Typography>
                {/*<Button onClick={handleTest} variant={'contained'}>DISPATCH</Button>*/}
                <LoadingButton
                    loadingText={"hello"}
                    disabled={false}
                    variant={'contained'}
                    size={'small'}
                    isLoading={true}
                >
                    Hello!
                </LoadingButton>
            </Box>
        </>
    )
}

export default Login;
