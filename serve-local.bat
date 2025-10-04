@echo off
REM Local development script to run Jekyll without bundler issues
echo Moving Gemfile temporarily...
move Gemfile Gemfile.temp 2>nul
move Gemfile.lock Gemfile.lock.temp 2>nul

echo Starting Jekyll server...
jekyll serve --config _config.yml

echo Restoring Gemfile...
move Gemfile.temp Gemfile 2>nul
move Gemfile.lock.temp Gemfile.lock 2>nul
echo Done!