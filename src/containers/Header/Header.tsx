import * as React from 'react';
import * as Styled from './styled';
import {Button, Divider, Paper, Typography, IconButton} from "@material-ui/core";
import {Person} from "@material-ui/icons";
import {Candidate} from "../../types";
import ContactDialog from "../../components/ContactDialog/ContactDialog";

interface Props {
    role: string;
    candidate: Candidate
}

const Header = (props: Props) => {
    const { candidate, role } = props;

    return(
        <Styled.Header>
            <span>Dashboard/Opportunity</span>
            <span>Edit</span>
            <Typography variant={'subtitle1'}>
                {role}
            </Typography>
            <Divider variant="fullWidth" />
            <Styled.ContactContainer>
                <Styled.Contact>
                    <IconButton>
                        <Person/>
                    </IconButton>
                    <Typography variant={'subtitle2'}>
                        {candidate.name}
                    </Typography>
                </Styled.Contact>
                <Styled.ContactWrapper>
                    <ContactDialog/>
                </Styled.ContactWrapper>
            </Styled.ContactContainer>
        </Styled.Header>
    )
};

export default Header;
