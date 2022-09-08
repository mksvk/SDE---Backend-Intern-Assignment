<h1>Documentation<h1>
  
  
 This is application is made useing  express js ,mogodb , node-cron and moments .in this application we can creat the tasks and mention a duration after completion  of that duration the task will be automaticcally deleted 
  
 In this application there are two end points
  
  1) http://localhost:5000/api/list (Get method)
  
  2) http://localhost:5000/api/add  (Post method)
  
  <h3>Get method </h3> : 
               
             TO see all the Tasks in the database we need to use this endpoint   http://localhost:5000/api/list 
             
              This is the image of the get request
               <p align="center">
                <img src="https://raw.githubusercontent.com/mksvk/SDE---Backend-Intern-Assignment/main/images/response.png" />
                
              </p>
            
  

 <h3> Post method </h3> : 
              
              To add a task to the database we need to use this endpoint  http://localhost:5000/api/add .
              i have used postman to send the post request 
              The parameters that should be passed while sending a post request are : - 
                                                        
                          1)  taskname - this is a string (it is the name of the task)
                          2)  taskdes - this is a string (it is the description of the task)
                          3)  taskcreator - this is string (it is a name of the creator who is creating the task)
                          4)  taskduration  - this is a number (it is a duration of the task after this duration task will automatically deleted)
  
  
              <p align="center">
                <img src="https://raw.githubusercontent.com/mksvk/SDE---Backend-Intern-Assignment/main/images/reqbody.png" />
                
              </p>
  
         NOTE :-  send the post request in raw formate and header with " Content-Type - application/json " as shown in the below image
                    
               <p align="center">
                <img src="https://raw.githubusercontent.com/mksvk/SDE---Backend-Intern-Assignment/main/images/reqheader.png
" />
                
              </p>
               
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
