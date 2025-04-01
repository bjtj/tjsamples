import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt

file_path = 'input.mp3'
y, sr = librosa.load(file_path, sr=None)

# Perform beat tracking
tempo_dynamic = librosa.feature.tempo(y=y, sr=sr, aggregate=None, std_bpm=4)

tempo, beats_dynamic = librosa.beat.beat_track(y=y, sr=sr, units='time',
                                               bpm=tempo_dynamic, trim=False)

fig, ax = plt.subplots()
librosa.display.waveshow(y=y, sr=sr, ax=ax, color='k', alpha=0.7)
ax.vlines(beats_dynamic, -1, -0.75, label='Dynamic tempo beat estimates', color='b', linestyle='--')
ax.legend()
