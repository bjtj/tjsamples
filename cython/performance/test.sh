#!/bin/bash

echo " -*- pure python -*-"
python3 -m timeit -s "import StdDev; import numpy as np; a = [float(v) for v in range(1000000)]" "StdDev.pyStdDev(a)"
echo " -*- numpy -*-"
python3 -m timeit -s "import StdDev; import numpy as np; a = np.arange(1e6)" "StdDev.npStdDev(a)"
echo " -*- cython native -*-"
python3 -m timeit -s "import cyStdDev; import numpy as np; a = np.arange(1e6)" "cyStdDev.cyStdDev(a)"
echo " -*- optimized cython -*-"
python3 -m timeit -s "import cyStdDev; import numpy as np; a = np.arange(1e6)" "cyStdDev.cyOptStdDev(a)"
echo " -*- cython calling c -*-"
python3 -m timeit -s "import cyStdDev; import numpy as np; a = np.arange(1e6)" "cyStdDev.cStdDev(a)"
