import { useCallback, useEffect, useState } from "react"

let chunks: BlobPart[] = []

export const useRecord = () => {
  const [blobUrl, setBlobUrl] = useState<string>()
  // const [chunks, setChunks] = useState<BlobPart[] | null>(null)
  const [recorder, setRecorder] = useState<any | null>(null)
  const [video, setVideo] = useState<MediaStream | null>(null)

  const start = useCallback(async (videoRef: HTMLVideoElement | null) => {
    console.log('recording started')

    try {
      if (videoRef) {
        videoRef.srcObject = await navigator.mediaDevices.getDisplayMedia({
          video: {
            displaySurface: "window",
          },
          audio: false,
        })
        setVideo(videoRef.srcObject)
        setRecorder(new MediaRecorder(videoRef.srcObject))
      }
    } catch (err) {
      console.error(err);
    }

  }, [])

  const stop = useCallback(async (videoRef: HTMLVideoElement | null) => {
    console.log('recording stopped')
    const tracks = video?.getTracks() || null

    if (tracks) {
      tracks.forEach((track) => {
        track.stop()
        console.log(track)
      })
    }

    setVideo(null)

    if (videoRef) {
      videoRef.srcObject = null
    }

  }, [video])

  useEffect(() => {
    const track = video?.getVideoTracks()[0]
    console.log('video', track)
    if (track) {
      // setImage(new ImageCapture(track))
      console.log('TRACK RECEIVED', track)
    }
  }, [video])

  useEffect(() => {
    console.log('blobUrl', blobUrl)
  }, [blobUrl])

  useEffect(() => {
    // console.log('recorder', recorder)
    // debugger
    if (recorder && !chunks?.length) {
      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          // setChunks((prevChunks: BlobPart[] | null) => {
          //   prevChunks = prevChunks || []
          //   return [...prevChunks, event.data]
          // })
          chunks.push(event.data)
        }
      }

      recorder.onstop = () => {
        if (chunks.length) {
          const blob = new Blob(chunks, {
            type: 'video/mp4'
          })

          const _blobUrl = URL.createObjectURL(blob)
          setBlobUrl(_blobUrl)

          console.log('BLOB URL', _blobUrl, chunks)
        }

        chunks = []
      }

      recorder.start(200)
    }

  }, [recorder, setBlobUrl])

  return {
    start,
    stop,
    video,
    blobUrl,
  }
}
