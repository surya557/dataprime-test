import * as React from 'react';
import {CircularProgress, Typography} from "@material-ui/core";
import * as Styled from './styled';

interface Props {
    skill: string;
    progressValue: number;
    isCandidate: boolean;
    noMatch?: boolean;
}
const SkillSet = (props: Props) => {
    const {
        skill,
        progressValue,
        isCandidate,
        noMatch } = props;
    return(
        <Styled.SkillChip noMatch={noMatch!}>
            {noMatch &&
            <CircularProgress
                variant="static"
                value={progressValue}
            />}
            <Typography variant={'caption'}>
                {skill}
            </Typography>
        </Styled.SkillChip>
    )
}
export default SkillSet;
