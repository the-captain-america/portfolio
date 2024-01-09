/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="9.5" width="4" height="8" rx="0.5" stroke={stroke} />
      <path
        d="M11.3561 3.66579C11.182 4.50569 9.1104 7.82794 8 9.48907L8.04972 16.9641C8.87009 17.776 10.2871 18 11.2566 18L15.1347 17.86C16.3479 17.6808 16.3529 16.4602 16.2037 15.8723C17.218 15.3795 17.0904 14.1178 16.8998 13.5486C18.1129 12.7199 17.8196 11.6728 17.397 11.1969C17.9439 10.6649 18.1428 9.93701 17.8942 9.12511C17.6953 8.47559 16.5103 8.47186 15.9551 8.53718C15.2673 8.60251 13.7376 8.69396 13.1211 8.53718C12.5046 8.3804 12.5328 8.00525 12.6239 7.83727C12.7648 7.46398 13.1112 6.50464 13.3697 5.65354C13.6929 4.58968 13.8945 3.55381 13.3697 2.48994C12.9968 1.73403 12.2759 2.042 12.1267 2.18198C11.9776 2.32196 11.5256 2.84741 11.3561 3.66579Z"
        stroke={stroke}
        fill={fill}
      />
    </svg>
  )
}

export default IconPath
