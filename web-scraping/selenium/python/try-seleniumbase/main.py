from seleniumbase import Driver

# initialize the driver in GUI mode with UC enabled
driver = Driver(uc=True, headless=False)

# set the target URL
url = "https://www.scrapingcourse.com/cloudflare-challenge"

# open URL using UC mode with 6 second reconnect time to bypass initial detection
driver.uc_open_with_reconnect(url, reconnect_time=6)

# attempt to click the CAPTCHA checkbox if present
driver.uc_gui_click_captcha()

# take a screenshot of the current page and save it
driver.save_screenshot("cloudflare-challenge.png")

# close the browser and end the session
driver.quit()
