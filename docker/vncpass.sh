#! /bin/bash

/usr/bin/expect <<EOF
spawn vncpasswd
expect "Password:"
send "android\r"
expect "Verify:"
send "android\r"
expect "Would you like to enter a view-only password (y/n)?"
send "n\r"
expect eof
exit
EOF