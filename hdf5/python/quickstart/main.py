import h5py
import numpy as np
import os

if os.path.exists('mytestfile.hdf5'):
    os.remove('mytestfile.hdf5')

# write

f = h5py.File('mytestfile.hdf5', 'w')
dset = f.create_dataset('mydatset', (100,), dtype='i')

f.close()

with h5py.File('mytestfile.hdf5', 'w') as f:
    dset = f.create_dataset('mydataset', (100,), dtype='i')
    dset[...] = np.arange(100)
    print('dset[0]: {}'.format(dset[0]))

# read

f = h5py.File('mytestfile.hdf5', 'r')

print('dset.name: {}'.format(dset.name))
print('f.name: {}'.format(f.name))
print('list(f.keys()): {}'.format(list(f.keys())))
dset = f['mydataset']
print('dset.shape: {}'.format(dset.shape))
print('dset.dtype: {}'.format(dset.dtype))
print('dset[0]: {}'.format(dset[0]))
print('dset[10]: {}'.format(dset[10]))
print('dset[0:100:10]: {}'.format(dset[0:100:10]))


f.close()

# Groups and hierarchical organization

f = h5py.File('mytestfile.hdf5', 'a')
grp = f.create_group('subgroup')

dset2 = grp.create_dataset('another_dataset', (50,), dtype='f')
print('dset2.name: {}'.format(dset2.name))

# dset3 = grp.create_dataset('subgroup2/dataset_three', (10,), dtype='i')
#  => `/subgroup/subgroup2/dataset_three`
dset3 = grp.create_dataset('/subgroup2/dataset_three', (10,), dtype='i')
print('dset3.name: {}'.format(dset3.name))

dataset_three = f['subgroup2/dataset_three']
for name in f:
    print(name)

print('"mydataset" in f: {}'.format("mydataset" in f))
print('"somethingelse" in f: {}'.format("somethingelse" in f))

# Attributes

dset = f['mydataset']

dset.attrs['temperature'] = 99.5
print('dset.attrs["temperature"]: {}'.format(dset.attrs['temperature']))

print('"temperature" in dset.attrs: {}'.format('temperature' in dset.attrs))

f.close()

os.remove('mytestfile.hdf5')
