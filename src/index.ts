import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { customResponse } from './config/customResponse';

const app = express();
const port = 8000;

app.use(cors());
// app.use(express.json());

const upload = multer({
    dest: path.join(__dirname, '../uploads/'), 
});

const mockResponses: Record<string, any> = {
    success: { errorCode: -1, errorMessage: null, erroredProperties:[], message: customResponse['unstructured-success']},
    default: {errorCode: 99, errorMessage: null, erroredProperties:[],  message: "Unknown toggle value."},
    unstructuredFailed: { errorCode: 2, message: null, erroredProperties:["Missing Mandatory Disclosures","Inadequate Data Privacy Language","Non-compliant Formatting","Incorrect or Outdated Clauses"], errorMessage: customResponse['unstructured-failed'] },
    csvFailed: { errorCode: 2, message: null, erroredProperties:["Transaction_ID", "Date", "Account_Number", "Amount", "Currency", "Transaction_Type"], errorMessage: customResponse['csv-failed']},
};

app.post('/submitPrompt', upload.array('files'), (req: Request, res: Response) => {
    const responseToggle = req.body.responseToggle;

    console.log('Received responseToggle:', responseToggle);
    console.log('Received files:', req.files);

    const mockResponse = mockResponses[responseToggle] || mockResponses['default'];
    let mimetype = 'unknown';
    if (Array.isArray(req.files) && req.files.length > 0) {
        mimetype = req.files[0].mimetype;
    }
    mockResponse['type'] = mimetype;

    return res.json(mockResponse);
});

app.listen(port, () => {
    console.log(`Mock server running at http://localhost:${port}`);
});

