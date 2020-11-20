# Django React Auth

## Overview

Django React Auth is a simple user authentication demonstration that uses
Django, and the Django Rest Framework on the backend, and React on the frontend.

## Dependencies

1. Python 3.5 or greater
2. Django 3.1
3. React 17.0

## Installation

The project is setup using pipenv, and create-react-app. Follow these steps after
cloning the repository to get it up and running.

1. Run the following commands in the same directory as `manage.py`:  
   `pipenv install` and `pipenv install --dev`

2. Next create a `local_settings.py` file inside of the `mysite` directory.
   create 3 variables inside of it:

- secret_key - this is equal to a string
- debug - this is a boolean value (True, or False)
- allowed_hosts - this is an array

Note that `local_settings.py` is in the gitignore.

3. Now run the django migrations. In the same directory as `manage.py` run:  
   `python manage.py migrate`
