# Jibble-Auto
Contains scripts for automatically clocking in and out of Jibble. Written in javascript and for mac only.
To use script with windows, download chromedriver for windows and replace with the one in the folder.

You can add cron jobs to run this script at particular times of day. For example: 

0 8 * * 1-5 /path/to/node /path/to/script. This runs the script every 8am from monday to friday.

# NOTE
When setting up cron jobs, make sure the script is not located in a private location e.g. Desktop, documents, downloads

Move script to a public location e.g. /usr/local/bin
