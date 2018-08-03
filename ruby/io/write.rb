open('out.txt', 'w') { |f|
  (1..100).each do |n|
    f.puts "%d #{n/10}" % n
  end
}
