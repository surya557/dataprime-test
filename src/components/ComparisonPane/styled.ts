import styled from 'styled-components';
import {Paper, Typography} from "@material-ui/core";

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SkillSection = styled(MainSection)`
    
`;
export const InnerSection = styled.div`
    display: flex;
`;
export const CandidateLabel = styled(Typography)`
    flex: 1;
`;
export const CategoryLabel = styled(CandidateLabel)`
    text-align: left;
    padding-left: 14px;
`;
export const BusinessLabel = styled(CandidateLabel)`

`;
export const Comparison = styled(Paper)`
    flex: 1;
    padding: 20px;
`;
