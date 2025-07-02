---
title: Computer Vision
sort: 1
---
We use a combination of traditional and machine learning based computer vision pipelines.

Traditional CV utilizing edge and contour detection is suitable for simple tasks, such as following a marked path. 
!["An orange path prop with a green rectangle drawn to fit around it"](/assets/images/software/simple_path_detection.png "A simple detection of a path"){ .w-[40vw] .mr-auto .ml-auto .block }

For tasks with complex features, neural networks are more suitable. They enable extracting distinct features in complex images, such as torpedo targets. We use the YOLOv5 nano model.
!["Several red and white pvc poles with bounding boxes drawn around them"](/assets/images/software/slalom_detection.png "Detections performed by a YOLOv5 model"){ .w-[40vw] .mr-auto .ml-auto .block }
