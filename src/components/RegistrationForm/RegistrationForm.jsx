import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import FormSubData from '../../components/Admin/FormSubData'
const courses = ["Java", "C", "Python", "C++", 'HTML,CSS, JAVSCRIPT', 'REACT JS'];

const educations = [
    { label: 'High School' },
    { label: 'Bachelor\'s Degree' },
    { label: 'Master\'s Degree' },
];

const colleges = [
    { label: 'College A' },
    { label: 'College B' },
    { label: 'College C' },
];

const RegistrationForm = ({ open, setOpen }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        selectedCourse: "",
        education: "",
        college: "",
    });



    // console.log(open);

    // useEffect(() => {
    //     setFormData({
    //         name: '',
    //         email: '',
    //         address: '',
    //         selectedCourse: "",
    //         education: "",
    //         college: "",
    //     })
    // }, [formData])
    const handleClose = () => {
        setOpen(false);
    };

    function handleFormSubmit(e) {
        e.preventDefault()
        const formDataObject = new FormData();

        // Append form data to the FormData object
        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }

        // Convert FormData to an object
        const formDataObjectConverted = {};
        formDataObject.forEach((value, key) => {
            formDataObjectConverted[key] = value;
        });

        // Store the converted object in local storage
        localStorage.setItem('formData', JSON.stringify(formDataObjectConverted));
        setFormData({
            name: '',
            email: '',
            address: '',
            selectedCourse: "",
            education: "",
            college: "",
        })
    }

    const handleInputChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    // console.log(formData,'hdsfh');


    return (
        <>
            <FormSubData formData={formData} />
            <Dialog
                sx={{ height: "100%" }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{ color: "white", background: "#007fff" }} id="alert-dialog-title">
                    Registration Form
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <div className='rg-form'>
                    <form onSubmit={handleFormSubmit} style={{ paddingBottom: "20%", paddingTop: "10%", display: "inline" }}>

                        <Box sx={{ flexDirection: "column", width: "100%" }}>
                            Your Name
                            <span className="fieldName">
                                <span className="asterisk">*</span>
                            </span>
                            <TextField
                                sx={{ width: 500, marginBottom: 5, marginLeft: "10px" }}
                                type="text"
                                // label="Name"
                                value={formData.name}
                                onChange={handleInputChange('name')}

                            />
                        </Box>
                        <Box sx={{ flexDirection: "column", width: "100%" }}>
                            Your Email Id
                            <span className="fieldName">
                                <span className="asterisk">*</span>
                            </span>
                            <TextField
                                sx={{ width: 500, marginBottom: 5, marginLeft: "10px" }}
                                type="text"
                                // label="Name"
                                value={formData.email}
                                onChange={handleInputChange('email')}

                            />
                        </Box>

                        <Box sx={{ flexDirection: "column", width: "100%" }}>
                            Your Address
                            <span className="fieldName">
                                <span className="asterisk">*</span>
                            </span>
                            <TextField
                                sx={{ width: 500, marginBottom: 5, marginLeft: "10px" }}
                                type="text"
                                // label="Name"
                                value={formData.address}
                                onChange={handleInputChange('address')}

                            />
                        </Box>
                        <Box sx={{ flexDirection: "column", width: "100%" }}>
                            Course Name
                            <span className="fieldName">
                                <span className="asterisk">*</span>
                            </span>
                            <Autocomplete
                                id="combo-box-demo"
                                options={courses}
                                value={formData.selectedCourse}
                                sx={{ width: 500 }}
                                renderInput={(params) => <TextField {...params} label="courses" />}
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                    setFormData({
                                        ...formData,
                                        selectedCourse: newValue
                                    });
                                }}
                            />
                        </Box>
                        <Box sx={{ flexDirection: "column", width: "100%" }}>
                            Your College name
                            <span className="fieldName">
                                <span className="asterisk">*</span>
                            </span>
                            <TextField
                                sx={{ width: 500, marginBottom: 5, marginLeft: "10px" }}
                                type="text"
                                // label="Name"
                                value={formData.college}
                                onChange={handleInputChange('college')}

                            />
                        </Box>

                        <Button type='submit' autoFocus>
                            Submit
                        </Button>
                    </form>
                </div>



            </Dialog>
        </>

    );
};

export default RegistrationForm;
