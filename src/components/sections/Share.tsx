import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Section from '@shared/Section'

import style from './Share.module.scss'
import classNames from 'classnames/bind'
import { useEffect } from 'react'

const cx = classNames.bind(style)

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_MAP_KEY)
      }
      console.log(window)
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), 'M월 dd일 eeee aaa h시', { locale: ko })}`,
        imageUrl:
          'https://image.utoimage.com/preview/cp902650/2022/02/202202012946_500.jpg',
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <Section title="공유하기">
      <div className={cx('wrap-share')}>
        <button onClick={handleShareKakao}>
          <IconKakao className="ico-kakako" />
        </button>

        <CopyToClipboard
          text={window.location.origin}
          onCopy={() => {
            alert('복사가 완료되었습니다.')
          }}
        >
          <button>
            <IconLink className="ico-link" />
          </button>
        </CopyToClipboard>
      </div>
    </Section>
  )
}

function IconKakao({ className }: { className: string }) {
  return (
    <svg className={cx(className)} id="svg8" viewBox="0 0 135.46666 135.46667">
      <defs id="defs2" />
      <g id="layer1">
        <circle
          cx={67.73333}
          cy={67.73333}
          id="path850"
          r={67.73333}
          style={{
            fill: '#ffe227',
            strokeWidth: 0.132292,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            stroke: 'none',
            fillOpacity: 1,
          }}
        />
        <g
          id="g1000"
          style={{
            strokeWidth: 0.938309,
          }}
          transform="matrix(1.0657475,0,0,1.0657475,-4.4532963,-4.4532983)"
        >
          <path
            d="M 67.594373,28.816763 A 42.191248,33.485241 0 0 0 25.542208,62.301837 42.191248,33.485241 0 0 0 44.655432,90.333198 c -1.925815,6.013156 -4.736875,15.417782 -3.717475,16.247782 1.083839,0.88245 12.715951,-6.914279 19.147596,-11.348434 a 42.191248,33.485241 0 0 0 7.647776,0.555096 42.191248,33.485241 0 0 0 42.191121,-33.485805 42.191248,33.485241 0 0 0 -42.191121,-33.485074 42.191248,33.485241 0 0 0 -0.13895,0 z"
            id="path900"
            style={{
              fill: '#1a1a1a',
              stroke: 'none',
              strokeWidth: 0.124131,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
            }}
          />
          <g
            id="g962"
            style={{
              strokeWidth: 0.615119,
            }}
            transform="matrix(1.5254102,0,0,1.5254102,-37.735311,-33.441939)"
          >
            <path
              d="m 182.63281,207.49609 c -3.60965,0 -6.51562,2.90598 -6.51562,6.51563 v 0.0254 c 0,3.60965 2.90597,6.51562 6.51562,6.51562 h 10.18164 v 39.1836 c 0,3.61653 2.91276,6.52734 6.5293,6.52734 3.61654,0 6.52734,-2.91081 6.52734,-6.52734 v -39.1836 h 10.4668 c 3.60965,0 6.51563,-2.90597 6.51563,-6.51562 v -0.0254 c 0,-3.60965 -2.90598,-6.51563 -6.51563,-6.51563 h -16.99414 z"
              id="rect910"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 237.28906,207.47461 a 7.6489301,7.6489301 0 0 0 -2.01367,0.26953 c -2.32898,0.27299 -4.42527,1.79364 -5.32812,4.14258 l -17.51954,45.57617 c -1.29753,3.37576 0.37621,7.13802 3.75196,8.43555 3.37575,1.29752 7.13801,-0.37424 8.43554,-3.75 l 2.6543,-6.90821 h 20.32227 l 2.65625,6.90821 c 1.29753,3.37576 5.0598,5.04752 8.43554,3.75 3.37576,-1.29753 5.04753,-5.05979 3.75,-8.43555 l -17.51757,-45.57617 c -0.95632,-2.48803 -3.25162,-4.04521 -5.74414,-4.17578 a 7.6489301,7.6489301 0 0 0 -1.88282,-0.23633 z m 0.14258,21.33008 5.14258,13.3789 h -10.28516 z"
              id="rect923"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 273.00391,207.49609 c -3.68524,0 -6.65039,2.96711 -6.65039,6.65235 v 45.46289 c 0,3.68524 2.96515,6.65234 6.65039,6.65234 h 20.15234 c 3.68524,0 6.65234,-2.9671 6.65234,-6.65234 0,-3.68524 -2.9671,-6.65235 -6.65234,-6.65235 h -13.5 v -38.81054 c 0,-3.68524 -2.96711,-6.65235 -6.65234,-6.65235 z"
              id="rect941"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
            <path
              d="m 308.91602,207.49609 c -3.68524,0 -6.65235,2.96711 -6.65235,6.65235 v 45.46289 c 0,3.68524 2.96711,6.65234 6.65235,6.65234 3.68523,0 6.65039,-2.9671 6.65039,-6.65234 v -13.96485 c 0.0686,-0.0646 0.14056,-0.12337 0.20703,-0.1914 l 2.32031,-2.375 15.47461,20.5625 c 2.21592,2.94463 6.36984,3.53231 9.31445,1.3164 2.94461,-2.2159 3.53038,-6.37177 1.31446,-9.3164 l -16.69922,-22.18946 14.0625,-14.39453 c 2.57528,-2.63607 2.52695,-6.83308 -0.10743,-9.41015 -2.63434,-2.57704 -6.82901,-2.52866 -9.40429,0.10742 l -16.48242,16.87109 v -12.47851 c 0,-3.68524 -2.96516,-6.65235 -6.65039,-6.65235 z"
              id="rect945"
              style={{
                fill: '#ffe227',
                fillOpacity: 1,
                stroke: 'none',
                strokeWidth: 0.307561,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 4,
                strokeDasharray: 'none',
              }}
              transform="scale(0.26458333)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

function IconLink({ className }: { className: string }) {
  return (
    <svg
      className={cx(className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,17.55,8.23,19.27a2.47,2.47,0,0,1-3.5-3.5l4.54-4.55a2.46,2.46,0,0,1,3.39-.09l.12.1a1,1,0,0,0,1.4-1.43A2.75,2.75,0,0,0,14,9.59a4.46,4.46,0,0,0-6.09.22L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33L11.37,19A1,1,0,0,0,10,17.55ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L12.63,5A1,1,0,0,0,14,6.45l1.73-1.72a2.47,2.47,0,0,1,3.5,3.5l-4.54,4.55a2.46,2.46,0,0,1-3.39.09l-.12-.1a1,1,0,0,0-1.4,1.43,2.75,2.75,0,0,0,.23.21,4.47,4.47,0,0,0,6.09-.22l4.55-4.55A4.49,4.49,0,0,0,20.69,3.31Z"
        fill="#6563ff"
      />
    </svg>
  )
}

export default Share
