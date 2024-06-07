const multer = require('multer');
const { promises: fs } = require('fs');
const path = require('path');

const fileUploader = ({
    destinationFolder = 'avatar',
    prefix = 'Avatar',
    fileType = 'image'
}) => {
    const storageConfig = multer.diskStorage({
        destination: async (req, file, cb) => {
            const uploadPath = path.join(__dirname, '../public', destinationFolder);

            try {
                await fs.mkdir(uploadPath, { recursive: true });
                cb(null, uploadPath);
            } catch (error) {
                cb(error);
            }
        },

        filename: async (req, file, cb) => {
            try {
                const { nanoid } = await import('nanoid');
                const fileExtension = file.mimetype.split('/')[1];
                const filename = `${prefix}_${nanoid()}.${fileExtension}`;
                cb(null, filename);
            } catch (error) {
                cb(error);
            }
        }
    });

    const uploader = multer({
        storage: storageConfig,
        limits: { fileSize: 1048576 },

        fileFilter: (req, file, cb) => {
            console.log(file.mimetype);
            if (file.mimetype.split('/')[0] !== fileType) {
                return cb(null, false);
            }
            cb(null, true);
        }
    });

    return uploader;
};

module.exports = { fileUploader };



