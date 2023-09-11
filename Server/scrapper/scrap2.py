import os
import time
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import undetected_chromedriver as uc
from selenium.webdriver.chrome.service import Service
from db import db_connection
from selenium.common.exceptions import NoSuchElementException
from datetime import datetime
import random
conn=db_connection()
cur=conn.cursor()


# Set up the Chrome web driver
#pythoos.environ['PATH'] += "/usr/bin/chromedriver"
service = Service()
chrome_options=Options()
chrome_options.add_experimental_option("detach", True)
user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36'


chrome_options.add_argument('--disable-gpu')


#chrome_options.add_argument("--headless")
chrome_options.add_argument(f'user-agent={user_agent}')

chrome_options.add_argument("--window-size=600,600")
# options.page_load_strategy = 'none'

#driver = webdriver.Chrome(options=chrome_options)
driver=uc.Chrome(headless=False,use_subprocess=False,service=service)


# Open the MIT University website
url = 'https://www.phdportal.com/'
driver.get(url)
driver.get_screenshot_as_file("screenshot.png")
time.sleep(4)
driver.implicitly_wait(10)
element=driver.find_element(By.ID, "DisciplineSpotlight")
print(element.text)
clickableElements=driver.find_elements(By.CSS_SELECTOR, 'li[data-clickable="clickable"]')
print(len(clickableElements))
print(len(clickableElements))

for Celement in clickableElements:
    driver.implicitly_wait(20)
    time.sleep(10)
    el=Celement.find_element(By.CSS_SELECTOR, 'a')
    print(el.text)
    #cur.execute("INSERT INTO fieldofinterest (field) VALUES (%s)", (el.text,))
    #check if field already exists
    cur.execute("SELECT * FROM fieldofinterest WHERE field=%s", (el.text,))
    result=cur.fetchone()
    if result is None:
        cur.execute("INSERT INTO fieldofinterest (field) VALUES (%s)", (el.text,))
        conn.commit()
        print("inserted")
    else :
        print("already exists")    
        
    #this here is the name of field of interest
    

    print(result)
    
    #ActionChains(driver).move_to_element(el).send_keys(Keys.ENTER).perform()
    driver.execute_script("return arguments[0].click();", el); 

    #print clicked
    driver.get_screenshot_as_file("screenshot.png")
    print("clicked")
    time.sleep(5)
    elementInside=driver.find_element(By.CLASS_NAME, "DisciplineConversion")
    link=elementInside.find_element(By.CSS_SELECTOR, 'a')

    #print(link.text)
    #time.sleep(10)
    driver.execute_script("return arguments[0].click();", link); 
    time.sleep(5)
    #now inside all programs
    driver.get_screenshot_as_file("screenshot1.png")
    
    for i in range(1, 7):
        
       
        result=driver.find_element(By.XPATH, f'/html/body/div[3]/div[1]/div/div/main/div/div/div/div/article/section/ul/li[{i}]/a')
        print(result.text)
        programName=result.find_element(By.CLASS_NAME, "CardHeader")
        programName=programName.text
        courseName=programName
        print("programName  :"+programName)
        if(len(programName)>200):
            programName=programName[:200]
        courseName=programName
        #check if this program already exists
        cur.execute("SELECT * FROM program WHERE program_type=%s", (str(programName),))
        result=cur.fetchone()
        #continue if program already exists
        if result is not None:
            continue
        
        time.sleep(5)
        #I am just clicking on the program
        driver.get(result.get_attribute('href'))
        #driver.execute_script("return arguments[0].click();", result); 

        #switc to new window
        #driver.get(link)
        print("clicked")
        time.sleep(3)
        print(driver.current_url)
        
        time.sleep(5)
        # programName=driver.find_element(By.XPATH,"/html/body/div[2]/div[1]/div/div/div[2]/section/div/header/h1/a[2]" )
        
        # programName=programName.text
        # courseName=programName
        # print("program Name :"+programName)
        #remove hiphen frpm program name
        # programName=programName.replace("-", "")
        # print("program Name after :"+programName)
        # print(len(programName))
        # print(type(programName))
        
        

        
        #driver.get_screenshot_as_file("screenshot"+{i}+ ".png")
        #close this window
        #driver.close()
        #duration=driver.find_element(By.CLASS_NAME, "js-duration")
        duration=driver.find_element(By.XPATH, "/html/body/div[2]/div[2]/div/div/section[1]/div/div[1]/div/div[2]/div[1]")
        duration=duration.text
        print("duration: "+duration)
        tuition=driver.find_element(By.CLASS_NAME, "TuitionFeeContainer")
        tuition=tuition.text
        print("tuition: "+tuition)
        timingElements=driver.find_elements(By.CLASS_NAME, "TimingContainer")
        i=0
        for timingElement in timingElements:
            i=i+1

            timing=timingElement.text
            if i==2:
                date_string = timing
                print(date_string)
                print(date_string+"hello")
                
                try:
                     # Attempt to parse the date string with the format "%b %Y"
                    datetime.strptime(date_string, "%b %Y")
                    print("The string matches the format '%b %Y'.")
                    date_object = datetime.strptime(date_string, "%b %Y")


                    # Convert the datetime object to a formatted string that PostgreSQL accepts
                    deadline = date_object.strftime("%Y-%m-01")

                except ValueError:
                    print("The string does not match the format '%b %Y'.")    
                    deadline="2024-01-01"

            print("timing: "+timing)
        name=driver.find_element(By.XPATH, "/html/body/div[2]/div[2]/div/div/article/header/div/a[1]")
        # <a class="Name TextLink Connector js-organisation-info-link" href="/universities/11911/curtin-university.html"> Curtin University </a>
        name=name.text
        print("name: "+name)
        location=driver.find_element(By.CLASS_NAME, "LocationItems")
        location=location.text
        print("location: "+location)
        try :

            rank=driver.find_element(By.CLASS_NAME, "Ranking")
            rank=rank.find_element(By.CLASS_NAME, "Value")
            rank=rank.text
            print("rank: "+rank)
        

        
            match = re.match(r'(\d+)(.*)', rank)
            if match:
                integer_part =int( match.group(1))
                rank=integer_part
            else : 
                rank=random.randint(1000, 2000) 
        except NoSuchElementException:
            rank=random.randint(1000, 2000)    
           
        # rating=driver.find_element(By.CLASS_NAME, "Rating")
        # rating=rating.find_element(By.CLASS_NAME, "Value")
        # rating=rating.text
        # print("rating: "+rating)
        #insert into program table - programName, duration, scholashipAvailable, tuituinfee,availablescholarship number
        #check if this program already exists
        input_string = tuition
        

        try:
            # Step 1: Remove non-numeric characters and convert to integer
            numeric_string = ''.join(filter(str.isdigit, input_string))

            # Step 2: Convert the numeric string to an integer
            numeric_value = int(numeric_string)

            # Step 3: Convert the integer value to dollars (assuming 1 BDT = 0.0117 USD)
            conversion_rate = 0.0117
            dollar_value = numeric_value * conversion_rate
            #round to 2 decimal places
            dollar_value=round(dollar_value, 2)
            #convert to int
            dollar_value=int(dollar_value)
        except ValueError:
            dollar_value=random.randint(1000, 2000)
            print(dollar_value)    
        #check if this program already exists
        cur.execute("SELECT * FROM program WHERE program_type=%s", (str(programName),))
        result=cur.fetchone()
        if result is None:
            query="INSERT INTO program (program_type, duration, scholarship_available,tuition_fees, available_scholarships) VALUES (%s, %s, %s, %s, %s)"
            cur.execute(query, (programName, duration,'TRUE', dollar_value,1))
            conn.commit()
            print("inserted into program table")
        else :
            print("already exists")
        #insert inti course table - courseName, tuitonfee
        #check if this course already exists
        cur.execute("SELECT * FROM course WHERE course_name=%s", (courseName,))
        result=cur.fetchone()
        if result is None:
            query="INSERT INTO course (course_name, tuition_fee) VALUES (%s, %s)"
            cur.execute(query, (courseName, int(dollar_value)))
            conn.commit()
            print("inserted into course table")
        else :
            print("already exists")
        
        # get the program ID and course ID
        cur.execute("SELECT program_id FROM program WHERE program_type=%s", (programName,))
        programID=cur.fetchone()
        cur.execute("SELECT course_id FROM course WHERE course_name=%s", (courseName,))
        courseID=cur.fetchone() 
        

        #insert into programmecoursemapping table - program ID, course ID
        #check if this mapping already exists
        cur.execute("SELECT * FROM programcoursemapping WHERE program_id=%s AND course_id=%s", (programID, courseID,))
        result=cur.fetchone()
        if result is None:
            query="INSERT INTO programcoursemapping (program_id, course_id) VALUES (%s, %s)" 
            cur.execute(query, (programID, courseID))
            conn.commit()
            print("inserted into programmecoursemapping table")
        else :
            print("already exists")
            
            
        
        #check if this university already insert into university table, then insert the university
        cur.execute("SELECT * FROM university WHERE name=%s", (name,))
        result=cur.fetchone()
        if result is None:
            cutoffcgpa = random.uniform(3.0, 4.0)
            gre_score=random.randint(300, 350)
            query="INSERT INTO university (name, location, cs_ranking,cutoff_cgpa,cutoff_grescore,applicationDeadline) VALUES (%s, %s, %s,%s,%s,%s)"
            cur.execute(query, (name, location, rank,  cutoffcgpa,gre_score,deadline))
            conn.commit()
        #insert into universityrunsprogram table - university ID, program ID

        cur.execute("SELECT university_id FROM university WHERE name=%s", (name,))
        universityID=cur.fetchone()
        #check if this mapping already exists
        cur.execute("SELECT * FROM universityrunsprogram WHERE university_id=%s AND program_id=%s", (universityID, programID,))
        result=cur.fetchone()
        if result is None:

            query="INSERT INTO universityrunsprogram (university_id, program_id) VALUES (%s, %s)"
            cur.execute(query, (universityID, programID))
            conn.commit()
            print("inserted into universityrunsprogram table")
        else :
            print("already exists")
        
        #switch back to main window
        #driver.switch_to.window(driver.window_handles[0])
        driver.back()
        print(driver.current_url)
        #driver.get_screenshot_as_file("screenshot4.png")
    
   
        

    
    driver.back()
    time.sleep(3)
    driver.back()

    

# Close the web driver
driver.close()   
