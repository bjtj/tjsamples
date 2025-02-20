import undetected_chromedriver as uc
from time import sleep

if __name__ == "__main__":

    # instantiate a Chrome browser
    driver = uc.Chrome(
        use_subprocess=False,
        headless=True,
    )

    # visit the target page
    driver.get("https://www.scrapingcourse.com/cloudflare-challenge")

    print('Wait 10 seconds...')
    # wait for the interstitial page to load
    sleep(10)

    print('Save screenshot...')
    # take a screenshot of the current page and save it
    driver.save_screenshot("cloudflare-challenge.png")

    print('Bye bye')
    # close the browser
    driver.quit()
