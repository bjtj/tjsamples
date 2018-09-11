require 'torch'

-- for naming convenience
do
   -- creates a class "Foo"
   local Foo = torch.class('Foo')

   -- initializer
   function Foo:__init()
      self.contents = "this is some text"
   end

   -- a method
   function Foo:print()
      print(self.contents)
   end

   -- another one
   function Foo:bip()
      print('bip')
   end
end

-- now create an instance of Foo
foo = Foo()

-- try it out
foo:print()

-- create a class torch.Bar which
-- inherits from Foo

do
   local Bar, parent = torch.class('torch.Bar', 'Foo')

   -- initializer
   function Bar:__init(stuff)
      -- call the parent initializer on ourself
      parent.__init(self)

      -- do some stuff
      self.stuff = stuff
   end

   -- a new method
   function Bar:boing()
      print('boing!')
   end

   -- override parent's method
   function Bar:print()
      print(self.contents)
      print(self.stuff)
   end
end


-- create a new instance and use it
bar = torch.Bar("ha ha!")
bar:print()
bar:boing()
bar:bip()
