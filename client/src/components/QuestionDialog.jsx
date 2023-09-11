// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   TextField,
//   Button,
//   Snackbar,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import beyondTheSeas from '../apis/beyondTheSeas';
// import { useParams } from 'react-router-dom';

// const QuestionDialog = ({ open, onClose, questionID, close }) => {
//   const { userID } = useParams(); // Get the userID from the URL
//   const [questionText, setQuestionText] = useState('');
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState('');
//   const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
//   const [open2, setOpen2] = useState(false);

  

//   useEffect(() => {
//     const fetchQuestionAndAnswers = async () => {
//       try {
//         const response1 = await beyondTheSeas.get(`/view-forum/${userID}`);
//         setQuestionText(response1.data.data.user);
//         const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
        
//         setAnswers(response2.data.data.user);
        

//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchQuestionAndAnswers();
//   }, [userID, questionID]);

//   const handleAddAnswer = async () => {
//     if (!newAnswer.trim()) {
//       return;
//     }

//     try {
//       const response = await beyondTheSeas.post(`/view-forum/${userID}/postAnswer/${questionID}`, {
//         answer: newAnswer,
//       });
//       // reload the answers
//       // const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
//       if (response.data.status === 'success') {
          
//         close();
        
//       }
//       // setAnswers([...answers, response.data.data.user.answer]);
//       setNewAnswer('');
//       setIsSnackbarOpen(true); // Show Snackbar on successful answer submission
//       setOpen2(false);
//     } catch (error) {
//       console.error('Error posting answer:', error);
//     }
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setIsSnackbarOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleAddAnswer} maxWidth="md" fullWidth>
//       <DialogTitle>Question and Answers</DialogTitle>
//       <DialogContent>
//         {/* <Typography variant="h6">{questionText}</Typography> */}
//         {answers.map((answer) => (
//           <Typography key={answer.answer_id} variant="body1">
//             - {answer.answer_text}
//           </Typography>
//         ))}
//         <TextField
//           label="Add an Answer"
//           value={newAnswer}
//           onChange={(e) => setNewAnswer(e.target.value)}
//           variant="outlined"
//           margin="dense"
//           fullWidth
//         />
//         <Button variant="outlined" color="primary" onClick={handleAddAnswer}>
//           Submit Answer
//         </Button>
//         <Button onClick={onClose} color="secondary">
//               Cancel
//             </Button>
//       </DialogContent>
//       {/* Snackbar for showing success message */}
//       <Snackbar
//         open={isSnackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleSnackbarClose}
//           severity="success"
//         >
//           Opinion Added Successfully
//         </MuiAlert>
//       </Snackbar>
//     </Dialog>
//   );
// };

// export default QuestionDialog;


// ---------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   TextField,
//   Button,
//   Snackbar,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import beyondTheSeas from '../apis/beyondTheSeas';
// import { useParams } from 'react-router-dom';

// const QuestionDialog = ({ open, onClose, questionID, close }) => {
//   const { userID } = useParams(); // Get the userID from the URL
//   const [questionText, setQuestionText] = useState('');
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState('');
//   const [editAnswer, setEditAnswer] = useState('');
//   const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
//   const [selectedAnswerID, setSelectedAnswerID] = useState(null);
//   const [open2, setOpen2] = useState(false);

  

//   useEffect(() => {
//     const fetchQuestionAndAnswers = async () => {
//       try {
//         const response1 = await beyondTheSeas.get(`/view-forum/${userID}`);
//         setQuestionText(response1.data.data.user);
//         const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
        
//         setAnswers(response2.data.data.user);
        

//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchQuestionAndAnswers();
//   }, [userID, questionID]);

  
//   const handleAnswerOnClick = (answerID,answerText) => {
//     if (!answerText.trim()) {
//       return; // Don't insert empty questions
//     }

//     setSelectedAnswerID(answerID);
//     // setIsQuestionDialogOpen(true);
//   };

//   const handleAddAnswer = async () => {
//     if (!newAnswer.trim()) {
//       return;
//     }

//     try {
//       const response = await beyondTheSeas.post(`/view-forum/${userID}/postAnswer/${questionID}`, {
//         answer: editAnswer,
//       });
//       // reload the answers
//       const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
//       if (response.data.status === 'success') {
          
//         close();
        
//       }
//       // setAnswers([...answers, response.data.data.user.answer]);
//       setNewAnswer('');
//       setIsSnackbarOpen(true); // Show Snackbar on successful answer submission
//       setOpen2(false);
//     } catch (error) {
//       console.error('Error posting answer:', error);
//     }
//   };

//   const handleEditAnswer = async () => {
//     if (!newAnswer.trim()) {
//       return;
//     }
//      try{
//       const response = await beyondTheSeas.put(`/view-forum/${userID}/editAnswer/${questionID}/${selectedAnswerID}`, {
//         answer: editAnswer,
//      });
//      if(response.data.status === 'success'){
//         close();
//       }
//       setEditAnswer('');
//     } catch (error) {
//       console.error('Error editing answer:', error);
//     }
//   };

//   const handleDeleteAnswer = async () => {
//     try{
//       const response = await beyondTheSeas.delete(`/view-forum/${userID}/deleteAnswer/${questionID}/${selectedAnswerID}`);
//       if(response.data.status === 'success'){
//         close();
//       } 
//     } catch (error) {
//       console.error('Error deleting answer:', error);
//     }
//   };


//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setIsSnackbarOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleAddAnswer} maxWidth="md" fullWidth>
//       <DialogTitle>Question and Answers</DialogTitle>
//       <DialogContent>
//         {/* <Typography variant="h6">{questionText}</Typography> */}
//         {answers.map((answer) => (
//           <Typography key={answer.answer_id} variant="body1">
//             - {answer.answer_text}
            
//           </Typography>
//         ))}
//         <TextField
//           label="Add an Answer"
//           value={newAnswer}
//           onChange={(e) => setNewAnswer(e.target.value)}
//           variant="outlined"
//           margin="dense"
//           fullWidth
//         />
//         <Button variant="outlined" color="primary" onClick={handleAddAnswer}>
//           Submit Answer
//         </Button>
//         <Button onClick={onClose} color="secondary">
//               Cancel
//             </Button>
//       </DialogContent>
//       {/* Snackbar for showing success message */}
//       <Snackbar
//         open={isSnackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleSnackbarClose}
//           severity="success"
//         >
//           Opinion Added Successfully
//         </MuiAlert>
//       </Snackbar>
//     </Dialog>
//   );
// };

// export default QuestionDialog;

// import React, { useState, useEffect } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   TextField,
//   Button,
//   Snackbar,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import beyondTheSeas from '../apis/beyondTheSeas';
// import { useParams } from 'react-router-dom';

// const QuestionDialog = ({ open, onClose, questionID, close }) => {
//   const { userID } = useParams();
//   const [questionText, setQuestionText] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [newAnswer, setNewAnswer] = useState('');
//   const [editAnswer, setEditAnswer] = useState('');
//   const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
//   const [selectedAnswerID, setSelectedAnswerID] = useState(null);
//   const [open2, setOpen2] = useState(false);

//   useEffect(() => {
//     const fetchQuestionAndAnswers = async () => {
//       try {
//         const response1 = await beyondTheSeas.get(`/view-forum/${userID}`);
//         setQuestionText(response1.data.data.user);
//         const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
//         setAnswers(response2.data.data.user);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchQuestionAndAnswers();
//   }, [userID, questionID]);

//   const handleAnswerOnClick = (answerID, answerText) => {
//     if (!answerText.trim()) {
//       return; // Don't insert empty questions
//     }
//     setSelectedAnswerID(answerID);
//   };

//   const handleAddAnswer = async () => {
//     if (!newAnswer.trim()) {
//       return;
//     }

//     try {
//       const response = await beyondTheSeas.post(`/view-forum/${userID}/postAnswer/${questionID}`, {
//         answer: newAnswer,
//       });

//       // Reload the answers
//       const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
//       if (response.data.status === 'success') {
//         close();
//       }

//       setNewAnswer('');
//       setIsSnackbarOpen(true); // Show Snackbar on successful answer submission
//       setOpen2(false);
//     } catch (error) {
//       console.error('Error posting answer:', error);
//     }
//   };

//   const handleEditAnswer = async (answer) => {
//     if (!editAnswer.trim()) {
//       return;
//     }
//     try {
//       const response = await beyondTheSeas.put(`/view-forum/${userID}/editAnswer/${questionID}/${answer.answer_id}`, {
//         answer: editAnswer,
//       });
//       if (response.data.status === 'success') {
//         close();
//       }
//       setEditAnswer('');
//       setOpen2(false);
//     } catch (error) {
//       console.error('Error editing answer:', error);
//     }
//   };
  
//   const handleDeleteAnswer = async (answer) => {
//     try {
//       const response = await beyondTheSeas.delete(`/view-forum/${userID}/deleteAnswer/${questionID}/${answer.answer_id}`);
//       if (response.data.status === 'success') {
//         close();
//       }
//       setOpen2(false);
//     } catch (error) {
//       console.error('Error deleting answer:', error);
//     }
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setIsSnackbarOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleAddAnswer} maxWidth="md" fullWidth>
//       <DialogTitle>Question and Answers</DialogTitle>
//       <DialogContent>
//         {questionText.map((question) => (
//           <div key={question.question_id}>
//             {questionID === question.question_id && (
//               <Typography variant="h6">{question.question_text}</Typography>
//             )}
//           </div>
//         ))
//         }
//         <br />
//         {answers.map((answer) => (
//           <div key={answer.answer_id}>
//             <Typography variant="body1">
//               - {answer.answer_text}
//             </Typography>
//             {/* Add Edit and Delete buttons */}
//             {userID == answer.student_id && (
//                <div>
//                 <TextField
//                   label="Edit Answer"
//                   value={editAnswer}
//                   onChange={(e) => setEditAnswer(e.target.value)}
//                   variant="outlined"
//                   margin="dense"
//                   fullWidth
//                 />
//                 <Button variant="outlined" color="primary" onClick={() => handleEditAnswer(answer)}>
//                   Edit
//                 </Button>
//                 <Button variant="outlined" color="error" onClick={() => handleDeleteAnswer(answer)}>
//                   Delete
//                 </Button>
//               </div>
//             )}
//           </div>
//         ))}
//         <TextField
//           label="Add an Answer"
//           value={newAnswer}
//           onChange={(e) => setNewAnswer(e.target.value)}
//           variant="outlined"
//           margin="dense"
//           fullWidth
//         />
//         <Button variant="outlined" color="primary" onClick={handleAddAnswer}>
//           Submit Answer
//         </Button>
//         <Button onClick={onClose} color="secondary">
//           Cancel
//         </Button>
//       </DialogContent>
//       <Snackbar
//         open={isSnackbarOpen}
//         autoHideDuration={3000}
//         onClose={handleSnackbarClose}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleSnackbarClose}
//           severity="success"
//         >
//           Opinion Added Successfully
//         </MuiAlert>
//       </Snackbar>
//     </Dialog>
//   );
// };

// export default QuestionDialog;

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
  const { userID } = useParams();
  const [questionText, setQuestionText] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [editAnswer, setEditAnswer] = useState({});
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [selectedAnswerID, setSelectedAnswerID] = useState(null);
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

  const handleAnswerOnClick = (answerID, answerText) => {
    if (!answerText.trim()) {
      return; // Don't insert empty questions
    }
    setSelectedAnswerID(answerID);
  };

  const handleAddAnswer = async () => {
    if (!newAnswer.trim()) {
      return;
    }

    try {
      const response = await beyondTheSeas.post(`/view-forum/${userID}/postAnswer/${questionID}`, {
        answer: newAnswer,
      });

      // Reload the answers
      const response2 = await beyondTheSeas.get(`/view-forum/${userID}/getQuestion/${questionID}`);
      if (response.data.status === 'success') {
        close();
      }

      setNewAnswer('');
      setIsSnackbarOpen(true); // Show Snackbar on successful answer submission
      setOpen2(false);
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };

  const handleEditAnswer = async (answer) => {
    if (!editAnswer[answer.answer_id]?.trim()) {
      return;
    }
    try {
      const response = await beyondTheSeas.put(`/view-forum/${userID}/editAnswer/${questionID}/${answer.answer_id}`, {
        answer: editAnswer[answer.answer_id],
      });
      if (response.data.status === 'success') {
        close();
      }
      setEditAnswer({ ...editAnswer, [answer.answer_id]: '' });
      setOpen2(false);
    } catch (error) {
      console.error('Error editing answer:', error);
    }
  };

  const handleDeleteAnswer = async (answer) => {
    try {
      const response = await beyondTheSeas.delete(`/view-forum/${userID}/deleteAnswer/${questionID}/${answer.answer_id}`);
      if (response.data.status === 'success') {
        close();
      }
      setOpen2(false);
    } catch (error) {
      console.error('Error deleting answer:', error);
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
        {questionText.map((question) => (
          <div key={question.question_id}>
            {questionID === question.question_id && (
              <Typography variant="h6">{question.question_text}</Typography>
            )}
          </div>
        ))}
        <br />
        {answers.map((answer) => (
          <div key={answer.answer_id}>
            <Typography variant="body1">
              - {answer.answer_text}
            </Typography>
            {/* Add Edit and Delete buttons */}
            {userID == answer.student_id && (
              <div>
                {editAnswer[answer.answer_id] === undefined ? (
                  <Button variant="outlined" color="primary" onClick={() => setEditAnswer({ ...editAnswer, [answer.answer_id]: answer.answer_text })}>
                    Edit
                  </Button>
                ) : (
                  <div>
                    <TextField
                      label="Edit Answer"
                      value={editAnswer[answer.answer_id] || ''}
                      onChange={(e) => setEditAnswer({ ...editAnswer, [answer.answer_id]: e.target.value })}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                    <Button variant="outlined" color="primary" onClick={() => handleEditAnswer(answer)}>
                      Submit
                    </Button>
                  </div>
                )}
                <Button variant="outlined" color="error" onClick={() => handleDeleteAnswer(answer)}>
                  Delete
                </Button>
              </div>
            )}
          </div>
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

