import styled from 'styled-components';
import {Paper} from "@material-ui/core";

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
export const Contact = styled(Paper)`
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-right: 20px;
`;
export const ContactContainer = styled.div`
    padding-top: 20px;
    display: flex;
`;
export const ContactWrapper = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
`;
