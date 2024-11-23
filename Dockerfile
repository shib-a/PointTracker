FROM nginx:latest
LABEL authors="User"

ENTRYPOINT ["top", "-b"]

