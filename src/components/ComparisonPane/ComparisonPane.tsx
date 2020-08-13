import * as React from 'react';
import {Typography, Paper} from "@material-ui/core";
import * as Styled from './styled';

interface Props {
    category: string;
}
const ComparisonPane: React.FunctionComponent<Props> = props => {
    const { category } = props;

    return (
        <Styled.MainSection>
            <Styled.InnerSection>
                <Typography>{category}</Typography>
                <Typography>CANDIDATE</Typography>
                <Paper>VS</Paper>
                <Typography>BUSINESS</Typography>
            </Styled.InnerSection>
            <Styled.SkillSection>
                {props.children}
            </Styled.SkillSection>
        </Styled.MainSection>
    )
}
export default ComparisonPane;
