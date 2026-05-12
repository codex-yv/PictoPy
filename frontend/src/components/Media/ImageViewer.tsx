<<<<<<< HEAD
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { convertFileSrc } from '@tauri-apps/api/core';
import { ImageOff } from 'lucide-react';
=======
import { useRef, useImperativeHandle, forwardRef } from 'react';
import { ZoomableImage, ZoomableImageRef } from './ZoomableImage';
>>>>>>> 4c4252848a8ddf109ad1af1add2764073e274488

interface ImageViewerProps {
  imagePath: string;
  alt: string;
  rotation: number;
  resetSignal?: number;
}

export interface ImageViewerRef {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
}

export const ImageViewer = forwardRef<ImageViewerRef, ImageViewerProps>(
  ({ imagePath, alt, rotation, resetSignal }, ref) => {
<<<<<<< HEAD
    const transformRef = useRef<any>(null);
    const [hasError, setHasError] = React.useState(false);

    // Reset error state when imagePath changes
    React.useEffect(() => {
      setHasError(false);
    }, [imagePath]);
=======
    const zoomableImageRef = useRef<ZoomableImageRef>(null);
>>>>>>> 4c4252848a8ddf109ad1af1add2764073e274488

    useImperativeHandle(ref, () => ({
      zoomIn: () => zoomableImageRef.current?.zoomIn(),
      zoomOut: () => zoomableImageRef.current?.zoomOut(),
      reset: () => zoomableImageRef.current?.reset(),
    }));

    return (
<<<<<<< HEAD
      <TransformWrapper
        ref={transformRef}
        initialScale={1}
        minScale={0.1}
        maxScale={8}
        centerOnInit
        limitToBounds={false}
      >
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
          }}
          contentStyle={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hasError ? (
            <div className="flex flex-col items-center justify-center p-12 text-muted-foreground bg-secondary/10 rounded-xl border-2 border-dashed border-secondary/20 select-none">
              <div className="relative">
                <ImageOff className="h-24 w-24 mb-4 opacity-20" />
                <div className="absolute inset-0 blur-xl bg-primary/5 -z-10" />
              </div>
              <p className="text-base font-medium opacity-60">Image could not be loaded</p>
              <p className="text-xs opacity-40 mt-1">File may be moved or corrupted</p>
            </div>
          ) : (
            <img
              src={convertFileSrc(imagePath)}
              alt={alt}
              draggable={false}
              className="select-none transition-opacity duration-300"
              onError={() => setHasError(true)}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                zIndex: 50,
                transform: `rotate(${rotation}deg)`,
              }}
            />
          )}
        </TransformComponent>
      </TransformWrapper>
=======
      <ZoomableImage
        ref={zoomableImageRef}
        imagePath={imagePath}
        alt={alt}
        rotation={rotation}
        resetSignal={resetSignal}
      />
>>>>>>> 4c4252848a8ddf109ad1af1add2764073e274488
    );
  },
);
