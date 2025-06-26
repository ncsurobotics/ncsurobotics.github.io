---
title: Logic
sort: 1
---
#### Nvidia Jetson
<img src="/assets/images/electrical/jetson.jpg" alt="Nvidia Jetson" style="width: 40vw; object-fit: contain"/>

The Jetson is SW8's primary computational unit. It runs the robot's high-level software and serves as the programmer's interface to the electronics system. 
#### Main Electronics Board (MEB) 
<img src="/assets/images/electrical/meb.png" alt="MEB" style="width: 40vw; object-fit: contain"/>

The [MEB](https://github.com/ncsurobotics/SW8E-MEB) is the primary logic controller for the electronics system. Among its functions are:
- Receiving user commands from the Jetson via UART
- Sending actuator commands to the Manipulation Systems Board via I2C
- Power Switching
- Controlling External LEDs
- Monitoring Leak Detectors
#### Manipulation Systems Board (MSB)
<img src="/assets/images/electrical/msb.png" alt="MSB" style="width: 40vw; object-fit: contain"/>

The purpose of the [MSB](https://github.com/ncsurobotics/SW8E-MSB) is to drive SW8's external mechanical systems. This entails sending PWM signals to the torpedo launcher servos and a logic signal to enable/disable the dropper's electromagnet.

