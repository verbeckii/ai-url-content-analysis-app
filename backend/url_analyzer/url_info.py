from .helpers import get_ip_address
from .helpers import get_geolocation
from .helpers import extract_domain
import openai
import json


def url_info(url):
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "http://" + url
    domain = extract_domain(url)
    ip_address = get_ip_address(domain)
    geo_info = get_geolocation(ip_address)

    siteInfo = {
        "URL": url,
        "Domain": domain,
        "IP Address": ip_address,
        "Geolocation": geo_info
    }

    generatedChatGPTContent = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Analy url info:"},
            {"role": "user", "content": json.dumps(siteInfo)}
        ]
    )
    reply = generatedChatGPTContent['choices'][0]['message']['content']
    return reply
