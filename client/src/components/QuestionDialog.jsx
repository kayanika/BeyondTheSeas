import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import beyondTheSeas from '../apis/beyondTheSeas';
import { useParams } from 'react-router-dom';

const QuestionDialog = ({ open, onClose, questionID, close }) => {
  const { userID } = useParams(); // Get the userID from the URL
  const [questionText, setQuestionText] = useState('');
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  

  useEffect(() => {
    const fetchQuestionAndAnswers = async () => {
      try {
        const response1 = await beyondTheSeas.get(`/view-forum/${userID}`);
        setQuestionText(response1.data.data.user);
        const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
        
        setAnswers(response2.data.data.user);
        

      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestionAndAnswers();
  }, [userID, questionID]);

  const handleAddAnswer = async () => {
    if (!newAnswer.trim()) {
      return;
    }

    try {
      const response = await beyondTheSeas.post(`/view-forum/${userID}/postAnswer/${questionID}`, {
        answer: newAnswer,
      });
      // reload the answers
      const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
      if (response.data.status === 'success') {
          
        close();
        
      }
      // setAnswers([...answers, response.data.data.user.answer]);
      setNewAnswer('');
      setIsSnackbarOpen(true); // Show Snackbar on successful answer submission
      setOpen2(false);
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSnackbarOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleAddAnswer} maxWidth="md" fullWidth>
      <DialogTitle>Question and Answers</DialogTitle>
      <DialogContent>
        {/* <Typography variant="h6">{questionText}</Typography> */}
        {answers.map((answer) => (
          <Typography key={answer.answer_id} variant="body1">
            - {answer.answer_text}
          </Typography>
        ))}
        <TextField
          label="Add an Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <Button variant="outlined" color="primary" onClick={handleAddAnswer}>
          Submit Answer
        </Button>
        <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
      </DialogContent>
      {/* Snackbar for showing success message */}
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Opinion Added Successfully
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};

export default QuestionDialog;
