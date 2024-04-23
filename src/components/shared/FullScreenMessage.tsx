import style from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

interface FullScreenMessage {
  type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessage) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path
            d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z"
            style={{
              fill: '#FF7979',
            }}
          />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{'.cls-1{fill:#efcc00;}.cls-2{fill:#353535;}'}</style>
      </defs>
      <title />
      <path
        className="cls-1"
        d="M30.16,11.51,6.84,51.9a2.13,2.13,0,0,0,1.84,3.19H55.32a2.13,2.13,0,0,0,1.84-3.19L33.84,11.51A2.13,2.13,0,0,0,30.16,11.51Z"
      />
      <path
        className="cls-2"
        d="M29,46a3,3,0,1,1,3,3A2.88,2.88,0,0,1,29,46Zm1.09-4.66-.76-15h5.26l-.73,15Z"
      />
    </svg>
  )
}

export default FullScreenMessage
