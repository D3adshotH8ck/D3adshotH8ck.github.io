---
layout: post
title: "Subnetting Cheat Table – Quick Reference"
date: 2025-05-25
---

While studying for my CCNA, I found myself constantly flipping back and forth to reference subnet masks and CIDR notations. 

Eventually, I found this cheat table — and it’s now stuck on the wall above my desk. If you’re getting subnetting drilled into your head daily, this might help you too.

### Subnetting Cheat Table

| Group Size (IP Host Range / Block Size)| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
|----------------------------------------|-----|-----|-----|-----|-----|-----|-----|-----|
| Subnet Mask                            | 128 | 192 | 224 | 240 | 248 | 252 | 254 | 255 |
| CIDR Notation /4th Octet               | /25 | /26 | /27 | /28 | /29 | /30 | /31 | /32 |
| CIDR Notation /3rd Octet               | /17 | /18 | /19 | /20 | /21 | /22 | /23 | /24 |
| CIDR Notation /2nd Octet               | /9  | /10 | /11 | /12 | /13 | /14 | /15 | /16 |
| CIDR Notation /1st Octet               | /1  | /2  | /3  | /4  | /5  | /6  | /7  | /8  |

### How I Use It

- Quickly identify subnet mask values for different CIDR ranges
- Understand block sizes per octet
- Speed up subnetting questions in labs and exams

---

> 💡 *Stick this table in your notes or keep it open during practice — you'll thank yourself later.*

More subnetting deep dives to come. Happy hacking. -D3
