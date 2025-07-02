---
title: Power
sort: 0
---

#### Batteries
![Battery](/assets/images/electrical/battery.jpg){ .w-[40vw] }

SW8 utilizes two 4s 10,000mAH LiPo batteries to power the entire system. The LiPo chemistry was chosen for its high energy density and relatively constant voltage output throughout the discharge cycle.
#### Load Balancing Board (LBB)
![LBB](/assets/images/electrical/lbb.png){ .w-[40vw] }

The use of two batteries enables high performance output for longer periods of time. However, the batteries cannot simply be wired in parallel due to safety concerns. The Load Balancing Board uses an ideal diode controller to safely split the robot's current draw between the batteries.

#### Solid State Relays
Just as important as supplying power is controlling **when** power is supplied. SW8 uses two solid state relays wired in series to control power input to the thrusters. Each relay acts as a switch, one controlled by a physical toggle on the outside of the robot, and one by a software-actuated signal. Their "AND" configuration ensures that the thrusters are powered only when allowed by **both** of those sources. 

#### Regulators
SW8 uses an array of voltage regulators to step the power down from battery voltage (~15.2V) down to the voltage levels required by individual components. This includes several 5V UBEC regulators, and a 12V buck-boost converter. In order to reduce the transient effects of thruster inrush current on the primary computer (NVidia Jetson), it is powered by a 12V SEPIC and 5V buck-boost in series.
