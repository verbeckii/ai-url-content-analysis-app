# AI URL Content Analysis Test App

This is a test app for AI that analyzes URL content and retrieves information such as IP addresses, domain names, and geolocations. The app is built using the Remix and FastAPI stack.

## How to Run the Backend:

go to backend folder and create .env file with OPENAI_API_KEY variables

##### Install the virtualenv package if you don't have it already

pip install virtualenv

##### Create a virtual environment (replace 'venv' with your preferred name)

python -m venv venv

##### Activate the virtual environment (on Windows)

venv\Scripts\activate

##### Activate the virtual environment (on macOS and Linux)

source venv/bin/activate

##### pip install all packages

pip install -r requirements.txt

##### run dev server

uvicorn main:app --reload

## How to run frontend:

- go to frontend folder
- install all npm packages
  npm install

##### run dev server

npm run dev
