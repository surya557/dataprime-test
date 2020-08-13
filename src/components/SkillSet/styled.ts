import styled from 'styled-components';

export const SkillChip = styled.div<{noMatch: boolean}>`
    flex: 1;
    text-align: left;
    ${props => props.noMatch && `border: 1px solid lightblue;
    border-radius: 20px;
    height: 40px;
    box-sizing: border-box;`}
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
`;

// ${props => props.noMatch ?
// `float: right;` :
// `float: left;`}
