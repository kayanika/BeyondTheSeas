import React, { useState } from 'react';
import { Paper, Typography, Button, TextField, Box } from '@mui/material';

const Forum = () => {
  const [forumData, setForumData] = useState([
    {
      question: 'How does React work?',
      answers: ['React is a JavaScript library for building user interfaces.', 'It uses a virtual DOM to optimize updates.'],
      isEditable: false,
      
    },
    {
      question: 'What is the purpose of JSX?',
      answers: ['JSX allows you to write HTML-like syntax in your JavaScript code.', 'It\'s used to describe the structure of UI components.'],
      isEditable: false,
    }
    // Add more questions and answers as needed
  ]);

  

  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddAnswer = (index) => {
    const updatedForumData = [...forumData];
    updatedForumData[index].answers.push(newAnswer);
    setForumData(updatedForumData);
    setNewAnswer('');
  };

  const handleAddQuestion = () => {
    const newQuestionObj = {
      question: newQuestion,
      answers: [],
      isEditable: true,
    };
    setForumData([...forumData, newQuestionObj]);
    setNewQuestion('');
  };

  const handleEditAnswer = (questionIndex, answerIndex) => {
    const updatedForumData = [...forumData];
    updatedForumData[questionIndex].isEditable = true;
    setNewAnswer(updatedForumData[questionIndex].answers[answerIndex]);
    setForumData(updatedForumData);
  };

  const handleSaveEditAnswer = (questionIndex, answerIndex) => {
    const updatedForumData = [...forumData];
    updatedForumData[questionIndex].answers[answerIndex] = newAnswer;
    updatedForumData[questionIndex].isEditable = false;
    setForumData(updatedForumData);
    setNewAnswer('');
  };

  const handleDeleteAnswer = (questionIndex, answerIndex) => {
    const updatedForumData = [...forumData];
    updatedForumData[questionIndex].answers.splice(answerIndex, 1);
    setForumData(updatedForumData);
  };

  return (
    <div>
      <h1>Forum</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
      <TextField
        label="Ask a question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        variant="outlined"
        margin="dense"
      />
      <Button variant="outlined" color="success" onClick={handleAddQuestion}  style={{ marginLeft: '10px' }}>
        Add Question
      </Button>
      </div>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        {forumData.map((questionObj, questionIndex) => (
          <div key={questionIndex} style={{ marginBottom: '20px' }}>
            <Typography variant="h6">{questionObj.question}</Typography>
            {questionObj.answers.map((answer, ansIndex) => (
              <div key={ansIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                {questionObj.isEditable && ansIndex === questionObj.answers.length - 1 ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <TextField
                      label="Edit answer"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      variant="outlined"
                      margin="dense"
                    />
                    <Button
                      variant="outlined"
                      color="success"
                      size="small"
                      onClick={() => handleSaveEditAnswer(questionIndex, ansIndex)}
                    >
                      Save
                    </Button>
                  </Box>
                ) : (
                  <Typography variant="body1" style={{ marginRight: '10px' }}>
                    {answer}
                  </Typography>
                )}
                {!questionObj.isEditable && ansIndex === questionObj.answers.length - 1 && (
                  <Button
                    variant="outlined"
                    color="info"
                    size="small"
                    onClick={() => handleEditAnswer(questionIndex, ansIndex)}
                  >
                    Edit
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleDeleteAnswer(questionIndex, ansIndex)}
                >
                  Delete
                </Button>
              </div>
            ))}
            {!questionObj.isEditable && (
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '10px' }}>
                <TextField
                  label="Add an answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  variant="outlined"
                  margin="dense"
                />
                <Button variant="outlined" color="success" onClick={() => handleAddAnswer(questionIndex)} style={{ marginLeft: '10px' }}>
                  Add Answer
                </Button>
              </div>
            )}
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default Forum;
