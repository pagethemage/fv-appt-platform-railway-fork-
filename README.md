# fv-appt-platform

The FV Referees department would like to provide a better experience for referees when appointing to football matches by improving their semi-automatic process. Appointment requires matching location, experience, maturity, and appropriate age to the match. It also requires accuracy, timing, and flexibility. The main goal is to fix the issue of mass declines in age groups of U12, 13, and 14’s fixtures which can impact the growth of football in Victoria. Having this platform run with the below requirements will help to ensure higher acceptance of appointments. This platform is to compliment the current use of Schedula which is the Referees Appointment System that does not have a graphical visualization but stores the Club's and Referees' information and history.

## Build front-end

1. Clone the repository and navigate to the root directory:

    ```bash
    git clone git@github.com:kyledenis/fv-appt-platform.git
    cd fv-appt-platform
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open `http://localhost:3000` to view it in the browser.

## Build back-end

1. From the root directory, navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Create a virtual environment:

    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:

    ```bash
    venv\Scripts\activate
    ```

    - On macOS and Linux:

    ```bash
    source venv/bin/activate
    ```

4. Install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

5. Set up your database:

    ```bash
    python manage.py migrate
    ```

6. Create a superuser for admin access (optional):

    ```bash
    python manage.py createsuperuser
    ```

7. Run the development server:

    ```bash
    python manage.py runserver
    ```

The API will be available at `http://localhost:8000`.

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
