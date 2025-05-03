FROM public.ecr.aws/lambda/python:3.12

# Copy requirements.txt
COPY requirements.txt ${LAMBDA_TASK_ROOT}

# Install the specified packages
RUN pip install -r requirements.txt

RUN dnf install -y tar gzip
RUN curl -LO https://github.com/whyvl/wireproxy/releases/download/v1.0.9/wireproxy_linux_amd64.tar.gz && \
  tar xf wireproxy_linux_amd64.tar.gz && \
  rm wireproxy_linux_amd64.tar.gz && \
  mv wireproxy /bin/wireproxy

# Copy function code
COPY haaska.py config.json wireguard.conf ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "haaska.event_handler" ]