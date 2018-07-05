line_num = 0
open('out.txt').read.each_line do |line|
  puts "%03d. #{line}" % (line_num += 1)
  puts "#{line.split}"
end
