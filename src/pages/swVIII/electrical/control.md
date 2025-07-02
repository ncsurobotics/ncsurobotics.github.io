---
title: Control
sort: 2
---

#### Control Board
![Control Board](/assets/images/electrical/controlboard.png){ .w-[40vw] }

The [Control Board](https://mb3hel.github.io/AUVControlBoard/) handles vehicle locomotion. It receives high level movement commands from the Jetson Nano, and converts them into individual PWM signals to control the power output of the thrusters. It utilizes a PID controller with state information from the onboard IMU to adjust thruster setpoints.

#### Electronic Speed Controllers (ESCs)
The onboard ESCs receive PWM signals from the control board, which encode thruster speed commands, and convert them into current through the motors three phases.
