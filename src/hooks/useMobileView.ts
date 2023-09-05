import { useMediaQuery } from "react-responsive"

const mobileMaxPortraitLength = 500
const mobileMaxLandscapeLength = 900
const mobileMaxLandscapeHeight = 500

interface UseMobileView {
  onMobilePortrait?: (matches: boolean) => void
  onMobileLandscape?: (matches: boolean) => void
  onLandscape?: (matches: boolean) => void
  onPortrait?: (matches: boolean) => void
}

export const useMobileView = (handler?: UseMobileView) => {
  const isPortrait: boolean = useMediaQuery(
    { orientation: "portrait" },
    undefined,
    handler?.onPortrait
  )
  const isLandScape: boolean = useMediaQuery(
    { orientation: "landscape" },
    undefined,
    handler?.onLandscape
  )
  const isMobile: boolean = useMediaQuery(
    { maxWidth: mobileMaxPortraitLength },
    undefined,
    handler?.onMobilePortrait
  )
  const isMobileLandscape: boolean = useMediaQuery(
    { maxWidth: mobileMaxLandscapeLength, maxHeight: mobileMaxLandscapeHeight },
    undefined,
    handler?.onMobileLandscape
  )

  const isMobileView: boolean = isMobile || isMobileLandscape

  return { isPortrait, isLandScape, isMobile, isMobileLandscape, isMobileView }
}
