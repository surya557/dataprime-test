import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    Select,
    TextField, Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import * as Styled from './styled';

interface Props {

}
const ContactDialog = (props: Props) => {
    const [ open, setOpen ] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleContactClick = () => {
        setOpen(true)
    }
    const handleDialogClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={handleContactClick}
            >
                Contact Us
            </Button>
            <Dialog
                id={'contact-dialog'}
                open={open}
                fullScreen={fullScreen}
                onClose={handleDialogClose}
                fullWidth={true}
            >
                <DialogTitle>
                    {`Contact Us`}
                </DialogTitle>
                <DialogContent>
                    <Styled.ContactForm>
                        <FormControl style={{paddingBottom: 10}}>
                            <Typography>
                                Contact Type
                            </Typography>
                            <Select defaultValue={'choose'} variant={'outlined'}>
                                <option value={'choose'}>Choose</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Typography>
                                Type Message
                            </Typography>
                            <TextField
                                placeholder={'Message'}
                                multiline={true}
                                rowsMax={4}
                                rows={4}
                                id={'message-box'}
                                variant={'outlined'}
                                fullWidth={true}
                            />
                        </FormControl>
                    </Styled.ContactForm>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleDialogClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleDialogClose} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default ContactDialog;
