
const imageUpload = (req, res) => {
    
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }
    const uploadedFile = {
        filename: req.file.filename,
        path: req.file.path,
        mimetype: req.file.mimetype,
        size: req.file.size
    };

    res.status(200).json({
        message: 'File uploaded successfully',
        file: uploadedFile
    });
};

module.exports = {imageUpload};
