import ffmpeg
import numpy as np
from typing import Callable, Dict, Iterator, Literal, Optional
from pathlib import Path


def as_uint8(arr: np.ndarray) -> np.ndarray:
    if np.issubdtype(arr.dtype, np.integer):
        return arr.astype(np.uint8)
    if np.issubdtype(arr.dtype, np.floating):
        return (arr * 255).round().astype(np.uint8)
    raise NotImplementedError(f"Unsupported dtype: {arr.dtype}")


# https://ben.bolte.cc/matplotlib-videos
def write_video_ffmpeg(
    itr: Iterator[np.ndarray],
    out_file: str | Path,
    fps: int = 30,
    out_fps: int = 30,
    vcodec: str = "libx264",
    input_fmt: str = "rgb24",
    output_fmt: str = "yuv420p",
    quite=False
) -> None:
    """Function that writes an video from a stream of numpy arrays using FFMPEG.

    Args:
        itr: The image iterator, yielding images with shape (H, W, C).
        out_file: The path to the output file.
        fps: Frames per second for the video.
        out_fps: Frames per second for the saved video.
        vcodec: The video codec to use for the output video
        input_fmt: The input image format
        output_fmt: The output image format
    """

    first_img = next(itr)
    height, width, _ = first_img.shape

    stream = ffmpeg.input("pipe:", format="rawvideo", pix_fmt=input_fmt, s=f"{width}x{height}", r=fps)
    stream = ffmpeg.output(stream, str(out_file), pix_fmt=output_fmt, vcodec=vcodec, r=out_fps)
    if quite:
        stream = stream.global_args('-loglevel', 'quiet')
    stream = ffmpeg.overwrite_output(stream)
    stream = ffmpeg.run_async(stream, pipe_stdin=True)

    def write_frame(img: np.ndarray) -> None:
        stream.stdin.write(as_uint8(img).tobytes())

    # Writes all the video frames to the file.
    write_frame(first_img)
    for img in itr:
        write_frame(img)

    stream.stdin.close()
    stream.wait()
    print('Done.')


def dummy_image_generator(count=100) -> Iterator[np.array]:
    for _ in range(count):
        yield np.random.rand(480, 640, 3)


def main():
    write_video_ffmpeg(dummy_image_generator(226), "test.mp4", fps=226, out_fps=226, quite=True)


if __name__ == '__main__':
    main()
