# https://stackoverflow.com/a/19098791

import multiprocessing as mp


def init_worker(mps, fps, cut):
    global memorizedPaths, filepaths, cutoff
    global DG
    print('process initiailzing {}'.format(mp.current_process()))
    memorizedPaths, filepaths, cutoff = mps, fps, cut
    DG = 1                      #

def work(item):
    _all_simple_paths_graph(DG, cutoff, item, memorizedPaths, filepaths)


def _all_simple_paths_graph(DG, cutoff, item, memorizedPaths, filepaths):
    pass                        # 


def main():
    m = mp.Manager()
    memorizedPaths = m.dict()
    filepaths = m.dict()
    cutoff = 1
    p = mp.Pool(initializer = init_worker, initargs = (memorizedPaths, filepaths, cutoff))
    degreelist = range(100000)
    for _ in p.imap_unordered(work, degreelist, chunksize = 500):
        pass

    p.close()
    p.join()

if __name__ == '__main__':
    main()
