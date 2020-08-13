import * as React from 'react';
import ComparisonPane from "../../components/ComparisonPane/ComparisonPane";
import SkillComparator from "../../components/SkillComparator/SkillComparator";
import {Skill} from "../../types";

interface Props {
    category: string;
    skills: Skill[];
}
const TechnicalSkillsCategoryContainer = (props: Props) => {
    const { category, skills } = props;
    return (
        <ComparisonPane category={category}>
            {skills.length > 0 && skills.map(s =>
                <SkillComparator
                    requiredExperience={s.reqExperience}
                    candidateExperience={s.candExperience}
                    skill={s.name}
                    key={s.id}
                />
            )}
        </ComparisonPane>
    )
};

export default TechnicalSkillsCategoryContainer;
