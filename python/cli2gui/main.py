#!/usr/bin/env python
import argparse
from cli2gui import Cli2Gui



def main(args):
    print(args.arg)

@Cli2Gui(run_function=main, auto_enable=True)
def cli():
    parser = argparse.ArgumentParser(description="this is an example parser")
    parser.add_argument("arg", type=str, help="positional arg")
    args = parser.parse_args()
    main(args)


if __name__ == '__main__':
    cli()
