@echo off
REM Switch to the drive (in case you're not on C:)
cd /d "C:\Users\TAU\My Folder\Github\vastuscan"

REM Start Python's built-in HTTP server on the default port 8000
python -m http.server

REM Keep the window open after you stop the server
pause
