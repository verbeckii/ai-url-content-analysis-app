import requests
import socket
from transformers import AutoTokenizer
from urllib.parse import urlparse


def trim_string_to_tokens(input_string, max_tokens):
    tokenizer = AutoTokenizer.from_pretrained("gpt2")
    tokens = tokenizer.encode(input_string, add_special_tokens=False)

    if len(tokens) > max_tokens:
        trimmed_tokens = tokens[:max_tokens]
        trimmed_string = tokenizer.decode(
            trimmed_tokens, skip_special_tokens=True)
        return trimmed_string

    return input_string


def extract_domain(url):
    parsed_url = urlparse(url)
    return parsed_url.netloc


def get_ip_address(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except Exception:
        return None


def get_geolocation(ip_address):
    try:
        response = requests.get(f"https://ipinfo.io/{ip_address}/json")
        data = response.json()
        return data
    except requests.RequestException:
        return None
