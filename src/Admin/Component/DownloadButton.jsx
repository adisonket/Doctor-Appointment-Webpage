import React from 'react'
import style from "../AdminDocDocu.module.css";

const DownloadButton = () => {
  return (
    <>
          <div className={style.download}>
              <label className={style.label}>
                  <input type="checkbox" className="input" />
                  <span className={style.circle}>
                      <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                      </svg>
                      <div className={style.square}></div>
                  </span>
                  <p className={style.show}>DOWNLOAD</p>
                  <p className={style.show}>DONE</p>
              </label>
          </div>
    </>
  )
}

export default DownloadButton