import * as React from 'react';
import SkillSet from "../SkillSet/SkillSet";
import * as Styled from './styled';
import { Comparison } from '../ComparisonPane/styled';

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
            <div style={{flex: 1}}>
            </div>
            <div style={{flex: 3, display: "flex"}}>
                <SkillSet
                    skill={skill}
                    progressValue={100}
                    isCandidate={true}
                    noMatch={!isNaN(percentage)}
                />
                <Comparison square={true}>{isNaN(percentage) ? `N/A` : `${percentage}%`}</Comparison>
                <SkillSet
                    skill={skill}
                    progressValue={percentage >= 100 ? percentage : 100 - percentage}
                    isCandidate={false}
                    noMatch={!isNaN(percentage)}
                />
            </div>
        </Styled.SkillCompare>
    )
}
export default SkillComparator;
