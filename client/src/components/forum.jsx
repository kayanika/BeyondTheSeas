// Forum.js
import {  Pagination, PaginationItem } from '@mui/material';
import './index.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  IconButton,
  Dialog,
} from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import beyondTheSeas from '../apis/beyondTheSeas';
import AskQuestionForm from './AskQuestionForm'; // Update the path as needed
import CloseIcon from '@mui/icons-material/Close';
import QuestionDialog from './QuestionDialog';

const Forum = () => {
  const { userID } = useParams();
  const [forumData, setForumData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1); // Start from page 1
  const rowsPerPage = 5; // Adjust as needed
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);
  //const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await beyondTheSeas.get(`/view-forum/${userID}`);
        setForumData(response.data.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userID]);

  const handleSearch = async () => {
    try {
      const response = await beyondTheSeas.post(`/view-forum/${userID}/searchTopic`, {
        searchTopic: searchQuery,
      });
      setForumData(response.data.data.user);
      setSearchQuery('');
      setPage(1);
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleAskQuestion = async (questionText, keywords) => {
    if (!questionText.trim()) {
      return; // Don't insert empty questions
    }

    try {
      setIsSubmitting(true); // Start the loading state
      const response = await beyondTheSeas.post(`/view-forum/${userID}/postQuestion`, {
        question_text: questionText,
        keywords: keywords,
      });
      console.log('Question posted successfully');
      setIsSuccessSnackbarOpen(true);
      setIsAskQuestionOpen(false);
    } catch (error) {
      console.error('Error posting question:', error);
    } finally {
      setIsSubmitting(false); // End the loading state, regardless of success or error
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderQuestions = () => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    return forumData
      .slice(startIndex, endIndex)
      .map((questionObj, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            boxShadow: 1,
            width: '100%',
          }}
        >
          <Button
            variant="text"
            color="success"
            style={{
              marginBottom: '10px',
              width: '100%',
              textAlign: 'left',
              border: 'none',
              borderRadius: '0',
              paddingLeft: '0',
            }}
            onClick={() =>
              handleQuestionClick(questionObj.question_id, questionObj.question_text)}
            
          >
            {startIndex + index + 1}. {questionObj.question_text}
          </Button>
        </Box>
      ));
  };
  const handleQuestionClick = (questionID, questionText) => {
    if (!questionText.trim()) {
      return; // Don't insert empty questions
    }

    setSelectedQuestionID(questionID);
    setIsQuestionDialogOpen(true);
  };

  const handleCloseQuestionDialog = () => {
    setIsQuestionDialogOpen(false);
    setSelectedQuestionID(null);
  };;

  return (
    <Container
      sx={{
        backgroundImage: 'url("../images/background4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          position: 'sticky',
          top: 45,
          left: 260,
          width: '100%',
          padding: '15px',
          marginTop: '0px',
          display: 'flex',
          
        }}
      >
        <TextField
          label="Search for topics"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          margin="dense"
          fullWidth
          InputProps={{
            endAdornment: (
              <Button onClick={handleSearch} color="success">
                <FaSearch />
              </Button>
            ),
          }}
        />
      </Box>
      <Box
        style={{
          marginTop: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {renderQuestions()}
        <Pagination
          count={Math.ceil(forumData.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
        <Button
          variant="outlined"
          color="success"
          style={{ marginTop: '20px' }}
          onClick={() => setIsAskQuestionOpen(true)}
        >
          Ask A Question
        </Button>
        {/* {isAskQuestionOpen && (
          <AskQuestionForm
            onClose={() => setIsAskQuestionOpen(false)}
            onSubmit={handleAskQuestion}
          />
        )} */}
        {isAskQuestionOpen && (
          <AskQuestionForm
            userID={userID}
            onClose={() => {
              setIsAskQuestionOpen(false);
              setIsSuccessSnackbarOpen(true);
            }}
            onSubmit={handleAskQuestion}
            isSubmitting={isSubmitting}
          />
        )}
  
        <Snackbar
          open={isSuccessSnackbarOpen}
          autoHideDuration={5000} // Adjust the duration as needed
          onClose={() => setIsSuccessSnackbarOpen(false)}
          message="Question added to the server successfully"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setIsSuccessSnackbarOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
        
        {/* Question Dialog */}
        <QuestionDialog
          open={isQuestionDialogOpen}
          onClose={() => handleCloseQuestionDialog()}
          questionID={selectedQuestionID}
          close={()=>{setIsQuestionDialogOpen(false)}}
        />
  
      </Box>
    </Container>
  );
  
};

export default Forum;

