import { Box, CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    createUnityInstance: (
      canvas: HTMLCanvasElement,
      options: {
        dataUrl: string;
        frameworkUrl: string;
        codeUrl: string;
        streamingAssetsUrl: string;
        companyName: string;
        productName: string;
        productVersion: string;
      }
    ) => Promise<any>;
  }
}

const UnityLoader = () => {
  const unityContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const buildUrl = "/unity-webgl-build"; // Path to your WebGL build folder
    const container = unityContainerRef.current;

    if (container) {
      setIsLoading(true);
      const loaderScript = document.createElement("script");
      loaderScript.src = `${buildUrl}/build.loader.js`;

      loaderScript.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.id = "unity-canvas"; // Give the canvas an explicit ID
        container.appendChild(canvas);

        if (window.createUnityInstance) {
          window
            .createUnityInstance(canvas, {
              dataUrl: `${buildUrl}/build.data.unityweb`,
              frameworkUrl: `${buildUrl}/build.framework.js.unityweb`,
              codeUrl: `${buildUrl}/build.wasm.unityweb`,
              streamingAssetsUrl: "StreamingAssets",
              companyName: "YourCompany",
              productName: "YourProduct",
              productVersion: "1.0",
            })
            .then((unityInstance) => {
              console.log("Unity WebGL is loaded");
              setIsLoading(false);
            })
            .catch((message) => {
              console.error("Unity loading error:", message);
              setIsLoading(false);
            });
        } else {
          console.error("createUnityInstance not found");
          setIsLoading(false);
        }
      };

      document.body.appendChild(loaderScript);

      return () => {
        // Clean up: remove script and canvas when component is unmounted
        if (container && container.firstChild) {
          container.removeChild(container.firstChild);
        }
        document.body.removeChild(loaderScript);
      };
    }
  }, []);

  console.log("Loading", isLoading);

  return (
    <>
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Box
        ref={unityContainerRef}
        id="unity-container"
        sx={{
          borderRadius: 4,
          width: "100%",
          height: "75vh",
          canvas: {
            width: "100%",
            height: "93%",
            borderRadius: "20px",
            objectFit: "cover",
          },
        }}
      />
    </>
  );
};

export default UnityLoader;
