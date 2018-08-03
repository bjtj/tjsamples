p Dir["."]
p Dir["./*"]


items = Dir["./*"]

items.each do |file|
  puts "'" + file + "' is directory?"
  puts File::directory?(file)
end
