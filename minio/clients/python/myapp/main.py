import os
from minio import Minio
from minio.error import S3Error
from dotenv import load_dotenv

load_dotenv('./.env')

MINIO_URL = os.getenv('MINIO_URL', 'localhost:9000')
ACCESS_KEY = os.getenv('ACCESS_KEY', 'youraccesskey')
SECRET_KEY = os.getenv('SECRET_KEY', 'yoursecretkey')


def main():
    client = Minio(
        MINIO_URL,
        access_key=ACCESS_KEY,
        secret_key=SECRET_KEY,
        secure=False
    )

    if client.bucket_exists("my-bucket"):
        print("my-bucket exists")
    else:
        print("my-bucket does not exist")
        client.make_bucket("my-bucket")

    client.remove_bucket("my-bucket")


if __name__ == '__main__':
    try:
        main()
    except S3Error as exc:
        print('error occurred.', exc)
