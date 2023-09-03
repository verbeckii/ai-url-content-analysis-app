from .helpers import get_ip_address
from .helpers import get_geolocation
from .helpers import extract_domain


def url_info(url):
    if not url.startswith("http://") and not url.startswith("https://"):
        url = "http://" + url
    domain = extract_domain(url)
    ip_address = get_ip_address(domain)
    geo_info = get_geolocation(ip_address)

    return {
        "URL": url,
        "Domain": domain,
        "IP Address": ip_address,
        "Geolocation": geo_info
    }
