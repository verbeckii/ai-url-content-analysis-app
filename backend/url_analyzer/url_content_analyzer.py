import requests
import openai
from bs4 import BeautifulSoup
from .helpers import trim_string_to_tokens


def url_content_analyzer(url: str):
    try:
        max_tokens = 4000
        if not url.startswith("http://") and not url.startswith("https://"):
            url = "http://" + url
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        url_content = soup.get_text()
        trimmed_url_content = trim_string_to_tokens(url_content, max_tokens)
        generatedChatGPTContent = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Generate short text content from parsed content from website"},
                {"role": "user", "content": trimmed_url_content}
            ]
        )
        reply = generatedChatGPTContent['choices'][0]['message']['content']
        return reply
    except Exception:
        return 'Invalid URL'
