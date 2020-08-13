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
    TextField,
    useMediaQuery,
    useTheme
} from "@material-ui/core";

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
            >
                <DialogTitle>
                    {`Contact Us`}
                </DialogTitle>
                <DialogContent>
                    <form>
                        <FormControl>
                            <InputLabel>
                                Contact Type
                            </InputLabel>
                            <Select>
                                <option value={''}>Choose</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Type Message
                            </InputLabel>
                            <TextField
                                value={'Message'}
                                multiline={true}
                                rowsMax={4}
                                id={'message-box'}
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleDialogClose}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default ContactDialog;
