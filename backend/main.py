import os
import openai
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from url_analyzer.url_content_analyzer import url_content_analyzer
from url_analyzer.url_info import url_info
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
load_dotenv()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


class UrlAnalysisRequest(BaseModel):
    url: str


openai.api_key = os.getenv("OPENAI_API_KEY")


@app.post("/api/analyze-url-content")
def url_content_analyzer_router(request_body: UrlAnalysisRequest):
    result = url_content_analyzer(request_body.url)
    return result


@app.post("/api/analyze-url-info")
def url_info_router(request_body: UrlAnalysisRequest):
    result = url_info(request_body.url)
    return result
