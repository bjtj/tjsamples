import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt

file_path = 'input.mp3'
y, sr = librosa.load(file_path, sr=None)

# Perform beat tracking
tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)

# Convert beat frames to time
beat_times = librosa.frames_to_time(beat_frames, sr=sr)

# Print detected tempo and beats
print(f"Estimated Tempo: {tempo[0]:.2f} BPM")
print(f"Beat Times (seconds): {beat_times}")

# Plot waveform with beat markers
plt.figure(figsize=(10, 4))
librosa.display.waveshow(y, sr=sr, alpha=0.6)
plt.vlines(beat_times, ymin=-1, ymax=1, color='r', linestyle='--', label="Beats")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.title(f"Beat Tracking - Tempo: {tempo[0]:.2f} BPM")
plt.legend()
plt.show()