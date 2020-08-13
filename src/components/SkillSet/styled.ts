import styled from 'styled-components';

export const SkillChip = styled.div<{alignContent: boolean}>`
    ${props => props.alignContent ? 
    `float: right` : 
    `float: left`}
`;
