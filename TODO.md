1. Login Form
   - Error Handling
     - create login validation object
       - seperate file
     - look for empty input first
       - return errors
         else
         - make calls to check for existing user
           - !usersername
             - user not found - username - wrong password -> wrong password
   - userForm
     - can be used for login
       - may have to lable signupUsername and loginUsername seperate for state management
