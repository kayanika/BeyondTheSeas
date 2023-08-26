import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress } from '@mui/material';
import beyondTheSeas from '../apis/beyondTheSeas';

const AskQuestionForm = ({ userID, onClose }) => {
  const [question, setQuestion] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [open, setOpen] = React.useState(true);

  const handleSubmit = async () => {
    setIsLoading(true);
    
    try {
        if (!question.trim()) {
            return; // Don't insert empty questions
          }
      const response = await beyondTheSeas.post(`/view-forum/${userID}/postQuestion`, {
        question_text: question,
        keywords: keywords.split(',').map(keyword => keyword.trim()),
      });
      console.log('Question posted successfully here ');
      if (response.data.status === 'success') {
        setSuccessMessage('Question added to the server successfully');
        setQuestion('');
        setKeywords('');
        setOpen(false);
        
      }
    } catch (error) {
      console.error('Error adding question:', error);
    } finally {
      setIsLoading(false);
      
    }
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Dialog open={open} onClose={handleSubmit} maxWidth="sm" fullWidth>
      <DialogTitle>Ask A Question</DialogTitle>
      <DialogContent>
        <TextField
          label="Question"
          multiline
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Keywords (comma separated)"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
          </>
        )}
      </DialogActions>
      
      
      
    </Dialog>
  );
};

export default AskQuestionForm;
