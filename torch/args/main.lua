require 'torch'

local cmd = torch.CmdLine()
-- usage
cmd:text()
cmd:text('main')
cmd:text()
cmd:text('Options:')
-- options
cmd:option('-outDir', './out', 'output path')
cmd:option('-flag', true, 'flag option')
-- usage
cmd:text()

local opt = cmd:parse(arg or {})
print(opt)
