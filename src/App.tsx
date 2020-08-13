import * as React from 'react';
import './App.css';
import {createMuiTheme, ThemeProvider, CssBaseline, Typography} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "./containers/Header/Header";
import {Candidate, Skill} from "./types";
import TechnicalSkillsCategoryContainer from "./containers/TechnicalSkillsCategoryContainer/TechnicalSkillsCategoryContainer";

const DELIVERY_SKILLS: Skill[] = [
    {name: 'AWS', id: 1, candExperience: 1, reqExperience: 2},
    {name: 'MySQL', id: 2, candExperience: 1, reqExperience: 3},
    {name: 'MongoDB', id: 3, candExperience: 1, reqExperience: 1},
    {name: 'TensorFlow', id: 4, candExperience: 1, reqExperience: 5}
]
const APPLICATION_SKILLS: Skill[] = [
    {name: 'AWS', id: 1, candExperience: 1, reqExperience: 4},
]
const CAREER_SKILLS: Skill[] = [
    {name: 'No Skills Matched', id: 1, candExperience: 0, reqExperience: 0},
]

function App() {
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'dark'
                },
            }),
        [useMediaQuery('(prefers-color-scheme: dark)')]
    );
    const candidateDetails: Candidate = {name: 'Aditya Agarwal', id: 1}
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <Header
                    candidate={candidateDetails}
                    role={'GENENTECH - Manufacturing Data Scientist'}
                />
                <div style={{display: 'flex'}}>
                    <div className={'LeftView'}>
                    </div>
                    <div className={'MainBody'}>
                        <Typography variant={'h6'} align={'left'}>
                            Technical Skills
                        </Typography>
                        <div className={'CategoryContainer'}>
                            <TechnicalSkillsCategoryContainer category={'Applications'} skills={APPLICATION_SKILLS}/>
                            <TechnicalSkillsCategoryContainer category={'Career'} skills={CAREER_SKILLS}/>
                            <TechnicalSkillsCategoryContainer category={'Delivery'} skills={DELIVERY_SKILLS}/>
                        </div>
                    </div>
                </div>
          </div>
      </ThemeProvider>
    );
}

export default App;
