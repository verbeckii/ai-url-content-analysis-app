import os
import openai
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from url_analyzer.url_content_analyzer import url_content_analyzer


app = FastAPI()
load_dotenv()


class UrlAnalysisRequest(BaseModel):
    url: str


openai.api_key = os.getenv("OPENAI_API_KEY")


@app.post("/api/url-content-analyze")
def url_content_analyzer_router(request_body: UrlAnalysisRequest):
    result = url_content_analyzer(request_body.url)
    return result


@app.post("/api/url-analyze-ip")
def url_content_analyzer_router(request_body: UrlAnalysisRequest):
    result = url_content_analyzer(request_body.url)
    return result
