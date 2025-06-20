

from app.scraper import indeed_scraper
# main.py
from fastapi import FastAPI
from app.scraper.indeed_scraper import indeed_scraper

app = FastAPI()

@app.get("/indeed_scraper")
def trigger():
    result = indeed_scraper()
    return {"status": "success", "data": result}