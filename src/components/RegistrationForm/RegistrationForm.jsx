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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Snackbar from '@mui/material/Snackbar';
import FormSubData from '../../components/Admin/FormSubData'
import Drawer from '@mui/material/Drawer';

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
        id: "",
        name: '',
        email: '',
        address: '',
        selectedCourse: "",
        education: "",
        college: "",
    });
    const [snackBar, setsnackBar] = useState(false)



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

        localStorage.setItem('formData', JSON.stringify(formDataObjectConverted));
        setFormData({
            id: formData.id,
            name: formData.name,
            email: formData.email,
            address: formData.address,
            selectedCourse: formData.selectedCourse,
            education: formData.education,
            college: formData.college,
        })
        setOpen(false);
        setsnackBar(true);
    }

    const handleInputChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value,
        });
    };

    function handleCloseSanck() {
        setTimeout(() => {
            setsnackBar(false);
        }, 3000);
    }
    return (
        <>
            <Snackbar
                open={snackBar}
                autoHideDuration={6000}
                onClose={handleCloseSanck}
                message="Data Added Succesfuly !"
            />
            <FormSubData formData={formData} />
            <Drawer
                className='form-Drawer'
                open={open}
                onClose={handleClose}
                anchor='right'
            // style={{}}
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
                <div className='rg-form' style={{ padding: '20px', width: "30rem" }}>
                    <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="name">Your Name</InputLabel>
                            <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange('name')}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="education">Your Education</InputLabel>
                            <Input
                                id="education"
                                type="text"
                                value={formData.education}
                                onChange={handleInputChange('education')}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="email">Your Email Id</InputLabel>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="address">Your Address</InputLabel>
                            <Input
                                id="address"
                                type="text"
                                value={formData.address}
                                onChange={handleInputChange('address')}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="course">Course Name</InputLabel>
                            <Autocomplete
                                id="course"
                                options={courses}
                                value={formData.selectedCourse}
                                sx={{ width: '100%' }}
                                renderInput={(params) => <TextField {...params} />}
                                onChange={(event, newValue) => {
                                    console.log(event, 'dhdfg');
                                    setFormData({
                                        ...formData,
                                        selectedCourse: newValue,
                                    });
                                }}
                            />
                        </FormControl>

                        <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
                            <InputLabel htmlFor="college">Your College name</InputLabel>
                            <Input
                                id="college"
                                type="text"
                                value={formData.college}
                                onChange={handleInputChange('college')}
                            />
                        </FormControl>

                        <Button variant="contained" color="primary" type='submit'>
                            Submit
                        </Button>
                    </form>
                </div>
            </Drawer>



        </>

    );
};

export default RegistrationForm;
