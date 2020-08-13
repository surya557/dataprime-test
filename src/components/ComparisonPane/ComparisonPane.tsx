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
                <Styled.CategoryLabel>{category}</Styled.CategoryLabel>
                <Styled.CandidateLabel>CANDIDATE</Styled.CandidateLabel>
                <Styled.Comparison square={true}>VS</Styled.Comparison>
                <Styled.BusinessLabel>BUSINESS</Styled.BusinessLabel>
            </Styled.InnerSection>
            <Styled.SkillSection>
                {props.children}
            </Styled.SkillSection>
        </Styled.MainSection>
    )
}
export default ComparisonPane;
