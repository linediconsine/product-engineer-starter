## Start backend server

`uvicorn main:app --reload`

## Endpoints

http://127.0.0.1:8000/new_db  this make my life easy and spin a new db

http://127.0.0.1:8000/cases/new create a new case

http://127.0.0.1:8000/cases/1
/cases/{item_id} select a specific case

http://127.0.0.1:8000/cases/
show all cases in db

## Other useful commands

Create enviroment

`python3 -m venv ./env` 

Use enviroment 

`source ./env/bin/activate` 


View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).




