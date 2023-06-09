@ECHO
SET mypath=%~dp0
echo %mypath:~0,-1%
cd %mypath:~0,-1%
ECHO Start building ms-tender.
cd ../../
docker build -t localhost:5000/ms-tender .
ECHO Start pushing ms-tender.
docker push localhost:5000/ms-tender
cd .\deploy\ms-tender-deploy
ECHO Create sidecar components.
kubectl apply  -f .
@REM kubectl replace  -f .
PAUSE