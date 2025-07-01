---
title: Dry Run Procedure
discover:
  title: Dry Run Procedure
permalink: /dryrun/index.html
description: Dry Run Procedure
layout: page
---
*[MEB]: Main Electronics Board
*[MSB]: Manipulation Systems Board
*[LBB]: Load Balancing Board
*[SSH]: Secure Shell
*[FPGA]: Field-programmable gate array
> [!WARNING]
> Unless you really know what you are doing, please use the team laptop instead of your personal device. It is known to work and most troubleshooting instructions assume that you are using it

## Connect to the system
1. Connect BOTH batteries to the robot (**this is important!** LBB is known to misbehave a little if the robot is powered on with only one battery present!)
2. Power the robot on using the system switch
3. Connect the tether to the end cap and the other end to your computer
4. Wait up to 2 minutes for your computer to connect to the Jetson by ethernet. Once connected, continue. Otherwise, see [Jetson Troubleshooting](./troubleshooting/jetson.md#checking-connection).
5. SSH into the Jetson by running the following command in a terminal (works on windows too):
	 ```bash
	 ssh sw8@192.168.2.5
	 ```
	 1. If prompted about a "fingerprint" enter "yes"
	 2. Enter the password when prompted (ask other members if you don't know the password)
	 3. Once you've entered the password, you'll have a ssh session connected to the Jetson. You'll see a shell from the Jetson in your terminal now.

> [!TIP] Example Output
> ![](/assets/images/dryrun/ssh_login.png)

## Verify everything is connected to the Jetson
> [!IMPORTANT]
> Run the following commands on the Jetson over the ssh connection

> [!NOTE]
> The output will vary slightly because:
> - These names include serial numbers
> - The control board may be either Adafruit or STMicroElectronics
> - Peripheral devices like acoustics may not be installed

First make sure all necessary devices are present:
```bash
ls /dev/serial/by-id/
```

You should see several devices. Make sure the following exist:

- **1** Control Board
- **2** Texas Instruments devices (MEB, it's actually just one device but shows up as two)

If acoustics is installed, make sure the following exist:

- **2** Digilent devices (Acoustics FPGA, it's actually just one device, but shows up as two).

> [!TIP] Example Output
> ![](/assets/images/dryrun/ls_serial.png)
> As you can see:
> 1. The second device is our control board (it contains "Control_Board" in its name)
> 2. The third and fourth devices are our two Texas Instruments devices (they contain "Texas_Instruments" in ther names)
> 3. The acoustics FPGA is not connected, so no device appears (but if it were, it would contain "Digilent" in its name)

Then, make sure cameras are connected:
```bash
v4l2-ctl --list-devices
```

> [!TIP] Example Output
> ![](/assets/images/dryrun/list_cams.png)
> You should see two devices labeled `FrontCam` and `BottomCam` (two different sections as shown above!)

## Test Arm & Kill
1. Arm the robot using the hardware switch
2. The thrusters should beep 5 times
	 1. 3 short beeps in rising pitch
	 2. 1 long beep at a lower pitch
	 3. 1 long beep at a higher pitch
3. Wait 3 seconds
4. Disarm the robot
5. Wait 3 seconds
4. Rearm the robot
5. The thrusters should beep again

If you do not hear all 5 beeps when arming, see [troubleshooting details](./troubleshooting/arm.md)	

If your SSH connection to the Jetson closes unexpectedly, [see here](./troubleshooting/jetson.md#unexpected-reboot-when-arming)

## Motor Test
> [!NOTE]
> This assumes `AUVControlBoard` interface scripts are located at `~/AUVControlBoard` on the Jetson.
>
> The correct version of the scripts should already be selected. If you need to change versions, do the following:
> 1. Get the name of the version you want from [this page](https://github.com/ncsurobotics/AUVControlBoard/tags)
> 2. Run the following commands, replacing `VERSION` with the name of the version you want:
>     ```bash
>     cd ~/AUVControlBoard
>     git checkout VERSION
>     cd ~
>     ```

First, run the following commands:
```bash
export CB_PORT=$(realpath /dev/serial/by-id/*Control_Board*)
echo $CB_PORT
```

This should print out something like `/dev/ttyACM0`, where the `0` is any number. 
If it does not, the Jetson is not recognizing that a control board is connected. You should start by rebooting.

Next, run the following commands
```bash
cd ~/AUVControlBoard/iface
./launch.py -p $CB_PORT example/motor_test.py
```

The final command  is a script that will prompt for dry run settings (speed and duration):

1. When prompted for speed, press enter to use the default setting
2. When prompted for duration, press enter to use the default setting
3. Then, type each thruster number followed by enter and make sure that the thruster moves
4. After testing all thrusters, type "q" and press enter to exit.

> [!NOTE]
> If you get error 255 from the control board scripts, this indicates a timeout occurred. This is likely not a communication error with the control board. Just re-run the script and try again. It should work.

If any of the following occur, fix them!

- Wrong thruster numbers moving
- Thrusters not moving when their number is entered
- Thrusters moving "weakly" or "clicking" while moving (usually means power pole block is not seated properly)

## LBB Test
1. Disconnect one battery
2. Repeat the motor test
3. Plug the disconnected battery back in
4. Disconnect the OTHER battery
5. Repeat the motor test

The motor test should work off either battery on its own. If it is not, the LBB may not be working or one battery may not be working (check fuses, voltage on fischer, etc)

## Setting MEB Port
Run the following to determine what communication port MEB is on:
```bash
export PORT=$(realpath /dev/serial/by-id/usb-Texas_Instruments_MSP_Tools_Driver_*-if02)
echo $PORT
```
This should output something like `/dev/ttyACM1`, where the 1 can be any number. If it does not, see [MEB Troubleshooting](./troubleshooting/meb.md#port).

## MEB Communication & Voltage Monitor
> [!NOTE]
> This assumes the [MEB software](https://github.com/ncsurobotics/SW8E-MEB-Software) scripts folder is located at `~/SW8E-MEB-Software/scripts/` on the Jetson

Run the following command (the `PORT` variable we exported in [Setting MEB Port](#setting-meb-port) is used):
```bash
cd ~/SW8E-MEB-Software/scripts/
python3 read_sys_voltage.py $PORT 57600
```

> [!NOTE]
> The voltage monitor is currently not calibrated, so do not worry about ensuring that the correct battery voltage is being read.You should still complete this step to test communications with MEB.

Make sure correct battery voltage is being read. Hold CTRL and press C (CTRL+C) to exit the program.

If the wrong voltage is read, the voltage monitor is not working.

If you get serial communication errors, MEB may not be communicating properly (or you may be using the wrong port).

## MSB
> [!NOTE]
> This assumes the [MEB software](https://github.com/ncsurobotics/SW8E-MEB-Software) scripts folder is located at `~/SW8E-MEB-Software/scripts/` on the Jetson

> [!IMPORTANT]
> You will need dropper makers loaded to observe the correct behavior, but loading torpedoes is discouraged

Run:
```bash
cd ~/SW8E-MEB-Software/scripts/
```
The MEB is used to communicate with MSB, thus the `PORT` variable we exported in [Setting MEB Port](#setting-meb-port) is used in the following commands. You should be able to just copy and pase these commands.

Run each of the following commands:

1. Reset (Droppers should hold markers and torpedoes are in loaded position)
	 ```bash
	 python3 msb_command.py $PORT 57600 reset
	 ```
2. Drop marker 1
   ```bash
   python3 msb_command.py $PORT 57600 d1_trig
   ```
3. Drop marker 2
   ```bash
   python3 msb_command.py $PORT 57600 d2_trig
   ```
4. Fire torpedo 1
   ```bash
   python3 msb_command.py $PORT 57600 t1_trig
   ```
5. Fire torpedo 2
   ```bash
   python3 msb_command.py $PORT 57600 t2_trig
   ```
6. Reset (Droppers hold markers and torpedoes return to loaded position again)
   ```bash
   python3 msb_command.py $PORT 57600 reset
   ```

## Camera Stream Test
> [!NOTE]
> This assumes the [Cam test scripts](https://github.com/ncsurobotics/SW8E-MEB-Software) folder is located at `~/SW8S-CamTest` on the Jetson

> [!NOTE]
> *[RTSP]: Real Time Streaming Protocol
> The RTSP server (mediamtx) is automatically started by a systemd user service.
>
> Run the following to check the status of the service (press 'q' to exit):
> ```bash
> systemctl --user status mediamtx.service
> ```

Run:
```bash
~/SW8S-CamTest/startstreams.sh
```

> [!IMPORTANT]
> This script will not exit on its own unless it fails. If it exits on its own, the cameras are probably not connected!

Next, you need to use [VLC](https://www.videolan.org/vlc/) on your computer to view the streams and make sure they are working. Note that the streams will be "delayed" when viewing with VLC, but this is OK. To view with less latency, you can install `mpv` and use the `playstreams.sh` scripts in the SW8S-CamTest repo (if you don't know what this means, just test with VLC).

To view with VLC:

1. Leave the ssh session open
2. Launch VLC
3. Media > Open Network Stream
4. Enter `rtsp://192.168.2.5:8554/front.mp4`
5. Click "Play"
6. Wait until you see the stream
7. Media > Open Network Stream
8. Enter `rtsp://192.168.2.5:8554/bottom.mp4`
9. Click "Play"
10. Wait until you see the stream
11. Close VLC

## Disarm and Power Off Safely
1. Disarm the robot using the hardware switch
2. Run the following command:
   ```bash
   sudo poweroff
   ```
3. Wait 30 seconds
4. Turn the system off with the system switch
