package com.tjapp.cam

import android.Manifest
import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.graphics.*
import android.hardware.camera2.*
import android.os.Build
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v4.content.ContextCompat
import android.util.Log
import android.util.Size
import android.view.*
import java.util.*
import java.util.concurrent.Semaphore

class CameraFragment : Fragment() {


    private final var REQUEST_CAMERA_PERMISSION = 1
    private var cameraDevice: CameraDevice? = null
    private lateinit var previewSize: Size
    private lateinit var cameraId: String
    private var textureView: TextureView? = null
    private lateinit var previewRequestBuilder: CaptureRequest.Builder
    private lateinit var previewRequest: CaptureRequest
    private var captureSession: CameraCaptureSession? = null
    private var state = STATE_PREVIEW
    private var sensorOrientation = 0


    private var surfaceTextureListener = object : TextureView.SurfaceTextureListener {
        override fun onSurfaceTextureAvailable(texture: SurfaceTexture?, w: Int, h: Int) {
            Log.d(TAG, "onSurfaceTextureAvailable")
            openCamera(w, h)
        }

        override fun onSurfaceTextureSizeChanged(texture: SurfaceTexture?, w: Int, h: Int) {
            Log.d(TAG, "onSurfaceTextureSizeChanged")
        }

        override fun onSurfaceTextureDestroyed(texture: SurfaceTexture?): Boolean {
            Log.d(TAG, "onSurfaceTextureDestroyed")
            return true
        }

        override fun onSurfaceTextureUpdated(texture: SurfaceTexture?) {
            Log.d(TAG, "onSurfaceTextureUpdated")
        }
    }

    private val captureCallback = object : CameraCaptureSession.CaptureCallback() {

        private fun process(result: CaptureResult) {
            when (state) {
                STATE_PREVIEW -> Unit // Do nothing when the camera preview is working normally.
                STATE_WAITING_LOCK -> capturePicture(result)
                STATE_WAITING_PRECAPTURE -> {
                    // CONTROL_AE_STATE can be null on some devices
                    val aeState = result.get(CaptureResult.CONTROL_AE_STATE)
                    if (aeState == null ||
                            aeState == CaptureResult.CONTROL_AE_STATE_PRECAPTURE ||
                            aeState == CaptureRequest.CONTROL_AE_STATE_FLASH_REQUIRED) {
                        state = STATE_WAITING_NON_PRECAPTURE
                    }
                }
                STATE_WAITING_NON_PRECAPTURE -> {
                    // CONTROL_AE_STATE can be null on some devices
                    val aeState = result.get(CaptureResult.CONTROL_AE_STATE)
                    if (aeState == null || aeState != CaptureResult.CONTROL_AE_STATE_PRECAPTURE) {
                        state = STATE_PICTURE_TAKEN
//                        captureStillPicture()
                        Log.d(TAG, "capture still picture")
                    }
                }
            }
        }

        private fun capturePicture(result: CaptureResult) {
            val afState = result.get(CaptureResult.CONTROL_AF_STATE)
            if (afState == null) {
                Log.d(TAG, "capture still picture")
            } else if (afState == CaptureResult.CONTROL_AF_STATE_FOCUSED_LOCKED
                    || afState == CaptureResult.CONTROL_AF_STATE_NOT_FOCUSED_LOCKED) {
                // CONTROL_AE_STATE can be null on some devices
                val aeState = result.get(CaptureResult.CONTROL_AE_STATE)
                if (aeState == null || aeState == CaptureResult.CONTROL_AE_STATE_CONVERGED) {
                    state = STATE_PICTURE_TAKEN
                    Log.d(TAG, "capture still picture")
                } else {
                    Log.d(TAG, "run precapture sequence")
                }
            }
        }

        override fun onCaptureProgressed(session: CameraCaptureSession,
                                         request: CaptureRequest,
                                         partialResult: CaptureResult) {
            process(partialResult)
        }

        override fun onCaptureCompleted(session: CameraCaptureSession,
                                        request: CaptureRequest,
                                        result: TotalCaptureResult) {
            process(result)
        }

    }


    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?):
            View? = inflater.inflate(R.layout.fragment_camera, container, false)

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        Log.d(TAG, "onViewCreated")
        textureView = activity!!.findViewById(R.id.textureView) as TextureView
    }

    @SuppressLint("MissingPermission")
    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        Log.d(TAG, "onActivityCreated")
    }

    override fun onDestroyView() {
        super.onDestroyView()
        Log.d(TAG, "onDestroyView")
    }

    override fun onResume() {
        super.onResume()
        Log.d(TAG, "onResume")

        checkCameraHardware()

        if (textureView!!.isAvailable) {
            openCamera(textureView!!.width, textureView!!.height)
        } else {
            textureView!!.surfaceTextureListener = surfaceTextureListener
        }
    }

    fun openCamera(width: Int, height: Int) {

        setUpCameraOutputs(width, height)
        configureTransform(width, height)

        var manager = activity?.getSystemService(Context.CAMERA_SERVICE) as CameraManager
        for (cameraId in manager.cameraIdList) {
            Log.d(TAG, "camera: " + cameraId)
        }

        manager.openCamera(cameraId, stateCallback, null)
    }

    override fun onPause() {
        super.onPause()

        Log.d(TAG, "onPause")
    }

    private fun checkCameraHardware(): Boolean {
        var permission = ContextCompat.checkSelfPermission(activity!!.applicationContext, Manifest.permission.CAMERA)
        Log.d(TAG, "permission: " + permission)
        if (permission != PackageManager.PERMISSION_GRANTED) {
            requestCameraPermission()
        }
        return true
    }

    private fun requestCameraPermission() {
        if (Build.VERSION.SDK_INT >= 23) {
            if (shouldShowRequestPermissionRationale(Manifest.permission.CAMERA)) {
                Log.d(TAG, "previously rejected - we must need camera permission")
                ConfirmDialog().show(childFragmentManager, "dialog")
                Log.d(TAG, "confirmed?")
            } else {
                Log.d(TAG, "request permissions")
                requestPermissions(arrayOf(Manifest.permission.CAMERA), REQUEST_CAMERA_PERMISSION)
            }
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        if (requestCode == REQUEST_CAMERA_PERMISSION) {
            if (grantResults.size != 1 || grantResults[0] != PackageManager.PERMISSION_GRANTED) {
                Log.d(TAG, "permission not granted")
                activity?.finish()
            }
        } else {
            super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        }
    }

    private val cameraOpenCloseLock = Semaphore(1)

    private val stateCallback = object : CameraDevice.StateCallback() {

        override fun onOpened(cameraDevice: CameraDevice) {
            Log.d(TAG, "onOpened")
            cameraOpenCloseLock.release()
            this@CameraFragment.cameraDevice = cameraDevice

            var texture = textureView!!.surfaceTexture

            Log.d(TAG, "textureView: " + textureView)
            Log.d(TAG, "texture: " + texture)

            texture.setDefaultBufferSize(previewSize.width, previewSize.height)

            var surface = Surface(texture)

            previewRequestBuilder = cameraDevice!!.createCaptureRequest(CameraDevice.TEMPLATE_PREVIEW)
            previewRequestBuilder.addTarget(surface)

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                cameraDevice.createCaptureSession(Arrays.asList(surface), object : CameraCaptureSession.StateCallback() {
                    override fun onConfigured(session: CameraCaptureSession?) {

                        Log.d(TAG, "onConfigured")

                        if (cameraDevice == null) {
                            return
                        }

                        captureSession = session
                        previewRequestBuilder.set(CaptureRequest.CONTROL_AF_MODE,
                                CaptureRequest.CONTROL_AF_MODE_CONTINUOUS_PICTURE)

                        previewRequest = previewRequestBuilder.build()
                        session!!.setRepeatingRequest(previewRequest, captureCallback, null)
                    }

                    override fun onConfigureFailed(session: CameraCaptureSession?) {
                        Log.d(TAG, "onConfigureFailed")
                    }
                }, null)
            }

        }

        override fun onDisconnected(cameraDevice: CameraDevice) {
            Log.d(TAG, "onDisconnected")
            cameraOpenCloseLock.release()
            cameraDevice.close()
            this@CameraFragment.cameraDevice = null
        }

        override fun onError(cameraDevice: CameraDevice, error: Int) {
            Log.d(TAG, "onError")
            onDisconnected(cameraDevice)
            this@CameraFragment.activity?.finish()
        }

    }

    private fun setUpCameraOutputs(width: Int, height: Int) {
        val manager = activity!!.getSystemService(Context.CAMERA_SERVICE) as CameraManager
        try {
            for (cameraId in manager.cameraIdList) {
                val characteristics = manager.getCameraCharacteristics(cameraId)

                // We don't use a front facing camera in this sample.
                val cameraDirection = characteristics.get(CameraCharacteristics.LENS_FACING)
                if (cameraDirection != null && cameraDirection == CameraCharacteristics.LENS_FACING_FRONT) {
                    continue
                }


                // Find out if we need to swap dimension to get the preview size relative to sensor
                // coordinate.
                val displayRotation = activity!!.windowManager.defaultDisplay.rotation

                sensorOrientation = characteristics.get(CameraCharacteristics.SENSOR_ORIENTATION)
                val swappedDimensions = areDimensionsSwapped(displayRotation)

                val displaySize = Point()
                activity!!.windowManager.defaultDisplay.getSize(displaySize)
                val rotatedPreviewWidth = if (swappedDimensions) height else width
                val rotatedPreviewHeight = if (swappedDimensions) width else height
                var maxPreviewWidth = if (swappedDimensions) displaySize.y else displaySize.x
                var maxPreviewHeight = if (swappedDimensions) displaySize.x else displaySize.y

                if (maxPreviewWidth > MAX_PREVIEW_WIDTH) maxPreviewWidth = MAX_PREVIEW_WIDTH
                if (maxPreviewHeight > MAX_PREVIEW_HEIGHT) maxPreviewHeight = MAX_PREVIEW_HEIGHT

                previewSize = Size(width, height)

                // We fit the aspect ratio of TextureView to the size of preview we picked.
                if (resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
//                    textureView.setAspectRatio(previewSize.width, previewSize.height)
                } else {
//                    textureView.setAspectRatio(previewSize.height, previewSize.width)
                }

                // Check if the flash is supported.

                this.cameraId = cameraId

                // We've found a viable camera and finished setting up member variables,
                // so we don't need to iterate through other available cameras.
                return
            }
        } catch (e: CameraAccessException) {
            Log.e(TAG, e.toString())
        } catch (e: NullPointerException) {
            // Currently an NPE is thrown when the Camera2API is used but not supported on the
            // device this code runs.
            activity!!.finish()
        }

    }

    private fun areDimensionsSwapped(displayRotation: Int): Boolean {
        var swappedDimensions = false
        when (displayRotation) {
            Surface.ROTATION_0, Surface.ROTATION_180 -> {
                if (sensorOrientation == 90 || sensorOrientation == 270) {
                    swappedDimensions = true
                }
            }
            Surface.ROTATION_90, Surface.ROTATION_270 -> {
                if (sensorOrientation == 0 || sensorOrientation == 180) {
                    swappedDimensions = true
                }
            }
            else -> {
                Log.e(TAG, "Display rotation is invalid: $displayRotation")
            }
        }
        return swappedDimensions
    }

    private fun configureTransform(viewWidth: Int, viewHeight: Int) {
        activity ?: return
        val rotation = activity!!.windowManager.defaultDisplay.rotation
        val matrix = Matrix()
        val viewRect = RectF(0f, 0f, viewWidth.toFloat(), viewHeight.toFloat())
        val bufferRect = RectF(0f, 0f, previewSize.height.toFloat(), previewSize.width.toFloat())
        val centerX = viewRect.centerX()
        val centerY = viewRect.centerY()

        if (Surface.ROTATION_90 == rotation || Surface.ROTATION_270 == rotation) {
            bufferRect.offset(centerX - bufferRect.centerX(), centerY - bufferRect.centerY())
            val scale = Math.max(
                    viewHeight.toFloat() / previewSize.height,
                    viewWidth.toFloat() / previewSize.width)
            with(matrix) {
                setRectToRect(viewRect, bufferRect, Matrix.ScaleToFit.FILL)
                postScale(scale, scale, centerX, centerY)
                postRotate((90 * (rotation - 2)).toFloat(), centerX, centerY)
            }
        } else if (Surface.ROTATION_180 == rotation) {
            matrix.postRotate(180f, centerX, centerY)
        }
        textureView!!.setTransform(matrix)
    }

    companion object {

        private val TAG = "CameraFragment"

        private val STATE_PREVIEW = 0
        private val STATE_WAITING_LOCK = 1
        private val STATE_WAITING_PRECAPTURE = 2
        private val STATE_WAITING_NON_PRECAPTURE = 3
        private val STATE_PICTURE_TAKEN = 4
        private val MAX_PREVIEW_WIDTH = 1920
        private val MAX_PREVIEW_HEIGHT = 1080

        @JvmStatic private fun chooseOptimalSize(
                choices: Array<Size>,
                textureViewWidth: Int,
                textureViewHeight: Int,
                maxWidth: Int,
                maxHeight: Int,
                aspectRatio: Size
        ): Size {

            // Collect the supported resolutions that are at least as big as the preview Surface
            val bigEnough = ArrayList<Size>()
            // Collect the supported resolutions that are smaller than the preview Surface
            val notBigEnough = ArrayList<Size>()
            val w = aspectRatio.width
            val h = aspectRatio.height
            for (option in choices) {
                if (option.width <= maxWidth && option.height <= maxHeight &&
                        option.height == option.width * h / w) {
                    if (option.width >= textureViewWidth && option.height >= textureViewHeight) {
                        bigEnough.add(option)
                    } else {
                        notBigEnough.add(option)
                    }
                }
            }

            // Pick the smallest of those big enough. If there is no one big enough, pick the
            // largest of those not big enough.
            if (bigEnough.size > 0) {
                return Collections.min(bigEnough, CompareSizesByArea())
            } else if (notBigEnough.size > 0) {
                return Collections.max(notBigEnough, CompareSizesByArea())
            } else {
                Log.e(TAG, "Couldn't find any suitable preview size")
                return choices[0]
            }
        }

        @JvmStatic fun newInstance(): CameraFragment = CameraFragment()
    }
}