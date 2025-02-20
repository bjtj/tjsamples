from selenium import webdriver

def main():
    driver = webdriver.Firefox()
    driver.get("http://selenium.dev")
    driver.quit()

if __name__ == '__main__':
    main()

