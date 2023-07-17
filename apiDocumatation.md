# API DOCUMENTATION

## Profile Module:


| URL                               | Method Type | Request Body                                                                                                                                        | Response Body                                                                                                                                                                                                                                   |
| --------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/user/university-profile/{id} | GET         | N/A                                                                                                                                                 | 200 OK <br> {"universityProfile": {"name": "University of Georgia", "description": "Description of the University ", "courses": ["Course Artificial Intelligence", "Course Concrete Math"], "Tuition Fee": "$1200(approx)", "links": {"website": "https://universityGeorgia.com", "email": "contact@universityGeorgia.com"}}}         |
| /api/user/student-profile/{id}    | GET         | N/A                                                                                                                                                 | 200 OK <br> {"studentProfile": "cg": 3.5, "greScore": 315, "areaOfInterest": "Natural Language Processing(NLP)", "projects": ["A project on traffic simulator analysis ...", "A project on Digital Mental Health Checkup"], "publications": ["Publication on Cyber Security Attack Events Detection", "Publication on Named Entity Recognition: A new way"]}} |
| /api/user/student-profile/{id}    | PUT         | {"cg": 3.53, "greScore": 315} | 200 OK <br> {"message": "Student profile updated successfully"}                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                     |     |

## Non-personalized Recommendation Module:

| URL                                              | Method Type | Request Body                                            | Response Body                       |
| ------------------------------------------------ | ----------- | ------------------------------------------------------- | ----------------------------------- |
| /api/user/non-personalized-recommendation        | GET         | N/A|200 OK <br> {"University Rankings": ["Columbia University","Universiity of Bristol","Tohoku University"] }                                                   |  |
| /api/user/non-personalized-recommendation/filter | POST        |{"appliedFilter" : "Tution Fee"}  |200 OK <br> {"filteredUniversities": ["Tohoku University","Columbia University","Universiity of Bristol"] }
## Personalized Recommendation Module:

| URL                                             | Method Type | Request Body | Response Body                                                                                                       |
| ----------------------------------------------- | ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| /api/user/personalized-recommendation           | GET         | N/A          | 200 OK <br> {"personalizedRecommendations": ["Columbia University","Universiity of Bristol","Tohoku University"] }  |
| /api/user/personalized-recommendation/ambitious | GET         | N/A          | 200 OK <br>{"ambitiousUniversities": ["University of Oxford","Columbia University","Cambridge University"] }        |
| /api/user/personalized-recommendation/probable  | GET         | N/A          | 200 OK <br>{"probableUniversities": ["Universiity of Bristol","University of Warwick","University of Washington"] } |
| /api/user/personalized-recommendation/safe      | GET         | N/A          | 200 OK <br>{"safeUniversities": ["KU Leuven","Yonesi University"," Tohoku University"] }                            |
|                                                 |

## Activity Manager Module

| URL                             | Method Type | Request Body                                                                                | Response Body                                                                                                                       |
| ------------------------------- | ----------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| /api/user/deadline-tracker      | GET         | N/A                                                                                         | 200 OK<br>{"trackedDeadlines": [{"date": "2023-07-10", "time": "14:00", "details": "Deadline for applying University of Alberta"}]} |
| /api/user/deadline-tracker/{id} | GET         | N/A                                                                                         | 200 OK<br>{"deadline": {"date": "2023-07-10", "time": "14:00", "details": Deadline for applying University of Alberta"}}            |
| /api/user/activity-tracker      | GET         | N/A                                                                                         | 200 OK<br>{"activities": [{"date": "2023-07-10", "time": "15:30", "message": "SOP checking"}, {"LOR collecting from advisor"}]}     |
| /api/user/activity-tracker      | POST        | {"date": "2023-07-10", "time": "15:30", "message": "LOR collection from advisor "}          | 201 Created <br>{"message": "Activity created successfully"}                                                                        |
| /api/user/activity-tracker/{id} | GET         | N/A                                                                                         | 200 OK <br> {"activity": {"date": "2023-07-10", "time": "15:30", "message": "SOP checking"}}                                        |
| /api/user/activity-tracker/{id} | PUT         | {"date": "2023-07-10", "time": "15:30", "message": "LOR collecting from thesis supervisor"} | 200 OK <br>{"message": "Activity updated successfully"}                                                                             |
| /api/user/activity-tracker/{id} | DELETE      | N/A                                                                                         | 200 OK <br> {"message": "Activity deleted successfully"}                                                                            |

## Topic Search Module

| URL                         | Method Type | Request Body                                               | Response Body                                                                                                                                                                                                     |
| --------------------------- | ----------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/user/topic-search      | GET         | N/A                                                        | 200 OK <br>{"searchResults":"How to Apply in Cambridge University", "Admission procedure of Boston University ","Alumni portal of Perdue under HCI" }                                                             |
| /api/user/topic-search/{id} | GET         | N/A                                                        | 200 OK <br>{"searchResult": "Admission procedure of Boston University ", "Weather in Boston ","Living cost in Boston","Alumni portal of Boston under HCI" }                                                       |
| /api/user/topic-search      | POST        | {"search topic " : :"Scholarship opportunity in Scotland"} | 200 OK <br>{"searchResult1": {"Question":"Which University of Scotland offers the most promising scholarship in Georgia?", "Answer" :"University of Glassgow offering oportunities for higher study in Geography.}} |

## Question Answer Module

| URL                                       | Method Type | Request Body                                                                                               | Response Body                                                                                                                                                          |
| ----------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/user/question-and-answer             | POST        | { "Question" : "What can be the living cost for a remote place while studying in university of Georgia?" } | 201 Created {"message": "Question posted successfully"}                                                                                                                |
| /api/user/question-and-answer/{id}        | GET         | N/A                                                                                                        | 200 OK <br>{"Question": "What can be the living cost for a remote place while studying in university of Georgia?", "Answers": "The living cost should be around 30K" } |
| /api/user/question-and-answer/{id}/answer | POST        | {"Answer": "The living cost should be around 30K"}                                                         | 201 Created {"message": "Answer posted successfully"}                                                                                                                  |

<br><br>

# Architechture

In our project, the client component will be the mobile app or web application used by the students to access the higher education suggestion system. The app allows students to input their academic history and preferences, view university suggestions, track deadlines, and participate in the forum.

The server component will handle the backend processing of these requests. It will receive data from the client, perform analysis based on the academic history and preferences, generate personalized university suggestions, store user activities and forum interactions, and return the relevant data as responses to the client.

The client-server architecture allows for a clear separation of concerns, making the project easier to maintain and scale. It also facilitates a more efficient distribution of tasks between the client and server components, ensuring a smoother user experience and optimal performance.

# Stack

### Backend : Django

### Frontend : React

### Database : Postgresql
