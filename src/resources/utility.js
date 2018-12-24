import MobileDetect from 'mobile-detect'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const isMobile = (new MobileDetect(window.navigator.userAgent).mobile() !== null)
