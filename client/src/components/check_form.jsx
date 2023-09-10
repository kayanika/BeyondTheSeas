import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/DialogTitle';
import beyondTheSeas from '../apis/beyondTheSeas';

export default function FormDialog() {
  const [question, setQuestion] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setOpen(true);
    try {
        if (!question.trim()) {
            return; // Don't insert empty questions
          }
      const response = await beyondTheSeas.post(`/view-forum/${userID}/postQuestion`, {
        question_text: question,
        keywords: keywords.split(',').map(keyword => keyword.trim()),
      });
      if (response.data.status === 'success') {
        setSuccessMessage('Question added to the server successfully');
        setQuestion('');
        setKeywords('');
      }
    } catch (error) {
      console.error('Error adding question:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ask A Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            label="Question"
            multiline
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            variant="outlined"
            margin="dense"
            fullWidth
          </DialogContentText>
          <TextField
            autoFocus
            label="Keywords (comma separated)"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            fullWidth
            variant="standard"
            margin='dense'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
   
  );
}
