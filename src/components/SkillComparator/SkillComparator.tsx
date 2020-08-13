import * as React from 'react';
import SkillSet from "../SkillSet/SkillSet";
import {Paper} from "@material-ui/core";
import * as Styled from './styled';

interface Props {
    requiredExperience: number;
    candidateExperience: number;
    skill: string;
}
const SkillComparator = (props: Props) => {
    const {
        requiredExperience,
        candidateExperience,
        skill } = props;
    const percentage = Math.round((candidateExperience / requiredExperience) * 100);

    return (
        <Styled.SkillCompare>
            <SkillSet
                skill={skill}
                progressValue={100}
                isCandidate={true}
                noMatch={!isNaN(percentage)}
            />
            <Paper>{isNaN(percentage) ? `N/A` : `${percentage}%`}</Paper>
            <SkillSet
                skill={skill}
                progressValue={percentage >= 100 ? percentage : 100 - percentage}
                isCandidate={false}
                noMatch={!isNaN(percentage)}
            />
        </Styled.SkillCompare>
    )
}
export default SkillComparator;
