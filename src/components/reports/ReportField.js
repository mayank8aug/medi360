import { useState, useCallback, createRef, useMemo } from 'react';
import { Button, Typography } from '@material-ui/core';
import ImageCapture from 'react-image-data-capture';
import { makeStyles } from '@material-ui/core/styles';
import { Field } from 'react-final-form';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import { RiCameraOffFill } from 'react-icons/ri';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        padding: 8,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
        flexBasis: '90%'
    },
    marginLeft: {
        marginLeft: 16
    },
    stopCaptureIcon: {
        color: '#f00',
        fontSize: 24
    },
    uploadPhoto: {
        display: 'block',
        padding: '6px 8px'
    },
    hidden: {
        display: 'none'
    },
    flexCol: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    label: {
        fontWeight: 700,
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    field: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    removeIcon: {
        margin: '0 -8px 20px 8px',
        color: '#d66'
    },
}));

function ReportField(props) {
    const { name, setFile, remove } = props;
    const classes = useStyles();
    const [scan, setScan] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const imageRef = createRef();
    const onCapture = useCallback((imageData) => {
        setCapturedImage(imageData.webP);
        setScan(false);
        setFile(new File([imageData.webP], `${name}.png`));
    }, [setFile, setScan, setCapturedImage, name]);
    const config = useMemo(() => ({ video: true }), []);
    return (
        <>
            <div className={classes.field}>
                <div className={classes.container}>
                    <div className={classes.flexCol}>
                        <Typography className={classes.label}>Upload Report</Typography>
                        <Field
                            fullWidth
                            required
                            name={name}
                            placeholder="Upload Report"
                        >
                            {({ input: { value, onChange, ...input }, meta, placeholder }) => (
                                <div className={meta.active ? 'active' : ''}>
                                    <label className={classes.uploadPhoto} htmlFor="upload-photo"><AddPhotoAlternateOutlinedIcon color="primary" /></label>
                                    <input
                                        {...input}
                                        id="upload-photo"
                                        type='file'
                                        placeholder={placeholder}
                                        onChange={({ target }) => {
                                            onChange(target.files[0]);
                                            setFile(target.files[0]);
                                            setCapturedImage(URL.createObjectURL(target.files[0]))
                                        }}
                                        className={classes.hidden}
                                    />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div><Typography className={classes.label}>--OR--</Typography></div>
                    <div className={classes.flexCol}>
                        <Typography className={classes.label}>Take Snapshot</Typography>
                        <div>
                            {scan ?
                                <Button className={classes.stopCaptureIcon} onClick={() => { setScan(false); setCapturedImage(null); }}><RiCameraOffFill /></Button> :
                                <Button color="primary" onClick={() => { setScan(true); setCapturedImage(null); }}><PhotoCamera /></Button>
                            }
                        </div>
                    </div>
                </div>
                <DeleteForeverIcon
                    className={classes.removeIcon}
                    onClick={() => {
                        remove();
                        setCapturedImage(null);
                    }}
                />
            </div>
            {scan && <ImageCapture onCapture={onCapture} userMediaConfig={config} width={300} />}
            {capturedImage && <div><img ref={imageRef} alt="img" src={capturedImage} width={300} /></div>}
        </>
    );
}

export default ReportField;
