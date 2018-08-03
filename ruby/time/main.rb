puts "Current time: " + Time.new.inspect


# 
t1 = Process.clock_gettime(Process::CLOCK_MONOTONIC, :microsecond)
p t1
sleep 1
t2 = Process.clock_gettime(Process::CLOCK_MONOTONIC, :microsecond)
p (t2 - t1) / 1000

t3 = Process.clock_gettime(Process::CLOCK_MONOTONIC, :millisecond)
p t3
