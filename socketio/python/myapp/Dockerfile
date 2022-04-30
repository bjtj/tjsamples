FROM python:3.10.4

WORKDIR /workspace
COPY . /workspace

RUN apt update && apt install -y curl && \
    curl -OL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py && \
    python get-poetry.py && \
    . $HOME/.poetry/env && \
    poetry install

EXPOSE 5000

ENV PATH="$PATH:/root/.poetry/bin"

ENTRYPOINT ["poetry", "run", "python", "server.py"]
