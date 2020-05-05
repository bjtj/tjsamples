from pyv4l2.frame import Frame
from pyv4l2.control import Control

frame = Frame('/dev/video0')
frame_data = frame.get_frame()
control = Control("/dev/video0")
print(control.get_controls())
print(control.get_control_value(9963776))
print(control.set_control_value(9963776, 8))
