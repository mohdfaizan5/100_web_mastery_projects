# REGULAR EXPRESSIONS:

"""
.   any character except a new line
*   0 or more repetitions
+   1 or more repetitions
?   0 or 1 repetition
{m} m repetitions
{m, n} m-n repetitions
"""


"""
\d    decimal digit
\D    not a decimal digit
\s    whitespace characters
\S    not a whitespace character
\w    word character, as well as numbers and the underscore
\W    not a word character

A|B     either A or B
(...)   a group
(?:...) non-caputuring version
"""


email = input("What's your email? ").strip()

if "@" in email:
    print("Valid")
else:
    print("Invalid")


# 

email = input("What's your email? ").strip()

if "@" in email and "." in email:
    print("Valid")
else:
    print("Invalid")


# Improvement
email = input("What's your email? ").strip()

username, domain = email.split("@")

if username and "." in domain:
    print("Valid")
else:
    print("Invalid")


# 

email = input("What's your email? ").strip()

username, domain = email.split("@")

if username and domain.endswith(".edu"):
    print("Valid")
else:
    print("Invalid")


#
import re

email = input("What's your email? ").strip()

if re.search("@", email):
    print("Valid")
else:
    print("Invalid")

# 
email = input("What's your email? ").strip()

if re.search(".+@.+", email):
    print("Valid")
else:
    print("Invalid")


# 
email = input("What's your email? ").strip()

if re.search(".+@.+.edu", email):
    print("Valid")
else:
    print("Invalid")


#
email = input("What's your email? ").strip()

if re.search(".+@.+\.edu", email):
    print("Valid")
else:
    print("Invalid")


#
email = input("What's your email? ").strip()

if re.search(r".+@.+\.edu", email):
    print("Valid")
else:
    print("Invalid")


#
import re

email = input("What's your email? ").strip()

if re.search(r"^.+@.+\.edu$", email):
    print("Valid")
else:
    print("Invalid")


"""
^   matches the start of the string
$   matches the end of the string or just before the newline at the end of the string

"""