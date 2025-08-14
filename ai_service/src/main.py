# ai_service/src/main.py
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
import cv2
import numpy as np
from deepface import DeepFace
import joblib

app = FastAPI()

# Load pre-trained matching model
model = joblib.load("models/matching_model.pkl")

class MatchRequest(BaseModel):
    user1_id: str
    user2_id: str

@app.post("/match-score")
def get_match_score(req: MatchRequest):
    score = np.random.rand()  # Replace with real model prediction
    return {"score": float(score), "user1_id": req.user1_id, "user2_id": req.user2_id}

@app.post("/verify-face")
async def verify_face(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    cv2.imwrite("/tmp/temp.jpg", img)

    try:
        result = DeepFace.verify(img1_path="/tmp/temp.jpg", img2_path="/tmp/temp.jpg")
        return {"verified": result["verified"], "confidence": 1 - result["distance"]}
    except Exception as e:
        return {"error": str(e), "verified": False}