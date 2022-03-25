#import serial
import pyrebase
import random
from time import time, sleep
from datetime import datetime

config = { #firebase authentification
    "apiKey": "AIzaSyDEfkwr7Zl5WucXFluMxB8VIlngUnp7aDM",
    "authDomain": "smv-daq.firebaseapp.com",
    "databaseURL": "https://smv-daq.firebaseio.com",
    "projectId": "smv-daq",
    "storageBucket": "bucket.appspot.com"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

# while (True):
  # trialNum = input("Trial to remove: ")
  # db.child("Trial " + trialNum).remove()
  # print("Deleted trial " + trialNum + "!")
  
for trialNum in range(200,219):
  print("Deleted trial " + str(trialNum) + "!")
  db.child("Trial " + str(trialNum)).remove()
